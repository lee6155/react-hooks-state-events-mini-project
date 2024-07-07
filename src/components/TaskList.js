import React, {useContext, useState} from "react";
import Task from "./Task"
import {TasksContext} from "./App"


function TaskList({CATEGORIES, taskState, changeTasks}) {
  const displayTasks = taskState.map(function(task){
    return <Task changeTasks={changeTasks} key={task.text} text={task.text} category={task.category}/>
  })

  return (
    <div className="tasks">
      {displayTasks}
    </div>
  );
}

export default TaskList;
