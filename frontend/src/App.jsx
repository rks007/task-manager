import { useEffect, useState } from 'react'
import './App.css'
import CreateTodo from './components/CreateTodo';
import Todos from './components/Todos';

function App() {

  const [todos, setTodos] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/todos")
    .then(async (res)=>{
      const json = await res.json();
      setTodos(json.todos);
    })
    .catch((error)=>{
      console.log("error fetching todos:", error);
    })

  },[])

  return (
    <>
      <CreateTodo/>
      <Todos todos={todos}></Todos>
    </>
  )
}

export default App
