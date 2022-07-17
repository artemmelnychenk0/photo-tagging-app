import { useState } from 'react'
import boardimg from '../assets/board.jpg'
import Select from 'react-select'

const Board = ({ sendChoise }) => {

    const [showBox, setShowBox] = useState(false)
    const [coords, setCoords] = useState({ x: 0, y: 0 })

    const options = [
        { value: 'char1', label: 'char1' },
        { value: 'char2', label: 'char2' },
        { value: 'char3', label: 'char3' },
    ]

    const show = (e) => {
        setShowBox(current => !current)
        console.log(e.clientX)
        console.log(e.clientY)
        setCoords({
            x: e.clientX,
            y: e.clientY
        })
    }

    const selection = (e) => {
        const select = e.value
        sendChoise(coords.x, coords.y, select);
    }

    return (
        <div className='board' onClick={show}>
            {showBox && (<div className='game'
                style={{
                    position: 'absolute',
                    left: coords.x,
                    top: coords.y
                }}>
                <div className='box'>
                </div>
                <div className='selector'>
                    <Select
                        defaultValue={{ value: 'char1', label: 'char1' }}
                        defaultMenuIsOpen
                        options={options}
                        onChange={selection} />
                </div>
            </div>)}

            <img src={boardimg} alt='board'></img>
        </div>

    )
}
export default Board



