import './style.scss'
import addIcon from '../../assets/addIcon.svg'


export default function AddItemBtn({setModalStatus,modalStatus}) {
  return (
    <div className='addBtn'>
        <button onClick={() => setModalStatus(!modalStatus)}>
            <img src={addIcon} alt="" />
        </button>
    </div>
  )
}
