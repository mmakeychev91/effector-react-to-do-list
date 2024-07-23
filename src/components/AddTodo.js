import React, { useState } from 'react';
import { addTodo } from '../models/todoModel';

const AddTodo = () => {
    const [text, setText] = useState('');

    const handleAdd = () => {
        // Добавление новой задачи с уникальным id
        addTodo({
            id: Date.now(),
            text,
        });
        setText('');
    };

    return (
        <div>
            <input
                type="text"
                value={text}
                onChange={(e) => setText(e.target.value)}
            />
            <button onClick={handleAdd}>Добавить</button>
        </div>
    );
};

export default AddTodo;
