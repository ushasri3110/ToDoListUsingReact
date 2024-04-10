import React from 'react'
import ToDo from './ToDo'
function ToDoContainer({todos,deleteToDo}) {
  return (
    <div className="todolist-container">
    {todos.map((todo,index)=>{
      return (
        <ToDo todo={todo} index={index} deleteToDo={deleteToDo}/>
      )
    })}
  </div>
  )
}

export default ToDoContainer