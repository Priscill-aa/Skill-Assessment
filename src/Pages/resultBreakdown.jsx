import React from 'react';
import './resultBreakdown.css';

const resultBreakdown = () => {
  return (
<div>
 <header className="navbar">
<div className="logo">Skill Checker</div>
<nav>
 <ul>
  <li>Dashboard</li>
  <li>Assessments</li>
  <li>Reports</li>
  <li>About</li>
  <li className="profile-icon"></li>
</ul>
</nav>
</header>

<main className="container">
 <section className="heading">
  <h2>Assessment Results</h2>
    <p>Review your performance and insights from the recent assessment.</p>
 </section>

 <section className="summary-cards">
    <div className="card"><h3>Total Score</h3><p>75/100</p></div>
    <div className="card"><h3>Completion Time</h3><p>50 min</p></div>
    <div className="card"><h3>Accuracy</h3><p>80%</p></div>
</section>

 <section className="skills-breakdown">
    <div className="skills-column">
         <h4>
         Technical Skills <span>70%</span>{' '}
            <small className="trend up">+5%</small>
         </h4>
 <ul>
    <li><label>Problem Solving</label><div className="bar short"></div></li>
    <li><label>Coding Proficiency</label><div className="bar short"></div></li>
    <li><label>Data Analysis</label><div className="bar medium"></div></li>
   <li><label>System Design</label><div className="bar long"></div></li>
 </ul>
    </div>

<div className="skills-column">
    <h4>
    Soft Skills <span>65%</span>{' '}
       <small className="trend up">+3%</small>
    </h4>

 <ul>
     <li><label>Communication</label><div className="bar long"></div></li>
     <li><label>Teamwork</label><div className="bar short"></div></li>
     <li><label>Leadership</label><div className="bar long"></div></li>
     <li><label>Time Management</label><div className="bar medium"></div></li>
 </ul>

 </div>
 </section>

<section className="detailed-performance">
    <table>
      <thead>
        <tr>
          <th>Skill</th>
          <th>Score</th>
          <th>Performance Level</th>
          <th>Details</th>
        </tr>
     </thead>
    
    <tbody>
     <tr>
        <td>Problem Solving</td>
        <td>80/100</td>
        <td><span className="badge excellent">Excellent</span></td>
         <td></td>
    </tr>

     <tr>
        <td>Coding Proficiency</td>
        <td>70/100</td>
        <td><span className="badge average">Average</span></td>
        <td></td>
     </tr>
     
     <tr>
        <td>Communication</td>
        <td>90/100</td>
        <td><span className="badge excellent">Excellent</span></td>
        <td></td>
    </tr>

     <tr>
        <td>Teamwork</td>
        <td>85/100</td>
        <td><span className="badge good">Good</span></td>
        <td></td>
    </tr>
    </tbody>
    </table>
    </section>

    <section className="recommendations">
       <p>
       Based on your performance, we recommend focusing on improving your
       teamwork skills. Consider taking courses or participating in
       team-based projects to enhance your abilities in this area.
      </p>
    </section>

    <section className="actions">
        <button className="btn primary">Export Results</button>
        <button className="btn secondary">Share Results</button>
    </section>
    </main>
    </div>
 
);
};

export default resultBreakdown;
