import React, {useState, useEffect} from "react";

import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";
import Task from "./Task";

import { CATEGORIES, TASKS } from "../data";
console.log("Here's the data you're working with");
console.log({ CATEGORIES, TASKS });


function App() {
  const [tasks, setTasks] = useState(TASKS)
  
  const [newTask, setNewTask] = useState("")

  function onTaskFormSubmit (taskObject) {
    let formData = [taskObject.category, taskObject.text]
    setNewTask(formData)
  }

  return (
    <div className="App">
      <h2>My tasks</h2>
      <CategoryFilter 
        categories={CATEGORIES}
        tasks={tasks}
        ChangeTasks={setTasks}/>
      <NewTaskForm 
        categories={CATEGORIES}
        onTaskFormSubmit={onTaskFormSubmit}/>
      <TaskList 
        CATEGORIES={CATEGORIES}
        tasks={tasks}
        ChangeTasks={setTasks}/>
      <Task category={newTask[0]} text={newTask[1]}/>
    </div>
  );
}

export default App
