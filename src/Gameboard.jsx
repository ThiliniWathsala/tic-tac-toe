import React from 'react'
import { useState } from 'react'


const initianGameBoard = [
    [null,null,null],
    [null,null,null],
    [null,null,null]
]

function Gameboard({activePlayer, handleSelectedSqure}) {

const [gameBoard,setGameBoard] = useState(initianGameBoard);


function handleClick(rowIndex, colIndex){
  

    setGameBoard((preGameBoard)=>{
        const updatedGameBoard = [...preGameBoard.map((innerArray)=>[...innerArray])]  // need to get a copy of inner elements of array. thats why we used map method
        console.log(preGameBoard)
        console.log(updatedGameBoard)
        updatedGameBoard[rowIndex][colIndex] = activePlayer;
        return updatedGameBoard;
    })

    handleSelectedSqure();

}

  return (
    <ol id="game-board">
        {gameBoard.map((row,rowIndex)=>{
            return (
                <li key={rowIndex}>
                    <ol>
                       {row.map((col,colIndex)=>{
                            return (
                                <li key={colIndex}>
                                    <button onClick={()=>handleClick(rowIndex,colIndex)}>{col}</button>
                                </li>
                            )
                       })}
                    </ol>
                </li>
            )
        })}
    </ol>
  )
}

export default Gameboard
