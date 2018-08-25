import React from "react";
import CountdownTimer from "./CountdownTimer";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      currentTime: new Date(),
      countDownDate: new Date("Jully 18, 2018 11:20:00"),
      days: "00",
      hours: "00",
      minutes: "00",
      seconds: "00"
    };
  }

  componentDidMount() {
    // Check if the countDownDate is not finished
    if (this.state.countDownDate - this.state.currentTime > 0) {
      this.timer = setInterval(() => this.tick(), 1000);
    }
  }

  componentWillUnmount() {
    clearInterval(this.timer);
  }

  tick() {
    let timeLeft = this.state.countDownDate - this.state.currentTime;
    let days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
    let hours = Math.floor(
      (timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    let minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

    this.setState({
      currentTime: new Date(),
      // Always display two digits
      days: days < 10 ? (days === 0 ? "00" : "0" + days) : days,
      hours: hours < 10 ? (hours === 0 ? "00" : "0" + hours) : hours,
      minutes: minutes < 10 ? (minutes === 0 ? "00" : "0" + minutes) : minutes,
      seconds: seconds < 10 ? (seconds === 0 ? "00" : "0" + seconds) : seconds
    });
  }

  render() {
    let days = this.state.days;
    let hours = this.state.hours;
    let minutes = this.state.minutes;
    let seconds = this.state.seconds;

    return (
      <div className="app-container">
        <h1>Compte à rebours pour le Canada</h1>
        <CountdownTimer
          days={days}
          hours={hours}
          minutes={minutes}
          seconds={seconds}
        />
      </div>
    );
  }
}

export default App;
