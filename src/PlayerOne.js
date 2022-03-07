import React from 'react';

const PlayerOne = ({playerOneFinalScore}) => {
    const playerOneClicked = () => {
        playerOneFinalScore();
    }
    return (
        <React.Fragment>
            <button className={'player-btn'} onClick={playerOneClicked}>Player One</button>
        </React.Fragment>
    );
};

export default PlayerOne;