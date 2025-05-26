import React, { useState } from 'react'
import './style.scss'
import TodoItem from '../todoItem/todoItem'


export default function TodoList({tasks,setTasks}) {
    const [isChange,setIsChange] = useState(null);

  return (
    <div className='todoList'>
        {tasks ? tasks.map((el) => {
            return <TodoItem key={el.id} isChange={isChange} setIsChange={setIsChange} data={el} setTasks={setTasks} id={el.id}/>
        }) : null}
    </div>
  )
}
