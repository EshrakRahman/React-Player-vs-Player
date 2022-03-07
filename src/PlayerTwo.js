import React from 'react';

const PlayerTwo = ({playerTwoFinalScore}) => {

    const playerTwoClicked = () => {
        playerTwoFinalScore();
    }

    return (
        <React.Fragment>
            <button className={'player-btn'} onClick={playerTwoClicked}>Player Two</button>
        </React.Fragment>
    );
};

export default PlayerTwo;