import Todo from './model';

type Actions = 
    | {type: 'added'; payload: string}
    | {type: 'deleted'; payload: number}
    | {type: 'edited'; id: number; payload: string}
    | {type: 'done'; payload: number};


const todoReducer = (todos: Todo[], action: Actions) => {
    switch (action.type) {
        case 'added':
            return [
                ...todos,
                {id: Date.now(), todo: action.payload, isDone: false}
            ];
        case 'deleted':
            return todos.filter((todo) => todo.id !== action.payload);
        case 'edited':
            return todos.map((todo) => 
                todo.id === action.id ? {...todo, todo: action.payload} : todo
            )
        case 'done':
            return todos.map((todo) => 
                todo.id === action.payload ? {...todo, isDone: !todo.isDone} : todo
            )
        default:
            return todos;
    }
}


export default todoReducer;