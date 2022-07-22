import { useState } from 'react'
import boardimg from '../assets/board2.jpg'
import Select from 'react-select'

const Board = ({ sendChoise, options }) => {

    const [showBox, setShowBox] = useState(false)
    const [coords, setCoords] = useState({ x: 0, y: 0 })

    const show = (e) => {
        setShowBox(current => !current)
        setCoords({
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
                        left: coords.x - 27,
                        top: coords.y - 27
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



