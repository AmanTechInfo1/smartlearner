import React, { useState, useEffect } from "react";
import styles from "./CountDown.module.css";

function Countdown() {
  const [eventName, setEventName] = useState("");
  const [eventDate, setEventDate] = useState("");
  const [days, setDays] = useState(0);
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);
  const [countdownInterval, setCountdownInterval] = useState(null);
  const [countdownActive, setCountdownActive] = useState(false);

  useEffect(() => {
    const storedEndTime = localStorage.getItem("countdownEndTime");
    const storedEventName = localStorage.getItem("eventName");

    if (storedEndTime) {
      setEventName(storedEventName);
      startCountdownInterval(parseInt(storedEndTime));
    }
  }, []);

  function startCountdown() {
    if (eventName === "" || eventDate === "") {
      alert("Please enter a valid event name and date.");
      return;
    }

    const countdownEndTime = new Date(eventDate).getTime();

    if (countdownInterval) {
      clearInterval(countdownInterval);
    }

    localStorage.setItem("eventName", eventName);
    localStorage.setItem("countdownEndTime", countdownEndTime);

    startCountdownInterval(countdownEndTime);
  }

  function handleDateChange(e) {
    setEventDate(e.target.value);
    resetCountdown();
  }

  function startCountdownInterval(endTime) {
    const newCountdownInterval = setInterval(() => {
      const now = new Date().getTime();
      const timeLeft = endTime - now;

      if (timeLeft <= 0) {
        clearInterval(newCountdownInterval);
        setDays(0);
        setHours(0);
        setMinutes(0);
        setSeconds(0);
        setCountdownActive(false);
      } else {
        const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
        const hours = Math.floor(
          (timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
        );
        const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

        setDays(days);
        setHours(hours);
        setMinutes(minutes);
        setSeconds(seconds);
        setCountdownActive(true);
      }
    }, 1000);

    setCountdownInterval(newCountdownInterval);
  }

  function resetCountdown() {
    clearInterval(countdownInterval);
    localStorage.removeItem("eventName");
    localStorage.removeItem("countdownEndTime");

    setDays(0);
    setHours(0);
    setMinutes(0);
    setSeconds(0);
    setCountdownActive(false);
  }

  return (
    <>
      <div className={styles.theoryPortalCountDown}>
        <div className={styles.theoryPortalTimer}>
          <h4>
            Have a theory test coming up? Add the date and watch your countdown
            appear
          </h4>
        </div>
        <div className={styles.theoryPortalTimerInputField}>
          <label htmlFor="event-name">Name:</label>
          <input
            type="text"
            id="event-name"
            placeholder="Enter event name"
            value={eventName}
            onChange={(e) => setEventName(e.target.value)}
          />
          <label htmlFor="event-date">Date:</label>
          <input
            type="date"
            id="event-date"
            value={eventDate}
            onChange={handleDateChange}
          />
          {countdownActive ? (
            <button onClick={resetCountdown}>Reset</button>
          ) : (
            <button onClick={startCountdown}>Start</button>
          )}
        </div>
        <div className={styles.theoryPortalCountDownTimer}>
          <p>
            {days} <b>D</b>{" "}
          </p>
          <span>:</span>
          <p>
            {hours} <b>H</b>{" "}
          </p>
          <span>:</span>
          <p>
            {minutes} <b>M </b>
          </p>
          <span>:</span>
          <p>
            {seconds} <b>S</b>
          </p>
        </div>
      </div>
    </>
  );
}

export default Countdown;
