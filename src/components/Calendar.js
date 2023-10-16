import React from "react";
import "./Calendar.css";
import {
  format,
  startOfMonth,
  addDays,
  subDays,
  eachDayOfInterval,
  isSameMonth,
  addMonths,
  isLastDayOfMonth,
} from "date-fns";
import { utcToZonedTime } from "date-fns-tz";

function Calendar({ currentDate, onSimulateNextDay }) {
  const currentMonth = format(currentDate, "MMMM yyyy");
  const firstDayOfMonth = startOfMonth(currentDate);
  const zonedFirstDayOfMonth = utcToZonedTime(
    firstDayOfMonth,
    "America/Los_Angeles"
  );

  const startOfCalendar = subDays(
    zonedFirstDayOfMonth,
    zonedFirstDayOfMonth.getDay()
  );
  const endOfCalendar = addDays(startOfCalendar, 41);
  const daysInMonth = eachDayOfInterval({
    start: startOfCalendar,
    end: endOfCalendar,
  });

  const dayNames = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

  const simulateNextDay = () => {
    const nextDay = addDays(currentDate, 1);

    if (isLastDayOfMonth(utcToZonedTime(currentDate, "America/Los_Angeles"))) {
      const nextMonth = addMonths(currentDate, 1);
      onSimulateNextDay(startOfMonth(nextMonth));
    } else {
      onSimulateNextDay(utcToZonedTime(nextDay, "America/Los_Angeles"));
    }
    console.log(currentDate);
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
        {daysInMonth.map((date) => (
          <div
            key={date}
            className={`day ${
              format(currentDate, "yyyy-MM-dd") ===
              format(utcToZonedTime(date, "America/Los_Angeles"), "yyyy-MM-dd")
                ? "current-day"
                : ""
            } ${date.getMonth() !== currentDate.getMonth() ? "faint-day" : ""}`}
          >
            {format(utcToZonedTime(date, "America/Los_Angeles"), "d")}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Calendar;
