import React from "react";
import TodoProvider from "./TodoProvider";
import TodoForm from "./TodoForm";
import TodoList from "./TodoList";
function App(){
    return(
        <TodoProvider>
            <h1>
                TO-DO List
            </h1>
           <TodoForm/> 
           <TodoList/>
           </TodoProvider>
           
    );

}
export default App;