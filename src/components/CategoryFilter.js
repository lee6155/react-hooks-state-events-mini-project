import React, {useState, useEffect} from "react";
import Task from "./Task"


function CategoryFilter({CATEGORIES, TASKS, changeTasks}) {
  const displayButtons = CATEGORIES.map(function(category){
    return <button onClick={assignClass} key={category} type="button">{category}</button>
  })
  
  const [buttonState, setButtonState] = useState("")

  function assignClass (event) {
    event.target.className = 'selected'
    let selectedButtons = document.getElementsByClassName('selected')
    let selectedButtons2 = [...selectedButtons]
    setButtonState(selectedButtons2)
  }

  useEffect (() => {
    let buttonNames
    if (buttonState !== "") {
      buttonNames = buttonState.map(function(button){
        return button.textContent
      })
    }

    let displayTasksNew = []
    if (buttonState === "" || buttonNames == "All") {
      displayTasksNew = TASKS.map(function(task){
        return task
    })

    } else {
      buttonNames.forEach(function(button){
        TASKS.forEach(function(task){
          if(task.category === button) {
            displayTasksNew.push(task)
          }
        })
      })
    }

  changeTasks(displayTasksNew)
  }, [buttonState])

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

  // changeTasks(displayTasksNew)
  // }, [eventText])
