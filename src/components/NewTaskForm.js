import React, {useEffect, useState} from "react";
import Task from "./Task"


function NewTaskForm({categories, onTaskFormSubmit}) {
  const [category, setCategory] = useState("")
  const [text, setText] = useState("")

  let dropdown = categories?.filter(function(category){
    return category !== "All"
  })

  function HandleChangeCategory (event) {
    setCategory(event.target.value)
  }

  function HandleChangeText (event) {
    setText(event.target.value)
  }

  function HandleSubmit (event) {
    event.preventDefault()
    return onTaskFormSubmit({category, text})
  }

  return (
    <form onSubmit={HandleSubmit} className="new-task-form">
      <label>
        Details
        <input onChange={HandleChangeText} type="text" name="text" />
      </label>
      <label>
        Category
        <select onChange={HandleChangeCategory} name="category">
          {dropdown?.map(function(category){
            return <option key={category}>{category}</option>
          })}
        </select>
      </label>
      <input type="submit" value="Add task" />
    </form>
  );
}

export default NewTaskForm;
