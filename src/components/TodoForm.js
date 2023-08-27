import React, {useState} from 'react'

export const TodoForm = ({addTodo}) => {
  const [value, setValue] = useState('')

  // function responsible to capture the value of the state when we submit the form 
  const handleSubmit = e => {
    e.preventDefault(); //prevent default action 
   addTodo(value)
   //after we set the form , we want to clear the form 
   setValue("")
  }

  return (
  <form className = 'TodoForm' onSubmit  = {handleSubmit}>
    <input type = "text" className = 'todo-input'
      value = {value} onChange = {(e) => setValue(e.target.value)}
      placeholder='What is the task today?' 
      />
    <button type = 'submit' className = 'todo-btn'> Add Task </button>
  </form>)
}
