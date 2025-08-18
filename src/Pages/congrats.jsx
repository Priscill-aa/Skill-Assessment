import React from 'react';
import '../styles/congrats.css'


function Congrats() {
  return (
    <div className="container">
      <div className="confetti-inline">
        <Confetti />
      </div>
      <div className="message-box">
        <h1>Congratulations</h1>
        <p>Thank you for completing your test</p>
        <button className="btn">View Breakdown</button>
      </div>
    </div>
  );
}

export default Congrats;
