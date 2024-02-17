
import { useState } from 'react';
import {useParams,Link} from 'react-router-dom';
import { helloWorldBean, helloWorldPath } from './api/HelloWorldApiService';
import { useAuth } from './security/AuthContex';

function WelcomeComponent(){

    const {username} =  useParams('')

    const authContex = useAuth()

    const [message, setMessage] = useState(null)

    function callHelloWorldRestApi(){
       helloWorldBean()
            .then( (response) => successfullResponse(response))
            .catch((error) => errorResponse(error))
            .finally( () => console.log('cleanup'))
        //     helloWorldPath('MioChan',authContex.token)
        //    .then( (response) => successfullResponse(response))
        //    .catch((error) => errorResponse(error))
        //    .finally( () => console.log('cleanup'))
    }
    



function successfullResponse(response){
    console.log(response)
    //lấy giá trị của trường message trong api để gán
    setMessage(response.data.message)
}
function errorResponse(response){
    console.log(console.error())
}

    return(
        <div className="WelcomComponent">
            <h1>Welcom {username}</h1>

            <div>
                {/* Link để  làm mới chỉ 1 component chứ ko reload cả page  */}
                <Link to='/todo'>List Todos</Link>
                {/* <a href='/todo'>List Todos</a> */}
            </div>
            <div>
                 <button class = "btn btn-success m-5" onClick= {callHelloWorldRestApi}>Call Hello World</button>
            </div>
            <div className="text-info">{message}</div>

        </div>
    );
    
}
export default WelcomeComponent