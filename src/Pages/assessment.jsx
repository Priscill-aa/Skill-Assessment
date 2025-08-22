import React, { useState } from 'react';
import '../styles/assessment.css';
import { useParams } from 'react-router-dom';
import { dummyQuizzes } from '../Data/Index';

const Assessment = () => {
  const { id, title } = useParams();
  const decodedTitle = decodeURIComponent(title);

  // Find quiz by skill id
  const quiz = dummyQuizzes.data.quizzes.find(q => q.skill.id === Number(id));
  

  
  const [currentIndex, setCurrentIndex] = useState(0);
  const currentQuestion = quiz?.questions[currentIndex];

  // if (!quiz) {
  //   return <h2>No quiz found for {decodedTitle}</h2>;
  // }

  
  
  const goNext = () => {
    if (currentIndex < quiz.questions.length - 1) {
      setCurrentIndex(prev => prev + 1);
    }
  };

  const goPrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex(prev => prev - 1);
    }
  };

  return (
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

        <h1>Assessment: {decodedTitle}</h1>
        <p className="subtext">{quiz.description}</p>

        
        <div className="progress-wrapper">
          <div className="progress-bar">
            <div
              className="progress-fill"
              style={{
                width: `${((currentIndex + 1) / quiz.questions.length) * 100}%`
              }}
            ></div>
          </div>
          <p className="progress-text">
            {currentIndex + 1} of {quiz.questions.length} Complete
          </p>
        </div>

  
        {currentQuestion && (
          <section className="question-section">
            <h2>
              Question {currentIndex + 1}: {currentQuestion.question_text}
            </h2>

            <form className="options">
              <label className="option">
                <input type="radio" name={`q-${currentQuestion.id}`} value="a" />
                <span>{currentQuestion.option_a}</span>
              </label>
              <label className="option">
                <input type="radio" name={`q-${currentQuestion.id}`} value="b" />
                <span>{currentQuestion.option_b}</span>
              </label>
              <label className="option">
                <input type="radio" name={`q-${currentQuestion.id}`} value="c" />
                <span>{currentQuestion.option_c}</span>
              </label>
              <label className="option">
                <input type="radio" name={`q-${currentQuestion.id}`} value="d" />
                <span>{currentQuestion.option_d}</span>
              </label>
            </form>

            <div className="buttons">
              <button
                className="nav-btn prev"
                onClick={goPrev}
                disabled={currentIndex === 0}
              >
                Previous
              </button>
              {currentIndex < quiz.questions.length - 1 ? (
                <button className="nav-btn next" onClick={goNext}>
                  Next
                </button>
              ) : (
                <button className="nav-btn submit" onClick={() => alert('Submit quiz!')}>
                  Submit
                </button>
              )}
            </div>
          </section>
        )}
      </main>
    </div>
  );
};

export default Assessment;
