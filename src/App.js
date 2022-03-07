import React, {useState} from 'react';
import PlayerOne from "./PlayerOne";
import PlayerTwo from "./PlayerTwo";
import Reset from "./Reset";

const App = () => {

    const [inputValue, setInputValue] = useState(null);
    const [winingScore, setWiningScore] = useState(null);
    const [playerOneScore, setPlayerOneScore] = useState(0);
    const [playerTwoScore, setPlayerTwoScore] = useState(0);


    const getInputValue = (e) => {
        setInputValue(e.target.value)
    }


    const targetScore = () => {
        setWiningScore(inputValue);

    }

    const playerOneFinalScore = () => {
        setPlayerOneScore((prevState => prevState + 1))
    }

    const playerTwoFinalScore = () => {
        setPlayerTwoScore((prevState => prevState + 1))
    }

    const reset = () => {
        setInputValue(null);
        setWiningScore(null);
        setPlayerOneScore(0);
        setPlayerTwoScore(0)
    }

    return (
        <div className={'main'}>
            <h1 className={'title'}>Player vs Player Game</h1>
            <p>Winning Score: {winingScore}</p>
            <div className={'players-score'}>
                <h3>Player One: {playerOneScore}</h3>
                <h3>Player Two: {playerTwoScore}</h3>
            </div>

            <input type='text' onChange={getInputValue} className={'input'}/>
            <button className={'submit'}  onClick={targetScore} type='submit'>Submit</button>
            <div className={'playground'}>
                <PlayerOne playerOneFinalScore={playerOneFinalScore}/>
                <PlayerTwo playerTwoFinalScore={playerTwoFinalScore}/>
                <Reset reset={reset}/>
            </div>
        </div>
    );
};

export default App;