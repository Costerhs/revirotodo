import { useState, useEffect } from 'react';
import './style.scss';
import searchIcon from '../../assets/searchIcon.svg';
import { loadTasks } from '../../assets/localStorageManager';
import ThemeToggle from '../themeToggle/ThemeThoggle';

export default function Header({ setTasks,modalStatus,setModalStatus }) {
  const [searchText, setSearchText] = useState('');
  const [filterStatus, setFilterStatus] = useState('');

  useEffect(() => {
    const tasks = loadTasks();

    const filtered = tasks.filter(task => {
      const matchesSearch = task.title.toLowerCase().includes(searchText.toLowerCase());
      const matchesStatus =
        filterStatus === '' ||
        (filterStatus === 'complete' && task.status) ||
        (filterStatus === 'incomplete' && !task.status);
      return matchesSearch && matchesStatus;
    });

    setTasks(filtered);
  }, [searchText, filterStatus]);

  return (
    <div className='header'>
      <h1>TODO LIST</h1>
      <div className="list">
        <div className="searchBlock">
          <input
            className='input'
            type="text"
            placeholder='Search note...'
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
          />
          <img src={searchIcon} alt="" />
        </div>

        <select
          name="status"
          onChange={(e) => setFilterStatus(e.target.value)}
          value={filterStatus}
        >
          <option value="">ALL</option>
          <option value="complete">Complete</option>
          <option value="incomplete">Incomplete</option>
        </select>

        <ThemeToggle />
        <button className='addTask' onClick={() => setModalStatus(!modalStatus)}>NEW TEASK +</button>
      </div>
    </div>
  );
}
