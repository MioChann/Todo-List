import axios from "axios"

// export function helloWorldBean(){
//     return axios.get('http://localhost:8080/hello-world-bean')
// }

//rut gon 
//tránh lặp đường dẫn 

// export const helloWorldBean 
//         = () => axios.get('/hello-world-bean')

export const apiClient = axios.create(
    {
            baseURL: 'http://localhost:8080'
    }
)

export const helloWorldBean
    = () => apiClient.get('/hello-world-bean')
export const helloWorldPath
    = (username) => apiClient.get(`/hello-world/path-variable/${username}`)


