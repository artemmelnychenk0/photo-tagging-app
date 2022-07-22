import { useState } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Board from './components/Board';
import Header from './components/Header';
import ScoreBoard from './components/Scoreboard';
import Stopwatch from './components/Stopwatch';
import Data from './data';
import { formatTime } from './utils/formatTime';
import Welcome from './components/Welcome';

function App() {

  const [chosenChar, setChoseChar] = useState({ x: 0, y: 0, char: '' })

  const [timeRecord, setTimeRecord] = useState(0)
  const [showWatch, setShowWatch] = useState(false)
  const [showBoard, setShowBoard] = useState(false)
  const [startGame, setStartGame] = useState(true)

  const [timer, setTimer] = useState(0)

  const [options, setOptions] = useState([
    { value: 'Kratos', label: 'Kratos' },
    { value: 'Nathan-Drake', label: 'Nathan Drake' },
    { value: 'Arthur-Morgan', label: 'Artur Morgan' },
  ])

  const playerChoise = (arg1, arg2, arg3) => {
    setChoseChar({
      x: arg1,
      y: arg2,
      char: arg3
    })
  }
  const removedChar = (arg1) => {
    setOptions(options.filter(a => a.value !== arg1))
  }

  const gameOver = () => {
    setTimeRecord(formatTime(timer))
    setShowWatch(false)
    setShowBoard(true)
  }

  const start = () => {
    setStartGame(false)
    setInterval(() => {
      setTimer(timer => timer + 1)
    }, 1000)
    setShowWatch(true)
  }

  return (
    <div className="App">
      {startGame &&
        <div>
          <Welcome startGame={start} />
        </div>}
      <Header />
      {showWatch &&
        <div className='watch'>
          <Stopwatch time={formatTime(timer)} />
        </div>
      }
      <Data playerChoise={chosenChar} removeChar={removedChar} isGameOver={gameOver} />
      <Board sendChoise={playerChoise} options={options} />
      {showBoard &&
        <div className='watch'>
          <ScoreBoard timeScore={timeRecord} />
        </div>
      }
    </div>
  );
}
export default App;
