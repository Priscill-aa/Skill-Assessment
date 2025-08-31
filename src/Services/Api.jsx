
import axiosClient from "../Utils/axiosClient.js"
//  const url=import.meta.env.VITE_BACKEND_URL

const Refresh= async() =>{
    const response = axiosClient.post(`/refresh_token/`,{},{withCredentials:true})
    return await response.data
}


 export default Refresh 
 
 

export const Getuserskills= async() =>{
    const response = await axiosClient.get(`/get_skills/`,{withCredentials:true})

    return await response.data
}


export const Getskills= async() =>{
    const response = await axiosClient.get(`/skills/`,{withCredentials:true})
    
    return await response.data
}

export const Getquiz= async(quiztitle) =>{
    const response = await axiosClient.post(`/get_quiz/` ,{'quiz':quiztitle},{withCredentials:true})

    return await response.data
}

export const SubmitQuiz = async(quiz) =>{
    const response = await axiosClient.post(`/submit-quiz/` ,quiz,{withCredentials:true})

    return await response.data
}

export const saveOnboarding= async(onboardingData) =>{
    const response = await axiosClient.post(`/onboarding/`,{
       "skills": onboardingData 
    },
    {withCredentials:true})

    return await response.data
}

export const Getprofile= async() =>{
    const response = await axiosClient.get(`/me/`,{withCredentials:true})

    return await response.data
}

export const GetuserQuiz= async() =>{
    const response = await axiosClient.get(`/me/quiz/`,{withCredentials:true})
    return await response.data
}

export const GetuserQuizResult= async() =>{
    const response = await axiosClient.get(`/get_user_quiz_results/`,{withCredentials:true})
    return await response.data
}
