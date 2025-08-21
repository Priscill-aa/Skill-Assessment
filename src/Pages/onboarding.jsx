import { useState } from 'react';
import '../styles/onboarding.css'
import { Link, useNavigate } from 'react-router-dom'
import { UseAuth } from '../context/usercontextprovider';
import { OnboardingCard } from '../components/OnboardingCard';
import { Loader2 } from 'lucide-react';
import { saveOnboarding } from '../Services/Api';
import { toast } from 'react-toastify';
import Navbar from '../components/navbar';


const Onboarding = () => {
  const { skills, gettingSkills } = UseAuth()
  const [selectedSkills, setSelectedSkills] = useState([]);
  const [Isloading, setIsloading] = useState(false);
  const navigate = useNavigate()
  const handleOnboarding = async () => {

    setIsloading(true)
    try {
      const response = await saveOnboarding(selectedSkills)
      if (response) {
        const data = response.data
        toast.success(data.message || 'Onboarding successful')
        setTimeout(() => {
          navigate(data.url)
        }, 2000)
      }
    } catch (error) {
      const data = error.response?.data || {};
      toast.error(data.message || 'Error occurred');
      console.log(error)
    }
    finally { setIsloading(false) }
  }

  console.log(skills)



  return (
    <div>
      <Navbar />

      <main className='onboarding-main'>
        <Link to="/login">
          <span className="material-icons back-arrow">arrow_back</span>
        </Link>

        <h2>Choose a skill to assess</h2>

        <div className="skills-grid">
          {skills?.skills?.map((skill) => {
            return <OnboardingCard key={skill.id} {...skill} selectedSkills={selectedSkills} setSelectedSkills={setSelectedSkills} />
          })}
        </div>

        <div className="next-button-container">
          <button onClick={handleOnboarding} id="next-btn">
            {Isloading ? 'Please wait...' : 'Next'}
          </button>
        </div>
      </main>
    </div>
  );
};

export default Onboarding;
