import React, {useState} from "react";
import TaskList from "./TaskList"
import { CATEGORIES, TASKS } from "../data";


let id1 = 0

function deleteTask (event) {
  TASKS.forEach(function(task){
    task.id= id1++
  })

  const newTaskList = TASKS.filter(function(task){
    return task.id != event.target.id
  })
}

let id2 = 0

function Task({text, category}) {
  return (
    <div className="task">
      <div className="label">{category}</div>
      <div className="text">{text}</div>
      <button onClick={deleteTask} className="delete" id={id2++}>X</button>
    </div>
  );
}

export default Task;
