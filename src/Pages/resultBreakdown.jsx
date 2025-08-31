import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "../styles/resultBreakdown.css";

const ResultBreakdown = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const data = location.state;

  if (!data) {
    return (
      <div>
        <h2>No result data found</h2>
        <button onClick={() => navigate("/")}>Go Home</button>
      </div>
    );
  }

  const { score, total, wrong_answers } = data;
  const percentage = Math.round((score / total) * 100);

  // Feedback message
  let feedback = "";
  if (percentage >= 80) {
    feedback = "Excellent work! 🎉 You really nailed this assessment.";
  } else if (percentage >= 60) {
    feedback = "Good job 👍. A little more practice and you’ll ace it.";
  } else {
    feedback = "Keep going 💪. Review the wrong answers to improve.";
  }

  return (
    <div>
      <header className="navbar">
        <div className="logo">Skill Checker</div>
        <nav>
          <ul>
            <li onClick={() => navigate("/")}>Dashboard</li>
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
          <p>{feedback}</p>
        </section>

        <section className="summary-cards">
          <div className="card">
            <h3>Total Score</h3>
            <p>
              {score}/{total}
            </p>
          </div>
          <div className="card">
            <h3>Accuracy</h3>
            <p>{percentage}%</p>
          </div>
          <div className="card">
            <h3>Questions Wrong</h3>
            <p>{wrong_answers.length}</p>
          </div>
        </section>

        <section className="detailed-performance">
          <h3>Wrong Answers</h3>
          <table>
            <thead>
              <tr>
                <th>Question ID</th>
                <th>Your Answer</th>
                <th>Correct Answer</th>
              </tr>
            </thead>
            <tbody>
              {wrong_answers.map((w, idx) => (
                <tr key={idx}>
                  <td>{w.question_id}</td>
                  <td>{w.selected_option}</td>
                  <td>{w.correct_option}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </section>

        <section className="actions">
          <button className="btn primary" onClick={() => navigate("/")}>
            Back to Dashboard
          </button>
        </section>
      </main>
    </div>
  );
};

export default ResultBreakdown;
