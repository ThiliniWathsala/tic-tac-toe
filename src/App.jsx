import { useState } from "react"
import Player from "./Player"
import Gameboard from "./Gameboard"

function App() {
  
const [activePlayer, setActivePlayer] = useState('X');

function handleSelectedSqure() {
  setActivePlayer((currActivePlayer)=>currActivePlayer === 'X' ? 'O' : 'X')
}

  return (
   <menu>
    <div id="game-container">
      <ol id="players" className='highlight-player'>
        <Player activePlayer ={activePlayer === 'X'} name="Player 1" symbol="x" />
        <Player activePlayer ={activePlayer === 'O'} name="Player 2" symbol="O" />

      </ol>
      Game Board
      <Gameboard activePlayer ={activePlayer}  handleSelectedSqure = {handleSelectedSqure} />
    </div>
    <div>

    </div>
   </menu>
  )
}

export default App
