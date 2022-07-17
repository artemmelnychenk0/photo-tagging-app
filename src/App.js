import { useState } from 'react';
import './App.css';

import Board from './components/Board';
import Data from './data';

function App() {

  const [chosenChar, setChoseChar] = useState({ x: 0, y: 0, char: '' })

  const playerChoise = (arg1, arg2, arg3) => {
    setChoseChar({
      x: arg1,
      y: arg2,
      char: arg3
    })
  }


  return (
    <div className="App">
      <h2>Photo Tagging App</h2>
      <Board sendChoise={playerChoise} />
      <Data playerChoise={chosenChar} />
    </div>
  );
}

export default App;
