import React from 'react';
import '../styles/assessment.css';
import { useParams } from 'react-router-dom';
import { dummyQuizzes } from '../Data/Index';

const Assessment = () => {
  const { id, title } = useParams();

  const quizId = 1;
  const quiz = dummyQuizzes.data.quizzes.find(q => q.id === quizId);
  console.log(quiz)

  return (
    <>
     
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

          <h1>Assessment: {title}</h1>
          <p className="subtext">{quiz.description}</p>

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
            <h2>Question 1 of 5 {quiz.quiz}</h2>
            <p className="question-text">
              Which of the following is NOT a common data analysis technique?
             {question_text}
            </p>

            <div className="Question">
              <form className="options">
                <label className="option" >
                  <input type="radio" name="question1" value="regression" />
                  <span>Regression Analysis</span>
                </label>

                <label className="option">
                  <input type="radio" name="question1"  value="ml" />
                  <span>Machine Learning</span>
                </label>

                <label className="option">
                  <input type="radio" name="question1" value="viz" />
                  <span>Data Visualization</span>
                </label>

                <label className="option">
                  <input type="radio" name="question1" value="content" />
                  <span>Content Creation</span>
                </label>
              </form>
            </div>

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

export default Assessment;
