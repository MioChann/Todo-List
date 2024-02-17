import './TodoApp.css'
import LogoutComponent from './LogoutComponent'
import FooterComponent from './FooterComponent'
import HeaderComponent from './Header'
import LoginComponent from './Login';
import WelcomeComponent from './Welcom'
import ErrorComponent from './Error'
import ListTodoComponent from './ListTodo'
import AuthProvider, { useAuth } from './security/AuthContex';
import TodoComponent from './TodoComponent';

import { BrowserRouter,Route,Routes , useNavigate, useParams,Link, Navigate} from 'react-router-dom';


function AuthenticatedRoute({children}){
   const authContex = useAuth

   if(authContex.isAuthenticated)
      return children
    
    //trả về đường dẫn 
    return <Navigate to ="/"/>

}

export default function TodoApp(){
    return (
        <div className="TodoApp">

            

        <AuthProvider>
        <BrowserRouter>
            <HeaderComponent/>
              <Routes>

                {/* Routing để khi nhập đường dẫn thì sẽ đến element mong muốn  */}
                  <Route path='' element = {   <LoginComponent/>}></Route>

                  <Route path='/login'             element = {     <LoginComponent/>}></Route>
                  <Route path='/welcome/:username' element = {     <WelcomeComponent/>}></Route>
                  <Route path='*'                  element = {     <ErrorComponent/>}></Route>
                  <Route path='/todo'              element = {    
                    <ListTodoComponent/>     
                        }
                        ></Route>
                  
                  <Route path='/todo/:id'              element = {    
                    <TodoComponent/>     
                        }
                        ></Route>
                  <Route path='/logout'            element = {     <LogoutComponent/>}></Route>
                  
              </Routes>
            <FooterComponent/>
            </BrowserRouter>
        </AuthProvider>           

         
       
            </div>
        
    );
}







               





