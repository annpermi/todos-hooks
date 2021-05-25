import React, {useState} from 'react';
import './App.css';


function Todo({index, todo}){
  return (
    <div className='todo'>{todo.text}</div>
  )
}

function App() {
  const [todos, setTodos] = useState([
    {text: 'Compile the Spring app for deployment',
    isCompleted: false},
    {text: 'Open port 8080',
    isCompleted: false},
    {text: 'SSH into the VM',
    isCompleted: false}
  ])

  return (
    <div className="app">
      {todos.map((todo, index)=>{
        return <Todo key={index} index={index} todo={todo}/>
      })}
    </div>
  );
}

export default App;
