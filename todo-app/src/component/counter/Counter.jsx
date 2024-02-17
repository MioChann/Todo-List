import { useState } from 'react';
import './Counter.css';
// khi có  default thì trong đường dẫn import sẽ không có {}
export default function Counter({by}){
    //biến count là giá trị hiện tại của state , 
    //khi gọi đến setCount thì count sẽ cập nhâtj giá trị mới
    const [count, setCount] = useState(0);


    function increamentFunction(){
        setCount(count + by)
        
    }
    function discreamentFunction(){
        setCount(count - by)
        
    }

    return(
        <div className="Counter">
            <span className="count">count = {count}</span>
            <div>
            <button className="counterButton"
                onClick={increamentFunction}>+{by}
                         
                </button>
                
            </div>
            <div>
            <button className="counterButton"
                onClick={discreamentFunction}>-{by}
                         
                </button>
                
            </div>
             </div>
    );
}


