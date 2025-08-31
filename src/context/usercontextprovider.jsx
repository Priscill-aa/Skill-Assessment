import { createContext, useContext, useEffect, useState } from "react";
import { Getskills, GetuserQuiz, GetuserQuizResult, Getuserskills,Getprofile } from "../Services/Api";
import axiosClient from "../Utils/axiosClient";

const Usercontext = createContext ()

function Usercontextprovider({children}) {
   

    const [skills, setskills] = useState([])
    const [Userskills, setUserskills] = useState([])
    const [isAuthenticated, setIsauthenticated] = useState(false)
    const [gettingAuth, setgettingAuth] = useState(false)
    const [gettingUserquiz, setgettingUserquiz] = useState(false)
    const [userQuizResult, setUserQuizResult] = useState([])
    const [userQuiz, setUserQuiz] = useState([])
   const [userProfile, setUserProfile] = useState([])


    useEffect(() => {
        const get_auth = async () => {
        setgettingAuth(true)
        try {
            const response = await axiosClient.get(`/get_authentication/`)

            if(response) {
                const data= await response.data
                setIsauthenticated(data.data.auth)
            }
            // if (response.status === 401) {
            //     console.warn("Unauthorized — refreshing token...");
            //     await Refresh();
            // }
        } catch (error) {
            console.error("Auth check failed:", error);
        } finally {
            setgettingAuth(false)
        }
        };

        get_auth();
    }, []);


    useEffect(()=> {
        try {
            const get_skills = async() => {
                const response = await Getskills()
                setskills(response.data)
            }

            get_skills()
        } catch (error) {
            console.log(error)
        }
    
    },[]) 


    useEffect(()=> {
        try {
            const get_user_skills = async() => {
                const response = await Getuserskills()
                setUserskills(response.data)
            }

            
            isAuthenticated && get_user_skills()
        
        } catch (error) {
            console.log(error)
        }
    

    },[]) 


    useEffect(()=> {
        setgettingUserquiz(true)
        try {
            const Get_user_Quiz_Result= async() => {
                const response = await GetuserQuizResult()
               setUserQuizResult(response.data)
            }

    
            Get_user_Quiz_Result()
        
        } catch (error) {
            console.log(error)
        }
        finally{
            setgettingUserquiz(false)
        }
    

    },[]) 

    useEffect(()=> {
        
        try {
            const userQuiz= async() => {
                const response = await GetuserQuiz()
               setUserQuiz(response.data)
            }

    
            
           userQuiz()
        
        } catch (error) {
            console.log(error)
        }
       
    

    },[]) 

    useEffect(()=> {
        
        try {
            const userProfile= async() => {
                const response = await Getprofile()
              setUserProfile(response.data)
            }

    
            
           userProfile()
        
        } catch (error) {
            console.log(error)
        }
       
    

    },[]) 


    return (
<Usercontext.Provider value={{
    skills, 
    Userskills, 
    isAuthenticated,
    gettingAuth,
    gettingUserquiz,
    userQuizResult,
    userProfile,
}}>
    {children}
</Usercontext.Provider>

    ) 
}

export const UseAuth= () => useContext(Usercontext)
export default Usercontextprovider
