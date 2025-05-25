import React, {  useEffect, useRef, useState } from 'react'
import penIcon from '../../assets/pen.svg'
import penActiveIcon from '../../assets/penActiveIcon.svg'
import deleteIcon from '../../assets/deleteIcon.svg'
import deleteActiveIcon from '../../assets/deleteActiveIcon.svg'
import applyIcon from '../../assets/apply.svg'
import cancelIcon from '../../assets/cancel.svg'
import checkboxIcon from '../../assets/checked.svg'
import './style.scss'
import { deleteTask, loadTasks, updateTask } from '../../assets/localStorageManager'

export default function TodoItem({data,id,setTasks,isChange,setIsChange}) {

  const [title, setTitle] = useState(data.title);
  const inputRef = useRef(null);
  const [isChecked,setIsChecked] = useState(false)
  const [initialTitle, setInitialTitle] = useState(data.title);

  const deleteBtn = () => {
    deleteTask(id)
    setTasks(loadTasks())
  }

  const handleClick = () => {
    updateTask(id, { ...data, title });
    setInitialTitle(title);
    setIsChange(null);
  };
  
  

  const handleChange = (e) => {
    setTitle(e.target.value);
  };

  const cancelBtn = () => {
    setTitle(initialTitle);
    setIsChange(null);
  };

  useEffect(() => {
    if (isChange === id) {
      inputRef.current?.focus();
    }
    setIsChecked(data.status)
  }, [isChange, id]);


  return (
    <div className='todoItem'>

        <div className='info'>
        <div className="checkboxBlock">
        <input 
  className='checkbox' 
  type='checkbox' 
  checked={isChecked}
  onChange={() => {
    const newStatus = !isChecked;
    setIsChecked(newStatus);
    updateTask(id, { ...data, status: newStatus });
    setTasks(loadTasks());
  }}
/>

          {isChecked && <img src={checkboxIcon} alt="" />}
        </div>

           {isChange === id ? (
            <input
              type='text'
              value={title}
              onChange={handleChange}
              ref={inputRef}
            />
              ) : (
                <p>{title}</p>
              )}

        </div>

        <div className="buttons">
              {isChange == id ? 
              <><button onClick={handleClick}>
              <img src={applyIcon}  alt="" />
            </button>

            <button onClick={cancelBtn}>
                <img src={cancelIcon} alt="" />
            </button></>
              
              :<><button className="change" onClick={() => setIsChange(id)}>
              <img className='penIcon' src={penIcon}  alt="" />
              <img className='penActiveIcon' src={penActiveIcon} alt="" />
            </button>

            <button className="delete" onClick={deleteBtn}>
                <img className='deleteIcon' src={deleteIcon} alt="" />
                <img className='deleteActiveIcon' src={deleteActiveIcon} alt="" />
            </button></>}
        </div>
    </div>
  )
}