import React from "react";

const CountdownTimer = props => {
  return (
    <div id="countdown">
      <div id="tiles">
        <span>{props.days}</span>
        <span>{props.hours}</span>
        <span>{props.minutes}</span>
        <span>{props.seconds}</span>
      </div>
      <div class="labels">
        <li>Jours</li>
        <li>Heures</li>
        <li>Mins</li>
        <li>Secs</li>
      </div>
    </div>
  );
};

export default CountdownTimer;
