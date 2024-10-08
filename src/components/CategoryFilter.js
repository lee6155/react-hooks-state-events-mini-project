import React, {useState, useEffect} from "react";
import Task from "./Task"


function CategoryFilter({categories, tasks, ChangeTasks}) {
  const displayButtons = categories?.map(function(category){
    return <button onClick={assignClass} key={category} type="button">{category}</button>
  })
  
  // const [buttonState, setButtonState] = useState("")
  //const [filterState, setFilterState] = useState(tasks)

  function assignClass (event) {
    event.target.className = 'selected'
    let selectedButtons = document.getElementsByClassName('selected')
    let selectedButtons2 = [...selectedButtons]
    // setButtonState(selectedButtons2)

    let buttonNames
    if (selectedButtons2 !== "") {
      buttonNames = selectedButtons2.map(function(button){
        return button.textContent
      })
    }

    let displayTasksNew = []
    if (selectedButtons2 === "" || buttonNames == "All") {
      displayTasksNew = tasks?.map(function(task){
        return task
      })

    } else {
      buttonNames.forEach(function(button){
        tasks.forEach(function(task){
          if(task.category === button) {
            displayTasksNew.push(task)
          }
        })
      })
    }

    //setFilterState(displayTasksNew)
    
    ChangeTasks(displayTasksNew)
  }

  return (
    <div className="categories">
      <h5>Category filters</h5>
      {displayButtons}
    </div>
  );
}

export default CategoryFilter;



// const [eventText, setEventText] = useState("")

  // function assignClass (event) {
  //   event.target.className = 'selected'
  //   setEventText(event.target.textContent)
  // }

  // useEffect (() => {
  //   let displayTasksNew
  //     if (eventText === "All" || eventText === "") {
  //       displayTasksNew = TASKS.map(function(task){
  //         return task
  //       })
  //     } else {
  //       displayTasksNew = TASKS.filter(function(task){
  //         return task.category === eventText
  //       })
  //     }

  // ChangeTasks(displayTasksNew)
  // }, [eventText])
