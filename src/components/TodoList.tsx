// import React from 'react'
import Todo from "../model"
import SingleTodo from "./SingleTodo";
import "./styles.css"

interface Props {
    todos: Todo[];
    dispatch: React.Dispatch<Actions>;
}

const TodoList = ({todos, dispatch}: Props) => {
  return (
    <div className="container">
      <div className="todos">
        <span className="todos__heading">Current Tasks</span>
        {
          todos.map((todo) => (
            <SingleTodo todo={todo} key={todo.id} dispatch={dispatch} />
          ))
        }
      </div>
      <div className="todos remove">
      <span className="todos__heading">Completed Tasks</span>
        {
          todos.map((todo) => (
            <SingleTodo todo={todo} key={todo.id} dispatch={dispatch} />
          ))
        }
      </div>
    </div>
  )
}

export default TodoList