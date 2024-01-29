import {useState} from "react"
import Player from "./Player"
import Gameboard from "./Gameboard"
import Log from "./Log.jsx";


function setActivePlater(gameBoard) {
    let currentPlayer = 'X'

    if (gameBoard.length > 0 && gameBoard[0].selectedPlayer === 'X') {
        currentPlayer = 'O'
    }
    return currentPlayer;
}


function App() {

    // const [activePlayer, setActivePlayer] = useState('X');
    // const [gameBoard,setGameBoard] = useState(initianGameBoard);

    const [log, setLog] = useState([]);

    const activePlayer = setActivePlater(log);

    function handleSelectedSqure(rowIndex, colIndex) {
        setLog((preLogState) => {

            const currentPlayer = setActivePlater(preLogState);

            const updatedLog = [
                {
                    selectedPlayer: currentPlayer,
                    selectedSqure: {row: rowIndex, col: colIndex}
                }
                , ...preLogState
            ]
            return updatedLog;
        })
    }

    return (
        <menu>
            <div id="game-container">
                <ol id="players" className='highlight-player'>
                    <Player activePlayer={activePlayer === 'X'} name="Player 1" symbol="x"/>
                    <Player activePlayer={activePlayer === 'O'} name="Player 2" symbol="O"/>

                </ol>
                Game Board
                <Gameboard log={log} handleSelectedSqure={handleSelectedSqure}/>
            </div>
            <Log log={log}/>
            <div>

            </div>
        </menu>
    )
}

export default App
