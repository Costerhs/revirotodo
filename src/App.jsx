import { useEffect, useState } from 'react'
import Modal from './components/modal/Modal'
import Header from './components/header/Header'
import TodoList from './components/todolist/TodoList'
import { loadTasks } from './assets/localStorageManager'
import AddItemBtn from './components/addItemBtn/AddItemBtn'

function App() {
  const [modalStatus,setModalStatus] = useState(false)
  const [tasks,setTasks] = useState([])


  useEffect(() => {
    setTasks(loadTasks())
  },[])

  return (
    <div className='app'>
      <Header setTasks={setTasks} tasks={tasks} modalStatus={modalStatus} setModalStatus={setModalStatus}/>
      {tasks.length >= 1 ? <TodoList tasks={tasks} setTasks={setTasks}/> : 
        <div className='error'>
          <img src='https://to-do-app-dimad10s-projects.vercel.app/static/media/img1.e03a41ff834cf09ee448.png' />
          <p>Empty...</p>
        </div>}
      <Modal modalStatus={modalStatus} setModalStatus={setModalStatus} setTasks={setTasks}/>
      <AddItemBtn modalStatus={modalStatus} setModalStatus={setModalStatus}/>
    </div>
  )
}

export default App
