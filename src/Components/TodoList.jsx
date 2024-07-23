import React, { useEffect, useState } from 'react'
import { addNewTask } from '../Server/allApi'
import { getSpecificTask,markAsCompleted,deleteTask } from '../Server/allApi'

function TodoList({data,setresChange}) {
   const complete= async(id)=>{
    // console.log(id);
    const task= await getSpecificTask(id)
    const data=task.data
    data.completed=true
    const completedTask=await markAsCompleted(id,data)
    setresChange(completedTask)

    // console.log(completedTask);
   }

   const clearTask = async (id) =>{
      // console.log(id);
      const res=await deleteTask(id)
      // console.log(res);
      setresChange(res)


   }


  return (
    <>
    {data.length >0 ?
    <div>
          {data.map((item)=>(
      <ul key={item.id} className="list-group mt-5 mb-0 " style={{backgroundColor:'grey'}}>
      
      <li
        
        className="list-group-item d-flex justify-content-between align-items-center border-start-0 border-top-0 border-end-0 border-bottom rounded-0 mb-2" style={{backgroundColor:'#b9b9c1'}}>
        <div className="d-flex align-items-center">
          {item.completed? <span>Task completed</span>: 
          <button onClick={()=>complete(item.id)}>✅</button>
          }
        
          {item.title}


        </div>
        
        <button onClick={()=>clearTask(item.id)} title="Remove item">
          <i className="fas fa-times text-danger"></i>
        </button>
      </li>
   
  </ul>

    ))}
    </div>
    
      
  :
  <h5>not found</h5>
    }

    </>
  )
}

export default TodoList
