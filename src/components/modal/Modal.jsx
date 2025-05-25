import React, { useEffect, useState } from 'react'
import './style.scss'
import { addTask, loadTasks } from '../../assets/localStorageManager'

export default function Modal({modalStatus,setModalStatus,setTasks}) {

  const [text,setText] = useState('')

  const addTaskBtn = () => {
    if(text) {
      addTask({title:text})
      setTasks(loadTasks())
    }
    setModalStatus(false)
  }

  const handelChange = (e) => {
    setText(e.target.value)
  }

  useEffect(() => {
    setText('')
  },[modalStatus])

  return (
    <div className={`modal ${modalStatus ? 'modalActive' : 'modalInactive'}`}>
        <div className="content">

            <div className="head">
              <h1>NEW NOTE</h1>
              <input onChange={handelChange} value={text} className='input' type="text" placeholder='New note...' />
            </div>

            <div className="buttons">
              <button className="cancel" onClick={() => setModalStatus(false)}>CANCEL</button>
              <button className="apply" onClick={addTaskBtn}>APPLY</button>
            </div>

        </div>
    </div>
  )
}
