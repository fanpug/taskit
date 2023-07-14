import { useState, useReducer } from 'react'
import './App.css'
import InputField from './components/InputField'
import TodoList from './components/TodoList'
import todoReducer from "./reducer"

const App: React.FC = () => {
  const [todo, setTodo] = useState<string>("");
  // const [todos, setTodos] = useState<Todo[]>([]);
  const [todos, dispatch] = useReducer(todoReducer, []);

  const handleAdd = (e: React.FormEvent) => {
    e.preventDefault();

    dispatch({
      type: 'added',
      payload: todo,
    })

    setTodo("");
  };

  console.log(todos);

  return (
    <div className='App'>
      <span className='heading'>TaskIt</span>
      <InputField todo={todo} setTodo={setTodo} handleAdd={handleAdd} />
      <TodoList todos={todos} dispatch={dispatch} />
    </div>
  )
}

export default App
