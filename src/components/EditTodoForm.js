import React, {useState} from 'react'

export const EditTodoForm = ({editTodo, task}) => {
  const [value, setValue] = useState(task.task)

  // function responsible to capture the value of the state when we submit the form 
  const handleSubmit = e => 
  {
      e.preventDefault(); //prevent default action 
    editTodo(value, task.id)
    //after we set the form , we want to clear the form 
    setValue("")
  }

  return (
  <form className = 'TodoForm' onSubmit  = {handleSubmit}>
    <input type = "text" className = 'todo-input'
      value = {value} onChange = {(e) => setValue(e.target.value)}
      placeholder='Update task' 
      />
    <button type = 'submit' className = 'todo-btn'> Update Task </button>
  </form>)
}
