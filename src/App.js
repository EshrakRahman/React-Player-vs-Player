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
        </div>
    );
};

export default App;