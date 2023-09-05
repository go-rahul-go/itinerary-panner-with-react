

import React, { useContext, useState } from 'react'
import "./style.css"
import { ThemeContext } from './App'
const TaskList = ({ task, deleteTask, changeTask }) => {
    const newTheme = useContext(ThemeContext)
    let newStyle = {
        backgroundColor: "",
        color: ""
    }
    if (newTheme === "dark") {
        newStyle.backgroundColor = "#47454A"
        newStyle.color = "#EAEAEA"
    }
    else {
        newStyle.backgroundColor = "#EAEAEA"
        newStyle.color = "#47454A"
    }
    return (
        <ul className='list'>
            {
                task.map((item, index) => {
                    return (
                        <li key={index} style={newStyle}>
                            <Task id={index} task={item} change={changeTask} onDelete={deleteTask} />
                        </li>
                    )
                })
            }
        </ul>
    )
}


function Task({ id, task, change, onDelete }) {

    let textContent;
    const [edit, updatEdit] = useState(false)
    const [newtask, updatetask] = useState("")

    function update(val) {
        updatetask(val)

    }
    if (edit) {
        textContent = (
            <>
                <input placeholder={task} onChange={(e) => update(e.target.value)} className='list-input' />
                {/* <button >save</button> */}
                <i class="fa-regular fa-floppy-disk op-icon save-icon" 
                onClick={() => {
                    updatEdit(false);
                    change(newtask, id);
                    }} title="save">

                    </i>


            </>
        )
        //  console.log(edit) 
    }
    else {
        textContent = (
            <>
                {task}
                <i class="fa-solid fa-pen-to-square op-icon edit-icon" onClick={() => updatEdit(true)} title="edit"></i>
                {/* <button>edit</button> */}
            </>
        )
        // console.log(edit) 
    }


    return (
        <>
            <p>{textContent}</p>
            <i class="fa-regular fa-trash-can op-icon trash-icon"  onClick={() => onDelete(id)} title="delete"></i>
            {/* <button>delete</button> */}
        </>
    )

}
export default TaskList;