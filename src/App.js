import { createContext, useEffect, useState } from "react";
import AddTask from "./AddTask";
import TaskList from "./TaskList";
import Header from "./Header"
import DarkTheme from "./DarkTheme";
import "./style.css"

export const ThemeContext = createContext();

function App() {
  const [tasks, updateTask] = useState(JSON.parse(localStorage.getItem("tasks")) || [])
  const [theme,updateTheme]=useState("light")

  function handleAddTask(task) {
    // console.log(task)
    if (task.length !== 0)
      updateTask([...tasks, task]);
    else
      alert("enter a value")
  }
  function handleDeleteTask(index) {
    // console.log(index)
    let newTasks = tasks.filter((item) => tasks[index] !== item)
    updateTask(newTasks)
  }
  function handleChange(item, index) {


    if (item.length === 0) {
      alert("please enter value")
    }
    else {
      let newArr = tasks.map((todos, i) => {
        if (i === index) {
          return item;
        }
        else {
          return todos;
        }

      })
      updateTask(newArr)
    }
    // console.log(newArr)

  }
  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks))

  }, [tasks])

  function getTheme(item) {
    updateTheme(item)
    // console.log(theme)
  }
  
  let containerStyle={backgroundColor:""}
  let newBorder={border:""}
  if(theme==="dark")
  {
    containerStyle.backgroundColor="#2E282A"
    newBorder.border="3px solid #FFC914"
  } 
  else{
    containerStyle.backgroundColor="#F7F7FF"
    newBorder.border="3px solid black"
  }
  return (
    <>
    <DarkTheme getTheme={getTheme} />
    <ThemeContext.Provider value={theme}>
    <div className="container" style={containerStyle}>
      <div className="app" style={newBorder}>
        <Header />
        <AddTask addTask={handleAddTask} />
        <TaskList task={tasks} deleteTask={handleDeleteTask} changeTask={handleChange} />
      </div>
    </div>
    </ThemeContext.Provider>
    </>
  )
}

export default App;
