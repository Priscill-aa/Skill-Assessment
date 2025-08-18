import React from "react";
import { Link } from "react-router-dom";
import "../styles/homePage.css";
import { Bell, Search } from "lucide-react";
import { UseAuth } from "../context/usercontextprovider";
import moment from 'moment';
import Navbar from "../components/navbar";

function homePage() {  
  const {userQuizResult, gettingUserquiz,userProfile}=UseAuth()
const dateJoined = moment(userProfile?.user?.user?.date_joined).fromNow();

if (gettingUserquiz){
  return 'Loading'
}
  return (
 <div>

<Navbar/>
<main className="main">
<h1>Welcome back, {userProfile?.user?.user?.username}!</h1>
<Link to="/summary" className="summary-link">
 Here's a summary of your data and assessment
  </Link>

 <section className="profile-section">
  <div className="profile-pic"></div>
  <div className="profile-info">
    <h2>{userProfile?.user?.user?.username}</h2>
     <p>Software Engineer</p>
     <p>Joined {dateJoined} </p>
  </div>
 </section>

  <section className="skills-overview">
  <div className="skill-box">
    <h3>Total Skills</h3>
    <p>15</p>
  </div>

  <div className="skill-box">
   <h3>Verified Skills</h3>
   <p>5</p>
 </div> 


<div className="skill-box">
   <h3>Skills in Progress</h3>
   <p>2</p>
 </div>
</section>

<section className="assessments">
  <h2>My Assessments</h2>
  <div className="tabs">
  <button className="tab active">All</button>
  <button className="tab">In Progress</button>
  <button className="tab">Completed</button>
</div>


 <table className="assessment-table">
 <thead>
 <tr>
  <th>Assessment</th>
  <th>Status</th>
  <th>Score</th>
  <th>Date</th>
 </tr>
 </thead>

 <tbody>
   {userQuizResult?.results?.map((result)=>{
    return(
     
  <tr key={result.id}>
  <td>{result.quiz_title}</td>
  <td>
  <span style={{textTransform:'capitalize'}} className="status completed">{result.status}</span>
  </td>
  <td>{result.score}</td>
  <td>{result.completed_at ?  moment(result.completed_at).fromNow() : 'N/A'  } </td>
  </tr>

    )
   })}
  
</tbody>
</table>
</section>
      </main>
    </div>
  );
}

export default homePage;
