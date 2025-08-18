import axios from "axios"
 const url=import.meta.env.VITE_BACKEND_URL

const Refresh= async() =>{
    const response = axios.post(`${url}/refresh_token/`,{},{withCredentials:true})
    return await response.data
}


export default Refresh 
 

export const Getuserskills= async() =>{
    const response = await axios.get(`${url}/get_skills/`,{withCredentials:true})

    return await response.data
}


export const Getskills= async() =>{
    const response = await axios.get(`${url}/skills/`,{withCredentials:true})

    return await response.data
}

export const saveOnboarding= async(onboardingData) =>{
    const response = await axios.post(`${url}/onboarding/`,{
       "skills": onboardingData 
    },
    {withCredentials:true})

    return await response.data
}

export const Getprofile= async() =>{
    const response = await axios.get(`${url}/me/`,{withCredentials:true})

    return await response.data
}

export const GetuserQuiz= async() =>{
    const response = await axios.get(`${url}/me/quiz/`,{withCredentials:true})
    return await response.data
}

export const GetuserQuizResult= async() =>{
    const response = await axios.get(`${url}/get_user_quiz_results/`,{withCredentials:true})
    return await response.data
}
