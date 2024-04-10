import "./App.css";
import { useState } from "react";
import InputContainer from "./components/InputContainer";
import ToDoContainer from "./components/ToDoContainer";

function App() {
  const [inputVal, setInputVal] = useState('');
  const [todos, setTodos] = useState([]);

  function writeToDo(e) {
    setInputVal(e.target.value);
  }

  function addToDo() {
    if (inputVal !== '') {
      setTodos(prevTodos => [...prevTodos, inputVal]);
      setInputVal('');
    }
  }

  function deleteToDo(index) {
    setTodos(prevTodos => prevTodos.filter((_, prevTodoIndex) => prevTodoIndex !== index));
  }

  return (
    <main>
      <h1>To Do List</h1>
      <InputContainer inputValue={inputVal} writeToDo={writeToDo} addToDo={addToDo}/>
      <ToDoContainer todos={todos} deleteToDo={deleteToDo}/>
    </main>
  );
}

export default App;
