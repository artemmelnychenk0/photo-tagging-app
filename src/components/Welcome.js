import kratos from '../assets/kratos.png'
import nathan from '../assets/nathan-drake.png'
import arthur from '../assets/arthur-morgan.png'

const Welcome = ({ startGame }) => {


    return (
        <div>
            <div className="background">
                <div className="endGame">
                    <div className="input">
                        Tag these characters as fast as you can!
                        Scroll through the image to find the correct character.
                        Click the character and choose the correct name.
                        You will be timed and your score will be recorded, so move fast!
                    </div>
                    <div className="scoreboard">
                        <div className='kratoss'>
                            <img src={kratos} alt='kratos'></img>
                            <h3>Kratos</h3>
                        </div>
                        <div className='kratoss'>
                            <img src={nathan} alt='nathan'></img>
                            <h3>Nathan</h3>
                        </div>
                        <div className='arthur'>
                            <img src={arthur} alt='kratos'></img>
                            <h3>Arthur</h3>
                        </div>
                    </div>
                    <div>
                        <button className='start-btn' onClick={startGame}>Start</button>
                    </div>
                </div>
            </div>

        </div>
    )
}
export default Welcome