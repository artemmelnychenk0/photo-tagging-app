/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react"
import { db } from "./firebase-config";
import { collection, getDocs, query, where } from 'firebase/firestore'


const Data = (playerChoise) => {
    const chosenCoords = playerChoise.playerChoise

    const updateChoise = () => {
        setChosen({
            x: chosenCoords.x,
            y: chosenCoords.y,
            char: chosenCoords.char
        })
    }

    const [chosen, setChosen] = useState({ x: 0, y: 0, char: '' })
    const [users, setUsers] = useState([]);

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
    const getUsers = async () => {
        const data = await getDocs(q);
        setUsers(data.docs.map((doc) => ({ ...doc.data() })))

    }

    const isPlayerRight = () => {
        if (users.length === 0) {
            console.log('Wrong spot')
        } else {
            console.log(`You found ${users[0].char}`)
        }
    }

}
export default Data