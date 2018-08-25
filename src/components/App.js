import React, { Component } from 'react';

class App extends Component {
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

  render() {
    let days = this.state.days;
    let hours = this.state.hours;
    let minutes = this.state.minutes;
    let seconds = this.state.seconds;

    return (
      <div className="app-container">
        <h1>Countdown timer for Canada!</h1>
      </div>
    );
  }
}

export default App;
