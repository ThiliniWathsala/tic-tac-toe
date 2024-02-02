import React from "react";


export default function GameOver({winner, setLog, winnerName}){
    return(
        <div id="game-over">
            <h2>Game Over!</h2>
            {winner && <p>The Winner : {winnerName} - {winner}!</p>}
            {!winner && <p>Game is Draw!</p>}
           <button onClick={()=>setLog([])}>Rematch!</button>
        </div>
    )
}
