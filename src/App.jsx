import {useState} from "react"
import Player from "./Player"
import Gameboard from "./Gameboard"
import Log from "./Log.jsx";

function App() {

    const initianGameBoard = [
        [null, null, null],
        [null, null, null],
        [null, null, null]
    ]

    const [activePlayer, setActivePlayer] = useState('X');
    const [log, setLog] = useState([]);

// const [gameBoard,setGameBoard] = useState(initianGameBoard);

    function handleSelectedSqure(rowIndex, colIndex) {
        setLog((preLogState) => {
            setActivePlayer((currActivePlayer) => currActivePlayer === 'X' ? 'O' : 'X');

            let currentPlayer = 'X'

            if (log.length > 0 && preLogState[0].selectedPlayer === 'X') {
                currentPlayer = 'O'
            }

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
                <Gameboard activePlayer={activePlayer} log={log} handleSelectedSqure={handleSelectedSqure}/>
            </div>
            <Log log={log}/>
            <div>

            </div>
        </menu>
    )
}

export default App
