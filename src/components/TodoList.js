import React from 'react';
import { useStore } from 'effector-react';
import { $todos, removeTodo } from '../models/todoModel';

const TodoList = () => {
    // Получение состояния из хранилища
    const todos = useStore($todos);

    return (
        <ul>
            {todos.map(todo => (
                <li key={todo.id}>
                    {todo.text}
                    <button onClick={() => removeTodo(todo.id)}>Удалить</button>
                </li>
            ))}
        </ul>
    );
};

export default TodoList;
