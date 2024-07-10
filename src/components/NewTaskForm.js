import React, {useEffect, useState} from "react";
import Task from "./Task"


function NewTaskForm({CATEGORIES, OnTaskFormSubmit}) {
  const [categoryState, setCategoryState] = useState("")
  const [textState, setTextState] = useState("")

  let dropdown = CATEGORIES.filter(function(category){
    return category !== "All"
  })

  function HandleChange (event) {
    setCategoryState(event.target.value)
  }

  function HandleSubmit (event) {
    event.preventDefault()
    setTextState(event.target[0].value)
  }

  useEffect(() => {
    OnTaskFormSubmit({categoryState, textState})
  }, [textState])

  return (
    <form onSubmit={HandleSubmit} className="new-task-form">
      <label>
        Details
        <input type="text" name="text" />
      </label>
      <label>
        Category
        <select onChange={HandleChange} name="category">
          {dropdown.map(function(category){
            return <option key={category}>{category}</option>
          })}
        </select>
      </label>
      <input type="submit" value="Add task" />
    </form>
  );
}

export default NewTaskForm;
