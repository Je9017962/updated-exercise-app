import React, { useState, useEffect } from 'react';

function StaminaExercise({ name }) {
    const [time, setTime] = useState(0);
    const [isRunning, setIsRunning] = useState(false);
    const [count, setCount] = useState(0);

    const add = () => setCount(count + 5);
    const sub = () => setCount(count - 5);
    const reset = () => setCount(0);


    useEffect(() => {
        let interval;
        if (isRunning) {
            interval = setInterval(() => {
                setTime((prevTime) => prevTime + 1);
            }, 1000);
        } else {
            clearInterval(interval);
        }
        return () => clearInterval(interval);
    }, [isRunning]);

    const startTimer = () => setIsRunning(true);
    const stopTimer = () => setIsRunning(false);
    const resetTimer = () => {
        setIsRunning(false);
        setTime(0);
    };

    const formatTime = (seconds) => {
        const minutes = Math.floor(seconds / 60);
        const remainingSeconds = seconds % 60;
        return `${String(minutes).padStart(2, '0')}:${String(remainingSeconds).padStart(2, '0')}`;
    };





    return (
        <div>
            <h2>{name}</h2>
            <p>Time: {formatTime(time)}</p>
            <button onClick={startTimer} disabled={isRunning}>Start</button>
            <button onClick={stopTimer} disabled={!isRunning}>Stop</button>
            <button onClick={resetTimer}>Reset</button>
            <h2>{name} </h2>
            <p>Total Weight: {count}</p>
            <button onClick={add}>+5</button>
            <button onClick={sub}>-5</button>
            <button onClick={reset}>Reset</button>
        </div>
    );


}



















export default StaminaExercise;
