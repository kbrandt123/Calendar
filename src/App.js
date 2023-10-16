import React, { useState } from 'react';
import './App.css';
import Calendar from './components/Calendar';

function App() {
  const [currentDate, setCurrentDate] = useState(new Date());

  const simulateNextDay = () => {
    const nextDay = new Date(currentDate);
    nextDay.setDate(currentDate.getDate() + 1);

    if (nextDay.getDate() === 1) {
      // If the next day is the 1st of the month, transition to the next month.
      nextDay.setMonth(currentDate.getMonth() + 1);
    }

    setCurrentDate(nextDay);
  };

  return (
    <div className="app">
      <h1>My Calendar</h1>
      <Calendar currentDate={currentDate} onSimulateNextDay={simulateNextDay} />
    </div>
  );
}

export default App;
