import React from 'react';
import './assessment.css';

const assessment = () => {
  return (
    <>
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Data Analysis Assessment</title>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700&display=swap"
          rel="stylesheet"
        />
      </head>

 <div>
 <header className="navbar">
 <div className="nav-left">Skill Checker</div>
<nav className="nav-menu">
<a href="#">Home</a>
 <a href="#">Assessments</a>
<a href="#">My Skills</a>
<a href="#">My Team</a>
</nav>
<div className="nav-icons">

 <button className="icon-btn bell"></button>
<div className="profile-circle"></div>
</div>
 </header>

<main className="container">
 <button className="back-arrow">&larr;</button>
<h1>Assessment: Data Analysis Fundamentals</h1>
    <p className="subtext">
    This assessment evaluates your foundational knowledge of data analysis technique and tools
    </p>

<div className="progress">Progress</div>
<div className="progress-wrapper">
 <div className="progress-bar">
<div className="progress-fill" style={{ width: '25%' }}></div>
 </div>

 <p className="progress-text">25% Complete</p>
  </div>

<div className="timer">
<div className="time-unit">
<div className="time-value">00</div>
<div className="time-label">Hours</div>
</div>

<div className="time-unit">
<div className="time-value">45</div>
<div className="time-label">Minutes</div>
</div>

 <div className="time-unit">
 <div className="time-value">10</div>
 <div className="time-label">Seconds</div>
 </div>
 </div>

<section className="question-section">
 <h2>Question 1 of 5</h2>
    <p className="question-text">
     Which of the following is NOT a common data analysis technique?
    </p>

<form className="options">
  <label className="option">
    <input type="radio" name="question1" /> Regression Analysis
 </label>

 <label className="option">
 <input type="radio" name="question1" /> Machine Learning
 </label>
 <label className="option">
 <input type="radio" name="question1" /> Data Visualization
 </label>


<label className="option">
    <input type="radio" name="question1" /> Content Creation
 </label>
 </form>

<div className="buttons">
 <button className="nav-btn prev">Previous</button>
 <button className="nav-btn next">Next</button>
</div>
</section>
</main>
</div>
</>
  );
};

export default assessment;
