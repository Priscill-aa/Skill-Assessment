import React from "react";
import { Link } from "react-router-dom"; // ✅ import Link properly
import groupStudyImg from "../assets/group_study_progress.svg";
import loginOrSignupImg from "../assets/login_or_signup.svg";
import brandingGroupImg from "../assets/branding_group_pic.svg";
import LandingImg from "../assets/young_people_desktop.svg";
import '../styles/landingPage.css';
import Icon1 from "../assets/icons/first.png";
import Icon2 from "../assets/icons/second.png";
import Icon3 from "../assets/icons/third.png";
import Image1 from "../assets/product_manager.svg";
import Image2 from "../assets/software_engineer.svg";
import Image3 from "../assets/professional.svg";
import Navbar from "../components/navbar";

const LandingPage = () => {
  return (
    <>
     <Navbar/>
      <section
        className="landing-page"
        style={{ backgroundImage: `url(${LandingImg})` }}
      >
        <div className="overlay">
          <h1>Assess, Track, and Improve Your Skills</h1>
          <p>
            Skill Checker is the leading skills assessment platform for individuals and organizations
            to evaluate, track, and improve professional and technical skills.
          </p>
          <button className="btn primary">Get Started</button>
        </div>
      </section>

      <section className="features">
        <h2>For Individuals</h2>
        <p className="paragraph">
          Assess your skills, track your progress, and identify areas for improvement with
          SkillChecker’s comprehensive assessment tools.
        </p>
        <div className="feature-grid">
          <div className="card">
            <div><img src={Icon1} alt="" /></div>
            <h3>Assess Your Skills</h3>
            <p>Take assessments to evaluate your current skill levels in various areas.</p>
          </div>
          <div className="card">
            <div><img src={Icon2} alt="" /></div>
            <h3>Track Your Progress</h3>
            <p>Monitor your skill development over time with detailed progress reports.</p>
          </div>
          <div className="card">
            <div><img src={Icon3} alt="" /></div>
            <h3>Identify Areas For Improvement</h3>
            <p>Pinpoint specific areas where you can enhance your skills and knowledge.</p>
          </div>
        </div>
      </section>

      <section className="Recruiters-section">
        <div className="Recruiters-content">
          <h2>For Recruiters</h2>
          <p>
            Streamline your hiring process and ensure you're selecting the best candidates
            with Skill Checker’s robust assessment platform.
          </p>

          <div className="card-container">
            <div className="card2">
              <img src={groupStudyImg} alt="group study progress" className="group_study_progress" />
              <h3>Efficient Candidate Screening</h3>
              <p>Quickly screen candidates based on their skill levels, saving time and resources.</p>
            </div>

            <div className="card2">
              <img src={loginOrSignupImg} alt="login or signup" className="login_or_signup" />
              <h3>Data-Driven Hiring Decisions</h3>
              <p>Make informed hiring decisions with comprehensive data on candidate performance.</p>
            </div>

            <div className="card2">
              <img src={brandingGroupImg} alt="branding group" className="branding_group_pic" />
              <h3>Objective Skill Evaluation</h3>
              <p>Assess candidates’ skills objectively with standardized tests and detailed reports.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="Final">
        <div className="Ending">
          <h1>Ready to Elevate Your Skills</h1>
          <p>Join thousands of individuals and organizations who are using Skill Checker to achieve their goals.</p>
          <button className="btn">Get Started</button>
        </div>

        <div className="Users">
          <div className="heading">
            <h2>What Our Users Say</h2>
          </div>

          <div className="User">
            <div className="Images">
              <img src={Image1} alt="" />
              <h3>
                Skill Checker has been instrumental in helping me identify my strengths and weaknesses,
                leading to significant career growth.
              </h3>
              <p>Benjamin Jake, Project Manager</p>
            </div>

            <div className="Images">
              <img src={Image2} alt="" />
              <h3>
                The platform's detailed reports and progress tracking have allowed me to focus on areas
                that needed improvement, resulting in a promotion.
              </h3>
              <p>Gifty Johnson, Software Engineer</p>
            </div>

            <div className="Images">
              <img src={Image3} alt="" />
              <h3>
                As a recruiter, Skill Checker has streamlined our hiring process,
                ensuring we select candidates with the right skills for the job.
              </h3>
              <p>James Statesman, HR Manager</p>
            </div>
          </div>
        </div>
      </section>

      <footer>
        <div>
          <ul className="footer">
            <li><a href="#">About Us</a></li>
            <li><a href="#">Contact</a></li>
            <li><a href="#">Privacy Policy</a></li>
            <li><a href="#">Terms of Services</a></li>
          </ul>
        </div>
        <p>@2025 Skill Checker. All rights reserved.</p>
      </footer>
    </>
  );
};

export default LandingPage;
