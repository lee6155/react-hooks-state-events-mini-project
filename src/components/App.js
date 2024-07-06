import React, {useState, useEffect} from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";

import { CATEGORIES, TASKS } from "../data";
import Task from "./Task";
console.log("Here's the data you're working with");
console.log({ CATEGORIES, TASKS });


function App() {
  const [taskState, setTaskState] = useState(TASKS)

  function changeTasks (taskList) {
    setTaskState(taskList)
  }

  console.log(taskState)

  return (
    <div className="App">
      <h2>My tasks</h2>
      <CategoryFilter 
        CATEGORIES={CATEGORIES}
        TASKS={TASKS}
        changeTasks={changeTasks}/>
      <NewTaskForm />
      <TaskList 
        CATEGORIES={CATEGORIES}
        taskState={taskState}/>
    </div>
  );
}

export default App
