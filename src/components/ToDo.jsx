import React from 'react'

function ToDo({todo,index,deleteToDo}) {
  return (
    <div className="todolist">
      <p>{todo}</p>
      <div className="actions">
        <input type="checkbox" />
        <button onClick={()=>deleteToDo(index)}>Delete</button>
      </div>
    </div>
  )
}

export default ToDo