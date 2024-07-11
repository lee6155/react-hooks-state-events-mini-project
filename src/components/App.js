import React, {useState, useEffect} from "react";

import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";
import Task from "./Task";

import { CATEGORIES, TASKS } from "../data";
console.log("Here's the data you're working with");
console.log({ CATEGORIES, TASKS });


function App() {
  const [taskState, setTaskState] = useState(TASKS)

  function ChangeTasks (taskList) {
    setTaskState(taskList)
  }
  
  const [newTask, setNewTask] = useState("")

  function OnTaskFormSubmit (taskObject) {
    let formData = [taskObject.categoryState, taskObject.textState]
    setNewTask(formData)
  }

  return (
    <div className="App">
      <h2>My tasks</h2>
      <CategoryFilter 
        CATEGORIES={CATEGORIES}
        TASKS={TASKS}
        ChangeTasks={ChangeTasks}/>
      <NewTaskForm 
        CATEGORIES={CATEGORIES}
        OnTaskFormSubmit={OnTaskFormSubmit}/>
      <TaskList 
        CATEGORIES={CATEGORIES}
        taskState={taskState}
        ChangeTasks={ChangeTasks}/>
      <Task category={newTask[0]} text={newTask[1]}/>
    </div>
  );
}

export default App
