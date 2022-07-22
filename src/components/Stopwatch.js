import React from 'react';

const Stopwatch = ({ time }) => {

    return (
        <div className="app">
            <div className='stopwatch-card'>
                <p>{time}</p>
            </div>
        </div>
    );
}


export default Stopwatch
