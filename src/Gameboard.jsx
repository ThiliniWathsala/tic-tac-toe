import React from 'react'
import { useState } from 'react'



function Gameboard({ handleSelectedSqure, board}) {

//// const [gameBoard,setGameBoard] = useState(initianGameBoard);

//// function handleClick(rowIndex, colIndex){


////    return gameBoard;
////
////      setGameBoard((preGameBoard)=>{
////          const updatedGameBoard = [...preGameBoard.map((innerArray)=>[...innerArray])]  //  need to get a copy of inner elements of array. thats why we used map method
////
////          if(updatedGameBoard[rowIndex][colIndex] === null){
////              updatedGameBoard[rowIndex][colIndex] = activePlayer;
////              handleSelectedSqure(rowIndex,colIndex);
////          }
////          return updatedGameBoard;
////      })
////  }

  return (
    <ol id="game-board">
        {board.map((row,rowIndex)=>{
            return (
                <li key={rowIndex}>
                    <ol>
                       {row.map((col,colIndex)=>{
                            return (
                                <li key={colIndex}>
                                    <button onClick={()=>handleSelectedSqure(rowIndex,colIndex)} disabled={col !== null ? true : false}>{col}</button>
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
