import React, { useState, useContext } from 'react'; 
import TodoContext from './TodoContext';
function TodoForm() {
const [input, setInput] = useState('');
const { addTodo } = useContext (TodoContext);

const handleSubmit = (e) => {
e.preventDefault();
addTodo ({ text: input, completed: false });
setInput('');
};
return (
<form onSubmit={handleSubmit}>
<input value={input} onChange={(e) => setInput (e.target.value)} />
<button type="submit">Thêm công việc</button>
</form>
);
}
export default TodoForm;