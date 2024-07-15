import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowUp, faArrowDown, faTrash } from '@fortawesome/free-solid-svg-icons'

import '../assets/TodoList.css'

function TodoList() {
    const [tasks, setTasks] = useState([])
    const [newTask, setNewTask] = useState("")

    function handleInputChange(e){
        setNewTask(e.target.value)
    }

    function handleAddTaskClick(){
        if(newTask.trim()){
            setTasks(prevT => [...prevT, newTask])
            setNewTask("")
        }
    }

    function handleDeleteClick(index){
        setTasks(prevT => prevT.filter((_,idx) => idx !== index))
    }

    function handleMoveUpClick(index){
        // index should greater than Zero
        if(index){
            setTasks(prevT => {
                console.log(index);
                let newTasks = [...prevT]
                const temp = newTasks[index-1]
                newTasks[index-1] = newTasks[index]
                newTasks[index] = temp

                return newTasks
            })
        }
    }

    function handleMoveDownClick(index){
        if(index < tasks.length-1){
            handleMoveUpClick(index+1)
        }
    }


    return (
        <div className='to-do-app'>
            <h2>TO-DO List App</h2>
            <input type="text" value={newTask} onChange={handleInputChange}
                   placeholder="Enter a task..."/>
            <button onClick={() => handleAddTaskClick()} className='add-btn'>Add</button>
            <div className='to-do-list'>
                <ul>
                    {tasks.map((t, idx) => 
                        <li key={idx}>
                            <p>{t}</p>
                            <button className='move-btn' onClick={() => handleMoveUpClick(idx)}>
                                <FontAwesomeIcon icon={faArrowUp} className="arrow-icon"/>
                            </button>
                            
                            <button className='move-btn' onClick={() => handleMoveDownClick(idx)}>
                                <FontAwesomeIcon icon={faArrowDown} className="arrow-icon"/>
                            </button>
                            
                            <button className='delete-btn' onClick={() => handleDeleteClick(idx)}>
                                <FontAwesomeIcon icon={faTrash} className="delete-icon"/>
                            </button>
                        </li>
                    )}
                </ul>
            </div>
        </div>
    )
}

export default TodoList