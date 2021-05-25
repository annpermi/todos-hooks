import React, {useState} from 'react';
import './App.css';


function Todo({todo, index, completeTodo, deleteTodo}){
  return (
    <div style={{textDecoration: todo.isCompleted ? 'line-through' : ''}} className='todo'>{todo.text}
      <div>
        <button onClick={() => completeTodo(index)}>Complete</button>
        <button onClick={() => deleteTodo(index)}>X</button>
      </div>
    </div>
  )
}

function TodoForm({ addTodo }){
  const [value, setValue] = useState('');
  console.log(value)
  const handleSubmit = e => {
    e.preventDefault();
    if(!value) return;
    addTodo(value);
    setValue('');
  }
  return (
    <form onSubmit={handleSubmit}>
      <input type='text' className='input' value={value} onChange={e => setValue(e.target.value)} placeholder='Add'/>
    </form>
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

  const addTodo = text => {
    const newTodos = [...todos, {text}];
    setTodos(newTodos)
  }

  const completeTodo = index => {
    const newTodos = [...todos];
    newTodos[index].isCompleted = true;
    setTodos(newTodos)
  }

  const deleteTodo = index => {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos)
  }

  return (
    <div className="app">
      <div className='todo-list'>
        <TodoForm addTodo={addTodo} />
        {todos.map((todo, index)=>{
          return <Todo key={index} index={index} todo={todo} completeTodo={completeTodo} deleteTodo={deleteTodo}/>
        })}
      </div>
    </div>
  );
}

export default App;
