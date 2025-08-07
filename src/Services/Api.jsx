import axios from "axios"
 const url=import.meta.env.VITE_BACKEND_URL

const Refresh= async() =>{
    const response = axios.post(`${url}/refresh_token/`,{},{withCredentials:true})
    return await response.data
}


export default Refresh 