import React from 'react';
import './Calendar.css';

function Calendar({ currentDate, onSimulateNextDay }) {
  const currentDay = currentDate.getDate();
  const currentMonth = currentDate.toLocaleString('default', { month: 'long' });
  const daysInMonth = new Date(
    currentDate.getUTCFullYear(),
    currentDate.getUTCMonth() + 1,
    0
  ).getUTCDate();

  const dayNames = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

  const simulateNextDay = () => {
    onSimulateNextDay();
  };

  return (
    <div className="calendar">
      <div className="calendar-header">
        <h2 className="month">{currentMonth}</h2>
        <button className="simulate-next-day-button" onClick={simulateNextDay}>
          Simulate Next Day
        </button>
      </div>
      <div className="calendar-grid">
        {dayNames.map((day) => (
          <div key={day} className="day-name">
            {day}
          </div>
        ))}
        {Array.from({ length: daysInMonth }, (_, i) => i + 1).map((day) => (
          <div
            key={day}
            className={`day ${day === currentDay ? 'current-day' : ''}`}
          >
            {day}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Calendar;
