// import React from 'react'
import { AiFillEdit, AiFillDelete } from "react-icons/ai";
import { MdDone } from "react-icons/md";
import Todo from "../model";

import "./styles.css";
import { useEffect, useRef, useState } from "react";

interface Props {
  todo: Todo;
  dispatch: React.Dispatch<Actions>;
}

const SingleTodo = ({ todo, dispatch }: Props) => {
    const [edit, setEdit] = useState<boolean>(false);
    const [editTodo, setEditTodo] = useState<string>(todo.todo);

    const inputRef = useRef<HTMLInputElement>(null)

    const handleDone = (id: number) => {
    dispatch({
      type: 'done',
      payload: id,
    })
  };

  const handleDelete = (id: number) => {
    dispatch({
      type: 'deleted',
      payload: id,
    })
  };

  const handleEditCompletion = (e: React.FormEvent, id: number) => {
    e.preventDefault();

    dispatch({
      type: 'edited',
      id: id,
      payload: editTodo,
    })

    setEdit(false);
  };

  useEffect(() => {
    inputRef.current?.focus();
  }, [edit])
  

  return (
    <form className="todos__single" onSubmit={(e) => handleEditCompletion(e, todo.id)}>
        {
            edit ? (
                <input type="text" value={editTodo} onChange={(e) => setEditTodo(e.target.value)} className="todos__single--text" ref={inputRef} />
            ) : todo.isDone ? (
                <s className="todos__single--text">{todo.todo}</s>
            ) : (
                <span className="todos__single--text">{todo.todo}</span>
            )
        }

      <div className="icons">
        <span className="icon" onClick={() =>{
            if(!edit && !todo.isDone) {
                setEdit(!edit)
            }
        }
        }>
          {<AiFillEdit />}
        </span>
        <span className="icon" onClick={() => handleDelete(todo.id)}>
          {<AiFillDelete />}
        </span>
        <span className="icon" onClick={() => handleDone(todo.id)}>
          {<MdDone />}
        </span>
      </div>
    </form>
  );
};

export default SingleTodo;
