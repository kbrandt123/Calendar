import React, { useState } from "react";
import "./App.css";
import Calendar from "./components/Calendar";
import { format } from "date-fns"; // Import the format function

function App() {
  const [currentDate, setCurrentDate] = useState(new Date());

  const simulateNextDay = () => {
    const nextDay = new Date(currentDate);
    nextDay.setDate(currentDate.getDate() + 1);
    setCurrentDate(nextDay);
  };

  return (
    <div className="app">
      <h1>{format(currentDate, "MMMM yyyy")}</h1>
      <Calendar currentDate={currentDate} onSimulateNextDay={simulateNextDay} />
    </div>
  );
}

export default App;
