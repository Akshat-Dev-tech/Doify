import { useState } from 'react'
import './App.css'

function App() {
  const [tasks, setTasks] = useState([])
  const [task, setTask] = useState("")
  const updateTask = () => {
    setTasks([...tasks,{ id:Date.now() , todo:task , completed:false}])
    setTask('')
  }

  const removeTask = (todo,i) => {
  console.log("Deleted Tasks", todo, i)
   setTasks(tasks.filter((_,index)=>index!=i))
  }

  const completeTask=(e,todo ,i)=>{
    setTasks(tasks.map((task,index)=>{
      if(index===i){
        let val = e.target.checked ? {...task,completed:true} : {...task,completed:false}
        return val
      }
      else return task
    }))
  }

  const renderToDos = (todoobj,i) => (
    <div className='display-flex'>
      <li className={todoobj.completed ? 'completed' : ''}>{todoobj.todo}</li>
      <button type="button" onClick={() => removeTask(todoobj.todo, i)}> Remove Tasks</button>
      <input type="checkbox" onChange={(e)=>completeTask(e,todoobj.todo,i)}/>
    </div>
  )

  return (
    <>
      <h1>Add your Tasks</h1>
      <div>
        <input type="text" placeholder='Enter your task' onChange={(e) => setTask(e.target.value)} value={task} />{" "}
        <button type="button" onClick={updateTask}>Add Task</button>
      </div>
      <h2>Tasks List</h2>
      <div className='display-tasks'>
        <ul>
          {tasks.length > 0 ?
            tasks?.map((todoobj,i) => renderToDos(todoobj,i)
            ) :
            <p>No to do yet</p>
          }
        </ul>
      </div>
    </>
  )
}

export default App