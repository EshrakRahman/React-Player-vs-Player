import React, {useState} from 'react';
import PlayerOne from "./PlayerOne";
import PlayerTwo from "./PlayerTwo";

const App = () => {

    const [winningScore, setWinningScore] = useState(null);


    console.log(winningScore);
    return (
        <div className={'main'}>
            <h1 className={'title'}>Player vs Player Game</h1>
            <p>Winning Score: {winningScore}</p>
            <div className={'players-score'}>
                <h3>Player One: 1</h3>
                <h3>Player Two: 2</h3>
            </div>
            <input type='text' onChange={event => setWinningScore(event.target.value)} className={'input'}/>
            <button className={'submit'}>Submit</button>
            <div className={'playground'}>
                <PlayerOne />
                <PlayerTwo />
                <button className={'player-btn'}>Reset</button>
            </div>
        </div>
    );
};

export default App;