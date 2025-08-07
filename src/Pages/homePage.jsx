import React from 'react'
import Navbar from '../components/navbar'

function homePage() {
  return (
    <div>
   <Navbar/>
  <main class="main">
    <h1>Welcome back, Jonathan!</h1>
    <a href="#" class="summary-link">Here's a summary of your data and assessment</a>

    <section class="profile-section">
      <div class="profile-pic"></div>
      <div class="profile-info">
        <h2>Jonathan Smith</h2>
        <p>Software Engineer</p>
        <p>Joined 2 years ago</p>
      </div>
    </section>

    <section class="skills-overview">
      <div class="skill-box">
        <h3>Total Skills</h3>
        <p>15</p>
      </div>
      <div class="skill-box">
        <h3>Verified Skills</h3>
        <p>5</p>
      </div>
      <div class="skill-box">
        <h3>Skills in Progress</h3>
        <p>2</p>
      </div>
    </section>

    <section class="assessments">
      <h2>My Assessments</h2>
      <div class="tabs">
        <button class="tab active">All</button>
        <button class="tab">In Progress</button>
        <button class="tab">Completed</button>
      </div>

      <table class="assessment-table">
        <thead>
          <tr>
            <th>Assessment</th>
            <th>Status</th>
            <th>Score</th>
            <th>Date</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Python Proficiency Test</td>
            <td><span class="status completed">Completed</span></td>
            <td>70%</td>
            <td>N/A</td>
          </tr>
          <tr>
            <td>Data Analysis Fundamental</td>
            <td><span class="status in-progress">In Progress</span></td>
            <td>N/A</td>
            <td>N/A</td>
          </tr>
          <tr>
            <td>User Interface Basics</td>
            <td><span class="status not-started">Not Started</span></td>
            <td>N/A</td>
            <td>N/A</td>
          </tr>
          <tr>
            <td>Cloud Computing Basics</td>
            <td><span class="status completed">Completed</span></td>
            <td>80%</td>
            <td>N/A</td>
          </tr>
          <tr>
            <td>Machine Learning Concepts</td>
            <td><span class="status in-progress">In Progress</span></td>
            <td>N/A</td>
            <td>N/A</td>
          </tr>
        </tbody>
      </table>
    </section>
  </main>
    </div>
  )
}

export default homePage