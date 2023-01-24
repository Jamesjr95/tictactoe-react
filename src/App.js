import React, {useState} from 'react';

import './App.css';
import {Board} from './components/Board';

function App() {

  const [board, setBoard] = useState(Array(9).fill(null))

  const handleBoxClick = (boxIndex) => {
    const updatedBoard = board.map((value, index) => {
      if (index === boxIndex) {
        return 'X'
      } else {
        return value
      }
    })

    setBoard(updatedBoard)
  }

  return (
    <div className="App">
      <Board board={board} onClick={handleBoxClick}/>
    </div>
  );
}

export default App;
