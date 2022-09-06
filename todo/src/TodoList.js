import React, { useState } from 'react'

const TodoList = () => {
    const [activity, setActivity]= useState('')
    function addActivity () {
        
    }
  return (
    <>
    <div className='container'>
        <div className='header'>Todo List</div>
        <input type="text" placeholder="add activity" value={activity} onChange={(e) =>setActivity(e.target.value)} />
        <button onClick={addActivity}>Add</button>
    </div>
    </>
  )
}

export default TodoList