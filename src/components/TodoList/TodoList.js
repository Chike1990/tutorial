// A simple TodoList that will store our task
// We can also be able to add a new task
// We can also delete a task

// Psudocode the solution
// Import the necessary dependencies - modules, function, third party libs, style files, 
// Define the functional components - 
// Create the state variable called tasks to store the list of tasks. It is initially empty.
// Create a state variable called newTask to store the text of the new task.

// Define a function addTask to add a new task to the list of tasks.
    // Check if the new task is not empty
    // Update the task state by adding new task to the existing list of task.
    // Clear the new task input field by setting it to an empty string.
// Define a function deleteTask to remove a task from the list of task.
// Define a function that handle the change of the input value
// Render the component to the UI.


import React, {useState} from 'react';
import "./todolist.css";

const TodoList = () => {
    const [tasks, setTasks] = useState([]);
    const [newTask, setNewTask] = useState("");

    const addTask = () => {
        if(newTask){
            setTasks([...tasks, newTask])
            setNewTask("")
        }
    }

    const deleteTask = (task) =>{
        const upDatedTask = tasks.filter((_, i) => i !== task)
        setTasks(upDatedTask)
    }


  return (
    <div className='todo-container'> 
      <h1>Todo List</h1>
      <div className='input-container'>
        <input type='text' value={newTask} onChange={(e) => setNewTask(e.target.value)} placeholder='Add new task'/>
         <button onClick={addTask}>Add</button>
         </div>
         
         <ul className='task-list'>
            {tasks.map((task, index)=> (
                <li key={index}>{task}
                <button onClick={()=> deleteTask(index)}>Delete</button>
                </li>  
            ))}
         </ul>
    </div>
  )
}

export default TodoList;
