import React from 'react'
React
import AddTodo from '../Components/AddTodo'
function Home() {
  return (
    <>

  <section className="vh-100 py-5">
      <h1 className='text-center'>To do List</h1>
           <AddTodo />
      </section>

    </>
  )
}

export default Home
