import { createEvent, createStore } from 'effector';

// Событие для добавления новой задачи
export const addTodo = createEvent();

// Событие для удаления задачи
export const removeTodo = createEvent();

// Функция для загрузки состояния из Local Storage
const loadState = () => {
    try {
        const serializedState = localStorage.getItem('todos');
        if (serializedState === null) {
            return [];
        }
        return JSON.parse(serializedState);
    } catch (err) {
        return [];
    }
};

// Функция для сохранения состояния в Local Storage
const saveState = (state) => {
    try {
        const serializedState = JSON.stringify(state);
        localStorage.setItem('todos', serializedState);
    } catch (err) {
        // Игнорируем ошибки записи в Local Storage
    }
};

// Начальное состояние - загружаем из Local Storage
const initialState = loadState();

// Создание хранилища с начальным состоянием и обработкой событий
export const $todos = createStore(initialState)
    .on(addTodo, (state, todo) => {
        const newState = [...state, todo];
        saveState(newState);
        return newState;
    })
    .on(removeTodo, (state, todoId) => {
        const newState = state.filter(todo => todo.id !== todoId);
        saveState(newState);
        return newState;
    });