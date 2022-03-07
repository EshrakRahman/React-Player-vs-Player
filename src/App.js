import React, {useState} from 'react';
import PlayerOne from "./PlayerOne";
import PlayerTwo from "./PlayerTwo";

const App = () => {

    const [inputValue, setInputValue] = useState(null);
    const [winingScore, setWiningScore] = useState(null);
    const [playerOneScore, setPlayerOneScore] = useState(0);
    const [playerTwoScore, setPlayerTwoScore] = useState(0);

    console.log(inputValue);

    const targetScore = () => {
        setWiningScore(inputValue);
        console.log(winingScore);
    }

    const playerOneFinalScore = () => {
        setPlayerOneScore((prevState => prevState + 1))
    }

    const playerTwoFinalScore = () => {
        setPlayerTwoScore((prevState => prevState + 1))
    }

    return (
        <div className={'main'}>
            <h1 className={'title'}>Player vs Player Game</h1>
            <p>Winning Score: {winingScore}</p>
            <div className={'players-score'}>
                <h3>Player One: {playerOneScore}</h3>
                <h3>Player Two: {playerTwoScore}</h3>
            </div>
            <input type='text' onChange={event => setInputValue(event.target.value)} className={'input'}/>
            <button className={'submit'}  onClick={targetScore}>Submit</button>
            <div className={'playground'}>
                <PlayerOne playerOneFinalScore={playerOneFinalScore}/>
                <PlayerTwo playerTwoFinalScore={playerTwoFinalScore}/>
                <button className={'player-btn'}>Reset</button>
            </div>
        </div>
    );
};

export default App;