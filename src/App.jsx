import React, { useState, useEffect } from "react";


const Timer = () => {
  const [seconds, setSeconds] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const [showSettings, setShowSettings] = useState(false);
  const [backgroundColor, setBackgroundColor] = useState("white");
  const [buttonColor, setButtonColor] = useState("red");

  useEffect(() => {
    let interval;
    if (isRunning) {
      interval = setInterval(() => {
        setSeconds((prev) => prev + 1);
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [isRunning]);

  const formatTime = (totalSeconds) => {
    const minutes = Math.floor(totalSeconds / 60);
    const secs = totalSeconds % 60;
    return `${String(minutes).padStart(2, "0")}:${String(secs).padStart(
      2,
      "0"
    )}`;
  };

  const handleStart = () => setIsRunning(true);
  const handlePause = () => setIsRunning(false);
  const handleResume = () => setIsRunning(true);
  const handleRestart = () => {
    setIsRunning(false);
    setSeconds(0);
  };

  const handleEmojiClick = () => {
    window.open("https://www.youtube.com/watch?v=dQw4w9WgXcQ", "_blank");
  };

  const changeBackgroundColor = () => {
    const colors = [
      "white",
      "lightblue",
      "lightpink",
      "lightgreen",
      "red",
      "purple",
      "lightyellow",
      "orange",
    ];
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    setBackgroundColor(randomColor);
  };

  const changeButtonColor = () => {
    const colors = ["red", "blue", "green", "orange", "purple"];
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    setButtonColor(randomColor);
  };

  return (
    <div
      style={{
        textAlign: "center",
        fontFamily: "Arial, sans-serif",
        fontSize: "100px",
        backgroundColor,
        height: "100vh",
        margin: 0,
        padding: 0,
        overflow: "hidden",
      }}
    >
      <h1 style={{ cursor: "pointer" }} onClick={handleEmojiClick}>
        ⏱ Timer
      </h1>
      <h2 style={{ fontSize: "80px" }}>{formatTime(seconds)}</h2>
      {!isRunning && seconds === 0 && (
        <button
          onClick={handleStart}
          style={{
            backgroundColor: buttonColor,
            color: "white",
            fontSize: "60px",
            cursor: "pointer",
            borderRadius: "20px",
          }}
        >
          Start
        </button>
      )}
      {isRunning && (
        <button
          onClick={handlePause}
          style={{
            backgroundColor: buttonColor,
            color: "white",
            fontSize: "60px",
            cursor: "pointer",
            borderRadius: "20px",
          }}
        >
          Pause
        </button>
      )}
      {!isRunning && seconds > 0 && (
        <button
          onClick={handleResume}
          style={{
            backgroundColor: buttonColor,
            color: "white",
            fontSize: "60px",
            cursor: "pointer",
            borderRadius: "20px",
          }}
        >
          Resume
        </button>
      )}
      <button
        onClick={handleRestart}
        style={{
          backgroundColor: buttonColor,
          color: "white",
          fontSize: "60px",
          cursor: "pointer",
          marginLeft: "10px",
          borderRadius: "20px",
        }}
      >
        Restart
      </button>

      <div style={{ marginTop: "30px" }}>
        <button
          onClick={() => setShowSettings(!showSettings)}
          style={{
            backgroundColor: "gray",
            color: "white",
            fontSize: "40px",
            cursor: "pointer",
            borderRadius: "10px",
          }}
        >
          ⚙ Settings
        </button>
      </div>

      {showSettings && (
        <div style={{ marginTop: "20px" }}>
          <button
            onClick={changeBackgroundColor}
            style={{
              backgroundColor: "black",
              color: "white",
              fontSize: "30px",
              cursor: "pointer",
              borderRadius: "10px",
              margin: "10px",
            }}
          >
            Change Background
          </button>
          <button
            onClick={changeButtonColor}
            style={{
              backgroundColor: "black",
              color: "white",
              fontSize: "30px",
              cursor: "pointer",
              borderRadius: "10px",
              margin: "10px",
            }}
          >
            Change Button Color
          </button>
        </div>
      )}
    </div>
  );
};

export default Timer;
