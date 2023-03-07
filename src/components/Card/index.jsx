import React from 'react'
import './styles.css'
import perfilLogo from '../../assets/perfil.png'

export default function Card({name, time, onDelete}) {
  // const [ delUser, setDelUser] = useState([]);



  return (
    <div className="card"> 
        <strong> {name} </strong>
        <small> Created at: {time} </small>
        <button type='button' className='btn-delete' onClick={onDelete}> Delete </button>
    </div>
  )
}
