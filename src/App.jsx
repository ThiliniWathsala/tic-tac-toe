import {useState} from "react"
import Player from "./Player"
import Gameboard from "./Gameboard"
import Log from "./Log.jsx";
import {Winning_Combination} from './winning-combination.js'
import GameOver from "./GameOver.jsx";

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
    const [winnersName,setWinnersName] = useState({X:'Player 1',O:'Player 2'});

    const activePlayer = setActivePlater(log);

    let gameBoard = [...initianGameBoard.map(item=>[...item])];
    let winner;
    console.log(winnersName)

    function handlePlayerNameChange(symbol, newName){
        setWinnersName((preWinnerName) =>{
            return {
                ...preWinnerName,
                [symbol]:newName
            }
        })
    }

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

            if (
                firstTurn &&
                firstTurn === secondTurn &&
                firstTurn === thirdTurn)
            {
               winner = winnersName[firstTurn];
            }
    }
        const hasDraw = log.length === 9 && !winner;

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
                    <Player handlePlayerNameChange={handlePlayerNameChange} activePlayer={activePlayer === 'X'} name={winnersName.X} symbol="X"/>
                    <Player handlePlayerNameChange={handlePlayerNameChange} activePlayer={activePlayer === 'O'} name={winnersName.O} symbol="O"/>

                </ol>
                Game Board
                {(winner || hasDraw) && <GameOver winnerName={winner === 'x'? winnersName.x : winnersName.y} setLog={setLog} winner={winner} />}
                <Gameboard board={gameBoard} handleSelectedSqure={handleSelectedSqure}/>
            </div>
            <Log log={log}/>
            <div>

            </div>
        </menu>
    )
}

export default App
