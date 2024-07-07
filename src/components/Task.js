import React, {useState, useEffect} from "react";
import TaskList from "./TaskList"
import { CATEGORIES, TASKS } from "../data";


let id1 = 0
TASKS.forEach(function(task){
  task.id= id1++
})

function Task({text, category, changeTasks}) {
  function deleteTask (event) {
    const newTaskList = TASKS.filter(function(task){
      return task.id != event.target.id
    })
    changeTasks(newTaskList)
  }

  let id2 = 0
  return (
    <div className="task">
      <div className="label">{category}</div>
      <div className="text">{text}</div>
      <button onClick={deleteTask} className="delete" id={id2++}> X </button>
    </div>
  );
}

export default Task;
