/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react"
import { db } from "./firebase-config";
import { collection, getDocs, query, where, } from 'firebase/firestore'


const Data = ({ playerChoise, removeChar, isGameOver }) => {
    const chosenCoords = playerChoise
    const [chosen, setChosen] = useState({ x: 0, y: 0, char: '' })
    const [users, setUsers] = useState([]);
    const [foundChars, setFoundChards] = useState([])
    const [foundOne, setFoundOne] = useState('')

    const [wrongDiv, setWrongDiv] = useState(false)
    const [firstRequest, setFirstRequest] = useState(true)
    const [showBox, setShowBox] = useState(false)

    const userRef = collection(db, 'coords');
    const q = query(userRef, where('x', '==', chosen.x), where('y', '==', chosen.y), where('char', '==', chosen.char))

    useEffect(() => {
        updateChoise()
    }, [playerChoise])

    useEffect(() => {
        getUsers()
    }, [chosen])

    useEffect(() => {
        isPlayerRight();
    }, [users])

    const updateChoise = () => {
        setChosen({
            x: Math.round(chosenCoords.x / 100),
            y: Math.round(chosenCoords.y / 100),
            char: chosenCoords.char
        })
    }

    const getUsers = async () => {
        const data = await getDocs(q);
        if (data.docs.length === 0 && firstRequest === false) {
            wrongSelection()
        }
        setUsers(data.docs.map((doc) => ({ ...doc.data() })))
    }

    setTimeout(() => {
        setFirstRequest(false)
    }, 1000)

    const isPlayerRight = () => {
        if (users.length !== 0) {
            setFoundChards(arr => [...arr, users[0].char])
            setFoundOne(users[0].char)
            removed();
        }
    }

    const wrongSelection = () => {
        setWrongDiv(true)
        setTimeout(() => {
            setWrongDiv(false)
        }, 2000);
    }

    const removed = () => {
        if (foundChars.length === 3) {
            isGameOver();
        }
        setShowBox(current => !current)
        removeChar(foundOne)
    }

    return (
        <div>
            {showBox &&
                (<div className="popup-box">
                    <div className="box2">
                        <span className="close-icon" onClick={removed}>OK</span>
                        You found {users[0].char}
                    </div>
                </div>)}
            {wrongDiv &&
                (<div className="popup-box2">
                    <div className="box3">
                        Your choise is wrong
                    </div>
                </div>)
            }
        </div>
    )
}
export default Data