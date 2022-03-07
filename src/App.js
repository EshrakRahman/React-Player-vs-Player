import React from 'react';

const App = () => {
    return (
        <div className={'main'}>
            <h1 className={'title'}>Player vs Player Game</h1>
            <p>Winning Score: 7</p>
            <div className={'players-score'}>
                <h3>Player One: 1</h3>
                <h3>Player Two: 2</h3>
            </div>
            <input type='text' className={'input'}/>
            <button className={'submit'}>Submit</button>
            <div>
                <button className={'player-btn'}>Player One</button>
                <button className={'player-btn'}>Player Two</button>
                <button className={'player-btn'}>Reset</button>
            </div>
        </div>
    );
};

export default App;