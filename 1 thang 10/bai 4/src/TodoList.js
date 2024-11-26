import React, { useContext } from 'react'; 
import TodoContext from './TodoContext';
function TodoList() { const { todos } = useContext (TodoContext);
return (
<ul>
{todos.map((todo, index) => ( 
    <li key={index}>{todo.text}</li>
))}
</ul>
);
}
export default TodoList;