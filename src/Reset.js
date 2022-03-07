import React from 'react';

const Reset = ({reset}) => {
    const resetAll = () => {
        reset();
    }
    return (
        <React.Fragment>
            <button className={'player-btn'}  onClick={resetAll}>Reset</button>
        </React.Fragment>
    );
};

export default Reset;