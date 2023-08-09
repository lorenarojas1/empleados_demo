import React from 'react';
import './App.css';
import People from './components/People';
import Positions from './components/Positions';
import EmployeesPositions from './components/EmployeesPositions';

function App() {
  return (
    <div className="App">
      <People/>
      <Positions/>
      <EmployeesPositions/>
    </div>
  );
}

export default App;
