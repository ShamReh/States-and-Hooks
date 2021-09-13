import { useState } from "react";
import GameRoom from "./GameRoom";
import AddGamers from "./AddGamers";

const Game = () => {

    const [playerName, setPlayerName] = useState("");
    const [players, setPlayers] = useState([]);

    const newPlayer = ({ target }) => {
        setPlayerName(target.value);
    }

    const submitForm = (event) => {
        // prevent form submission on initial click 
        event.preventDefault();
    }

    const handleAdd = () => {
        // save playername into the array 
        setPlayers(players => [...players, playerName]);
    }

    return (
        <>
            <AddGamers newPlayer={newPlayer} submitHandler={submitForm} handleAdd={handleAdd} />
            <GameRoom players={players} />
        </>
    );

}

export default Game;