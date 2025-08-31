import React, { useEffect, useState } from 'react';
import '../styles/assessment.css';
import { useParams, useNavigate } from 'react-router-dom';
import { Getquiz, SubmitQuiz } from '../Services/Api'; // <-- make sure SubmitQuiz is in your Api.js
import { toast } from 'react-toastify';

const Assessment = () => {
  const { title } = useParams();
  const decodedTitle = decodeURIComponent(title);
  const navigate = useNavigate();

  const [quiz, setQuiz] = useState(null);
  const [loading, setLoading] = useState(true);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [answers, setAnswers] = useState({}); // { questionId: selectedOption }

  useEffect(() => {
    if (title.trim()) {
      const getcurrentquiz = async () => {
        try {
          const response = await Getquiz(title);
          setQuiz(response.data.quiz);
        } catch (err) {
          console.error('Error fetching quiz:', err);
        } finally {
          setLoading(false);
        }
      };
      getcurrentquiz();
    }
  }, [title]);

  const goNext = () => {
    if (currentIndex < quiz.questions.length - 1) {
      setCurrentIndex((prev) => prev + 1);
    }
  };

  const goPrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex((prev) => prev - 1);
    }
  };

  const handleOptionChange = (questionId, value) => {
    setAnswers((prev) => ({
      ...prev,
      [questionId]: value.toUpperCase(), // keep consistent with backend (A, B, C, D)
    }));
  };

  const handleSubmit = async () => {
    if (!quiz) return;

    // Transform answers object into array format
    const payload = {
      quiz_id: quiz.id,
      answers: Object.entries(answers).map(([question_id, selected_option]) => ({
        question_id: Number(question_id),
        selected_option,
      })),
    };

    try {
      const response = await SubmitQuiz(payload); // POST to /submit-quiz

      if (response) {
        toast.success(response.data.message)
        navigate('/result', { state: response.data });
      }

    } catch (error) {
      console.error('Submission error:', error);
    }
  };

  if (loading) {
    return <h2>Loading quiz...</h2>;
  }

  if (!quiz) {
    return <h2>No quiz found for {decodedTitle}</h2>;
  }

  const currentQuestion = quiz.questions[currentIndex];

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
        {/* Back Arrow -> Home */}
        <button className="back-arrow" onClick={() => navigate('/')}>
          &larr;
        </button>

        <h1>Assessment: {quiz.title}</h1>
        <p className="subtext">{quiz.description}</p>

        <div className="progress-wrapper">
          <div className="progress-bar">
            <div
              className="progress-fill"
              style={{
                width: `${((currentIndex + 1) / quiz.questions.length) * 100}%`,
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
              {['a', 'b', 'c', 'd'].map((opt) => (
                <label className="option" key={opt}>
                  <input
                    type="radio"
                    name={`q-${currentQuestion.id}`}
                    value={opt.toUpperCase()}
                    checked={answers[currentQuestion.id] === opt.toUpperCase()}
                    onChange={() =>
                      handleOptionChange(currentQuestion.id, opt)
                    }
                  />
                  <span>{currentQuestion[`option_${opt}`]}</span>
                </label>
              ))}
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
                <button className="nav-btn submit" onClick={handleSubmit}>
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
