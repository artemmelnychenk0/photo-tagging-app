/* eslint-disable react-hooks/exhaustive-deps */
import { addDoc, collection, getDocs } from "firebase/firestore"
import { useEffect, useState } from "react"
import { db } from "../firebase-config"
const ScoreBoard = ({ timeScore }) => {

    const [name, setName] = useState('')
    const [scores, setScores] = useState([])
    const scoreCollectionRef = collection(db, 'scores')

    useEffect(() => {
        getScores()
    }, [])

    const getScores = async () => {
        const data = await getDocs(scoreCollectionRef);
        setScores(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })))
    }

    const createUser = async () => {
        await addDoc(scoreCollectionRef, { name: name, time: timeScore })

    }

    const changeValue = (e) => {
        setName(e.target.value)
    }

    return (
        <div>
            <div className="background">
                <div className="endGame">
                    <div className="input">
                        <p>YOUR TIME:</p>
                        <p>{timeScore}</p>
                        <p>Enter your name:</p>
                        <input className='input' type='text' valu={name} onChange={changeValue}></input>
                        <button className="submitbtn" onClick={createUser}>Submit</button>
                    </div>
                    <div className="scoreboard">
                        <h2>High Scores</h2>
                        {scores.map((score) => {
                            return (
                                <div className="score" key={score.id}>
                                    <h5>{score.name}</h5>
                                    <h5>{score.time}</h5>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </div>

        </div>
    )
}
export default ScoreBoard