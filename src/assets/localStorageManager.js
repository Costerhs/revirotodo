export  function loadTasks() {
    const data = localStorage.getItem('tasks');
    return data ? JSON.parse(data) : [];
  }

  export function deleteTask(id) {
    const tasks = loadTasks();
    const filteredTasks = tasks.filter(task => task.id !== id);
    localStorage.setItem('tasks', JSON.stringify(filteredTasks));
  }
  
  export function updateTask(id, newData) {
    const tasks = loadTasks();
    const updatedTasks = tasks.map(task => {
      if (task.id === id) {
        return { ...task, ...newData };
      }
      return task;
    });
    localStorage.setItem('tasks', JSON.stringify(updatedTasks));
  }
  
  export function addTask(newTask) {
    const tasks = loadTasks();
  
    const haveIds = tasks.map(task => task.id);
  
    let newId = 1;
    while (haveIds.includes(newId)) {
      newId++;
    }
  
    const taskWithId = { ...newTask, id: newId };
    tasks.push(taskWithId);
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }
  
