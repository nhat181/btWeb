import React, { useState, useEffect } from 'react'; 
import TodoContext from './TodoContext';
function TodoProvider({children }) {
const [todos, setTodos] = useState([]);
useEffect(() => {
const savedTodos= JSON.parse(localStorage.getItem('todos')) || [];
setTodos (savedTodos); 
}, []);

useEffect(() => {
localStorage.setItem('todos', JSON.stringify(todos));
}, [todos]);
const addTodo =(todo) => {
setTodos([...todos, todo]);
};
return (
<TodoContext.Provider value={{todos, addTodo }}>
    {children}
</TodoContext.Provider>
);
}
export default TodoProvider;