import React from 'react' 
// import './App.css'
import { getAllTasks,addNewTask } from '../Server/allApi'
import TodoList from './TodoList'
import { useState,useEffect } from 'react'
import { toast } from 'react-toastify'


function AddTodo() {
  const [resChange,setresChange]=useState('')
  const [todo ,setTodo]=useState([])

  const getTasks =async ()=>{
    const res = await getAllTasks()
    // console.log(res);
    setTodo(res.data)
    
  }
  const[newtask ,setNewtask]=useState({
    title:'',completed:false
  })
  // console.log(newtask);
  const addTask=async()=>{
    const {title}=newtask
    if(!title){
      toast.error('Enter som data')
    }else{
    const res=await addNewTask(newtask)
    if (res.status===201){
      
      setNewtask({ title:"",completed:false})
      toast.success('Category Added Successfully')
      getTasks()
      }
  else
      {
        toast.error('Category not Added Successfully')
      console.log(res,'Hello');
  }
    }
    
    

  }

  useEffect(()=>{
    getTasks()
  },[resChange])

  // console.log(todo);

  return (
    <>
      <div className='container shadow-lg py-5 border border-2 border-dark'>
        <div className=" d-flex justify-content-center align-items-center mb-4 ">
        <div className="flex-fill">
          <input
            type="text"
            id="form3"
            className="form-control "
            placeholder='Enter the task'
            onChange={(e)=>{setNewtask({...newtask,title:e.target.value})}}
          />
          
        </div>
        <button
          
          className="btn btn-outline-success btn-lg ms-2"
          onClick={addTask}
        >
          Add
        </button>
      </div>
      <TodoList data={todo} setresChange={setresChange} />
      </div>
    </>
  )
}

export default AddTodo