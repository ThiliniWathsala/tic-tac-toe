import React from 'react'
import { useState } from 'react'

function Player({name,symbol, activePlayer}) {
    const [isEditing,setIsEditing] = useState(false);
    const [playerName, setPlayerName] = useState(name);

    function handleEditClick(){
        setIsEditing((editing)=> !editing);
    }

    function handleInputChange(e){
        setPlayerName(e.target.value)
    }

    let player = <span className="player-name">{playerName}</span>;
    let buttonCaption = "Edit";
    if(isEditing){
        player = <input type='text' value={playerName} placeholder='enter player name' onChange={handleInputChange} />
        buttonCaption='Save'
    }

  return (
    <li className={activePlayer ? 'active' : undefined}>
        <span id="player">
        {player}
        <span className="player-symbol">{symbol}</span>
        </span>
        <button onClick={handleEditClick}>{buttonCaption}</button>
    </li>
  )
}

export default Player
