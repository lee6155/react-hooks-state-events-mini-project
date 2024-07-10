import React, {useState, useEffect} from "react";
import TaskList from "./TaskList"
import { CATEGORIES, TASKS } from "../data";

function Task({text, category, changeTasks}) {
  function deleteTask (event) {
    event.target.id = 'handleClick'

    let buttons = document.getElementsByClassName('delete')
    let buttons2 = [...buttons]

    let buttonsID = []
    buttons2.forEach(function(button){
      buttonsID.push(button.id)
    })
    
    let tasks = document.getElementsByClassName('task')
    let tasks2 = [...tasks]
    tasks2.forEach(function(task){
      task.id = 'handleClick'
    })

    let i = -1
    tasks2.forEach(function(task){
      if (task.id === buttonsID[i+=1]){
        return task.remove()
      }
    })
  }

    // changeTasks(newTaskList)
  
  return (
    <div className="task">
      <div className="label">{category}</div>
      <div className="text">{text}</div>
      <button onClick={deleteTask} className="delete"> X </button>
    </div>
  );
}

export default Task;
