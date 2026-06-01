import { useState } from 'react'
import './App.css'

function App() {
  const [tasks, setTasks] = useState([])
  const [task, setTask] = useState("")
  const updateTask = () => {
    setTasks([...tasks, task])
    setTask('')
  }

  const removeTask = (todo,i) => {
  console.log("Deleted Tasks", todo, i)
   setTasks(tasks.filter((_,index)=>index!=i))
  }

  const renderToDos = (todo,i) => (
    <span>
      <li>{todo}</li>
      <button type="button" onClick={()=>removeTask(todo,i)}> Remove Tasks</button>
    </span>
  )

  return (
    <>
      <h1>Add your Tasks</h1>
      <div>
        <input type="text" placeholder='Enter your task' onChange={(e) => setTask(e.target.value)} value={task} />{" "}
        <button type="button" onClick={updateTask}>Add Task</button>
      </div>
      <h2>Tasks List</h2>
      <div >
        <ul>
          {tasks.length > 0 ?
            tasks?.map((todo,i) => renderToDos(todo,i)
            ) :
            <p>No to do yet</p>
          }
        </ul>
      </div>
    </>
  )
}

export default App