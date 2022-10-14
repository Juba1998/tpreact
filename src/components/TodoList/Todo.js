import TodoList from './TodoList';
import TodoForm from './TodoForm'
import { useState } from "react";

function Todo(props) {

    const [todo, setTodo] = useState("");
    const [todoList, setTodoList] = useState([]);

    return(
        <main className={props.darkMode ? "dark" : ""}>
            <TodoForm todo={todo} 
                setTodo={setTodo} 
                todoList={todoList} 
                setTodoList={setTodoList} />
            <TodoList setTodoList={setTodoList} todoList={todoList} />
        </main>
    )
}

export default Todo;