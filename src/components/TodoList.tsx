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
    <div className="todos">
        {todos.map(todo => (
            <SingleTodo todo={todo} key={todo.id} dispatch={dispatch} />
        ))}
    </div>
  )
}

export default TodoList