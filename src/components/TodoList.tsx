// import React from 'react'
import Todo from "../model";
import SingleTodo from "./SingleTodo";
import "./styles.css";
import { Droppable } from "react-beautiful-dnd";

interface Props {
  todos: Todo[];
  dispatch: React.Dispatch<Actions>;
  completedTodos: Todo[];
  setCompletedTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
}

const TodoList = ({
  todos,
  dispatch,
  completedTodos,
  setCompletedTodos,
}: Props) => {
  return (
    <div className="container">
      <Droppable droppableId="TodosList">
        {(provided) => (
          <div
            className="todos"
            ref={provided.innerRef}
            {...provided.droppableProps}
          >
            <span className="todos__heading">Current Tasks</span>
            {todos.map((todo, index) => (
              <SingleTodo 
                index={index} 
                todo={todo} 
                key={todo.id} 
                dispatch={dispatch} 
              />
            ))}
            {provided.placeholder}
          </div>
        )}
      </Droppable>
      <Droppable droppableId="TodosRemove">
        {(provided) => (
          <div
            className="todos remove"
            ref={provided.innerRef}
            {...provided.droppableProps}
          >
            <span className="todos__heading">Completed Tasks</span>
            {todos.map((todo, index) => (
              <SingleTodo 
                index={index} 
                todo={todo} 
                key={todo.id} 
                dispatch={dispatch} 
                todos={completedTodos} 
                setTodos={setCompletedTodos} />
            ))}
            {provided.placeholder}
          </div>
        )}
      </Droppable>
    </div>
  );
};

export default TodoList;
