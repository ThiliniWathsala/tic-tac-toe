import React from 'react'
import { useState } from 'react'


const initianGameBoard = [
    [null,null,null],
    [null,null,null],
    [null,null,null]
]

function Gameboard({ handleSelectedSqure, log}) {

// const [gameBoard,setGameBoard] = useState(initianGameBoard);

// function handleClick(rowIndex, colIndex){
   let gameBoard = initianGameBoard;

   for(const logs of log){
       const {selectedPlayer, selectedSqure} = logs;
       const {row, col} = selectedSqure;
       if(gameBoard[row][col] === null){
           gameBoard[row][col] = selectedPlayer;
       }
   }

   // return gameBoard;

    // setGameBoard((preGameBoard)=>{
    //     const updatedGameBoard = [...preGameBoard.map((innerArray)=>[...innerArray])]  // need to get a copy of inner elements of array. thats why we used map method
    //
    //     if(updatedGameBoard[rowIndex][colIndex] === null){
    //         updatedGameBoard[rowIndex][colIndex] = activePlayer;
    //         handleSelectedSqure(rowIndex,colIndex);
    //     }
    //     return updatedGameBoard;
    // })
// }

  return (
    <ol id="game-board">
        {gameBoard.map((row,rowIndex)=>{
            return (
                <li key={rowIndex}>
                    <ol>
                       {row.map((col,colIndex)=>{
                            return (
                                <li key={colIndex}>
                                    <button onClick={()=>handleSelectedSqure(rowIndex,colIndex)}>{col}</button>
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
