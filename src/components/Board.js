import { useState } from 'react'
import boardimg from '../assets/board2.jpg'
import Select from 'react-select'

const Board = ({ sendChoise, options }) => {

    const [showBox, setShowBox] = useState(false)
    const [showCoords, setShowCoords] = useState({ x: 0, y: 0 })
    const [coords, setCoords] = useState({ x: 0, y: 0 })


    const show = (e) => {
        setShowBox(current => !current)
        const xCoord = Math.round((e.pageX / e.target.offsetWidth) * 100)
        const yCoord = Math.round((e.pageY / e.target.offsetHeight) * 100)
        setCoords({
            x: xCoord,
            y: yCoord
        })
        setShowCoords({
            x: e.pageX,
            y: e.pageY
        })

    }

    const selection = (e) => {
        const select = e.value
        sendChoise(coords.x, coords.y, select);

    }

    return (
        <div className='board' onClick={show} >
            {showBox &&
                (<div className='game'
                    style={{
                        position: 'absolute',
                        left: showCoords.x - 27,
                        top: showCoords.y - 27
                    }}>
                    <div className='box'>
                    </div>
                    <div className='selector'>
                        <Select
                            defaultMenuIsOpen
                            options={options}
                            onChange={selection} />
                    </div>
                </div>)}
            <div className='boardimg'>
                <img src={boardimg} alt='board'></img>
            </div>
        </div>
    )
}
export default Board



