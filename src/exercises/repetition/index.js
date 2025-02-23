import React, { useState } from 'react';

function RepetitionExercise({ name }) {
    const [count, setCount] = useState(0);

    const add = () => setCount(count + 1);
    const sub = () => setCount(count - 1);
    const reset = () => setCount(0);

    return (
        <div>
            <h2>{name} Push Ups</h2>
            <p>Rep Count: {count}</p>
            <button onClick={add}>+1</button>
            <button onClick={sub}>-1</button>
            <button onClick={reset}>Reset</button>
        </div>
    );
    return (

        <div>
            <h2>{name} Sit Ups</h2>
            <p>Rep Count: {count}</p>

            <button onClick={add}>+1</button>
            <button onClick={sub}>-1</button>
            <button onClick={reset}>Reset</button>
        </div>
    );
}

export default RepetitionExercise;

