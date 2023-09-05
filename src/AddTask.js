

import React, {  useContext, useState } from 'react'
import { ThemeContext } from './App'
const AddTask = ({addTask}) => {
    const [text,setText]=useState("")
    let newstyle={
      backgroundColor:""
    }
    let buttonStyle={
      backgroundColor:"",
      color:""
    }
   const newTheme = useContext(ThemeContext)
   if(newTheme==="dark")
   {
    newstyle.backgroundColor="#47454A";
    newstyle.color="#EAEAEA";
    buttonStyle.backgroundColor="#999897"
    buttonStyle.color="#FFC914";
   }
   else{
    newstyle.backgroundColor="#EAEAEA";
    newstyle.color="#47454A"
   }
  return(
    <div className="add-task" style={newstyle}>
    <input type="text" placeholder="add task here" value={text} onChange={(e)=>setText(e.target.value)}/>
    {/* <button o
        }>Add</button> */}
    <i class="fa-solid fa-plus add-button" onClick={()=>{
      addTask(text);
      setText("");}} style={buttonStyle}></i>
    </div>
  )
}

export default AddTask;