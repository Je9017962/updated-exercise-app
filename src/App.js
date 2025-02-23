import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';
import RepetitionExercise from './exercises/repetition/index';
import DurationExercise from './exercises/duration/index';
import StaminaExercise from './exercises/stamina/index';
function App() {
  const [selectedExercise, setSelectedExercise] = useState(null);

  const handleExerciseSelect = (exerciseType) => {
    setSelectedExercise(exerciseType);
  };

  return (
    <div className="App">
      <h1>Exercise Tracker</h1>
      <div>
        <button onClick={() => handleExerciseSelect('repetition')}>Repetition Exercise</button>
        <button onClick={() => handleExerciseSelect('duration')}>Duration Exercise</button>
        <button onClick={() => handleExerciseSelect('stamina')}>Stamina Exercise</button>
      </div>

      {selectedExercise === 'repetition' && <RepetitionExercise name="Push-ups" />}
      {selectedExercise === 'duration' && <DurationExercise name="Running" />}
      {selectedExercise === 'repetition' && <RepetitionExercise name="Sit-ups" />}
      {selectedExercise === 'stamina' && <StaminaExercise name="Sledpushes" />}

    </div>
  );
}

export default App;