import axios from "axios"

export const apiClient = axios.create(
        {
                baseURL: 'http://localhost:8080'
        }
    )

export const createApi
        //todo detail is body 
        = (username, todo) => apiClient.post(`/users/${username}/todos`, todo)

export const retrieveTodosForUsername
        = (username) => apiClient.get(`/users/${username}/todos`)


export const deleteApi
        = (username, id) => apiClient.delete(`/users/${username}/todos/${id}`)
export const retrieveTodoApi
        = (username, id) => apiClient.get(`/users/${username}/todos/${id}`)
export const updateApi
        //todo detail is body 
        = (username, id, todo) => apiClient.put(`/users/${username}/todos/${id}`, todo)
