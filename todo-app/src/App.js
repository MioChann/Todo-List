import logo from './logo.svg';
import './App.css';
import FirstComponent from './component/learning_example/FirstComponent';
import {SecondComponent} from './component/learning_example/SecondComponent';
import {FifthComponent} from './component/learning_example/FirstComponent';
import LearningComponent from './component/learning_example/LearningComponent';
import Counter from './component/counter/Counter';

import  TodoApp  from './component/todo/TodoApp';

function App() {
  return (
    <div className="App">
      
    {/* <LearningComponent />
    <Counter by = {1}/>
    <Counter by = {2}/>
    <Counter by = {3}/> */}
    <TodoApp/>
 
    </div>
  );
}

export default App;
