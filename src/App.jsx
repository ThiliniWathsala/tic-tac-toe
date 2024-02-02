import {useState} from "react"
import Player from "./Player"
import Gameboard from "./Gameboard"
import Log from "./Log.jsx";
import {Winning_Combination} from './winning-combination.js'

function setActivePlater(gameBoard) {
    let currentPlayer = 'X'

    if (gameBoard.length > 0 && gameBoard[0].selectedPlayer === 'X') {
        currentPlayer = 'O'
    }
    return currentPlayer;
}

const initianGameBoard = [
    [null, null, null],
    [null, null, null],
    [null, null, null]
]

function App() {

    const [log, setLog] = useState([]);

    const activePlayer = setActivePlater(log);

    let gameBoard = initianGameBoard;
    let winner;

    for (const boards of log) {
        const {selectedPlayer, selectedSqure} = boards;
        const {row, col} = selectedSqure;
        if (gameBoard[row][col] === null) {
            gameBoard[row][col] = selectedPlayer;
        }
    }

        for (const combination of Winning_Combination) {

            const firstTurn = gameBoard[combination[0].row][combination[0].col];
            const secondTurn = gameBoard[combination[1].row][combination[1].col];
            const thirdTurn = gameBoard[combination[2].row][combination[2].col];
            console.log(firstTurn,secondTurn,thirdTurn)

            if (
                firstTurn &&
                firstTurn === secondTurn &&
                firstTurn === thirdTurn)
            {
                console.log(firstTurn)
               winner = firstTurn;
            }

    }


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
                {winner &&
                    <>
                        <p>The winner is {winner}</p>
                        <p>GAME <OVER></OVER></p>
                    </>
                     }
                <Gameboard board={gameBoard} handleSelectedSqure={handleSelectedSqure}/>
            </div>
            <Log log={log}/>
            <div>

            </div>
        </menu>
    )
}

export default App
