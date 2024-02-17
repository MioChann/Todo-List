import { createContext, useContext, useState } from "react";



//create Contex
export const AuthContex = createContext()


//useContex là 1 Hook để lấy giá trị trừ AuthContex
export const useAuth = () => useContext(AuthContex)

function AuthProvider({ children }) {
    const [isAuthenticated, setAuthenticate] = useState(false)

    const [username, setUsername] = useState(null)



    function login(username, password){
        if(username ==='Miochan' && password === 'chan'){
            setAuthenticate(true)
            //tạo biến lưu username khi xác thực thành công 
            setUsername(username)
            return true
        }
        else{        
            setAuthenticate(false)
            setUsername(null)
            return false
        }
    }

    

    function logout() {
        setAuthenticate(false)
        // setToken(null)
        setUsername(null)
    }

    return (

        //other components can access values in 'value'
        <AuthContex.Provider value={{isAuthenticated,setAuthenticate, login, logout, username}}>
            {children}
        </AuthContex.Provider>
    )
}

export default AuthProvider

