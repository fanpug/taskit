// import React from 'react'
import { AiFillEdit, AiFillDelete } from "react-icons/ai";
import { MdDone } from "react-icons/md";
import Todo from "../model";

import "./styles.css";
import { useEffect, useRef, useState } from "react";
import { Draggable } from "react-beautiful-dnd";

const SingleTodo: React.FC<{
  index: number;
  todo: Todo;
  todos: Array<Todo>;
  setTodos: React.Dispatch<React.SetStateAction<Array<Todo>>>;
}> = ({ index, todo, todos, setTodos }) => {
  const [edit, setEdit] = useState<boolean>(false);
  const [editTodo, setEditTodo] = useState<string>(todo.todo);

  const inputRef = useRef<HTMLInputElement>(null);
  useEffect(() => {
    inputRef.current?.focus();
  }, [edit]);

  const handleEdit = (e: React.FormEvent, id: number) => {
    e.preventDefault();
    setTodos(
      todos.map((todo) => (todo.id === id ? { ...todo, todo: editTodo } : todo))
    );
    setEdit(false);
  };

  const handleDelete = (id: number) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const handleDone = (id: number) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, isDone: !todo.isDone } : todo
      )
    );
  };

  return (
    <Draggable draggableId={todo.id.toString()} index={index}>
      {(provided, snapshot) => (
        <form
          onSubmit={(e) => handleEdit(e, todo.id)}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          ref={provided.innerRef}
          className={`todos__single ${snapshot.isDragging ? "drag" : ""}`}
        >
          {edit ? (
            <input
              value={editTodo}
              onChange={(e) => setEditTodo(e.target.value)}
              className="todos__single--text"
              ref={inputRef}
            />
          ) : todo.isDone ? (
            <s className="todos__single--text">{todo.todo}</s>
          ) : (
            <span className="todos__single--text">{todo.todo}</span>
          )}
          <div>
            <span
              className="icon"
              onClick={() => {
                if (!edit && !todo.isDone) {
                  setEdit(!edit);
                }
              }}
            >
              <AiFillEdit />
            </span>
            <span className="icon" onClick={() => handleDelete(todo.id)}>
              <AiFillDelete />
            </span>
            <span className="icon" onClick={() => handleDone(todo.id)}>
              <MdDone />
            </span>
          </div>
        </form>
      )}
    </Draggable>
  );
};

export default SingleTodo;

// interface Props {
//   index: number;
//   todo: Todo;
//   dispatch: React.Dispatch<Actions>;
// }

// const SingleTodo = ({ index, todo, dispatch }: Props) => {
//   const [edit, setEdit] = useState<boolean>(false);
//   const [editTodo, setEditTodo] = useState<string>(todo.todo);

//   const inputRef = useRef<HTMLInputElement>(null);

//   const handleDone = (id: number) => {
//     dispatch({
//       type: "done",
//       payload: id,
//     });
//   };

//   const handleDelete = (id: number) => {
//     dispatch({
//       type: "deleted",
//       payload: id,
//     });
//   };

//   const handleEditCompletion = (e: React.FormEvent, id: number) => {
//     e.preventDefault();

//     dispatch({
//       type: "edited",
//       id: id,
//       payload: editTodo,
//     });

//     setEdit(false);
//   };

//   useEffect(() => {
//     inputRef.current?.focus();
//   }, [edit]);

//   return (
//     <Draggable draggableId={todo.id.toString()} index={index}>
//       {(provided) => (
//         <form
//           className="todos__single"
//           onSubmit={(e) => handleEditCompletion(e, todo.id)}
//           {...provided.draggableProps}
//           {...provided.dragHandleProps}
//           ref={provided.innerRef}
//         >
//           {edit ? (
//             <input
//               type="text"
//               value={editTodo}
//               onChange={(e) => setEditTodo(e.target.value)}
//               className="todos__single--text"
//               ref={inputRef}
//             />
//           ) : todo.isDone ? (
//             <s className="todos__single--text">{todo.todo}</s>
//           ) : (
//             <span className="todos__single--text">{todo.todo}</span>
//           )}

//           <div className="icons">
//             <span
//               className="icon"
//               onClick={() => {
//                 if (!edit && !todo.isDone) {
//                   setEdit(!edit);
//                 }
//               }}
//             >
//               {<AiFillEdit />}
//             </span>
//             <span className="icon" onClick={() => handleDelete(todo.id)}>
//               {<AiFillDelete />}
//             </span>
//             <span className="icon" onClick={() => handleDone(todo.id)}>
//               {<MdDone />}
//             </span>
//           </div>
//         </form>
//       )}
//     </Draggable>
//   );
// };

// export default SingleTodo;
