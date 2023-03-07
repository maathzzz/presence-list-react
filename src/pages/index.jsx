import React from 'react'
import { useState } from 'react';
import './styles.css'
import Card  from '../components/Card'
import zuviaLogo from '.././assets/zuvia.png'

export default function Home() {

  // Estado ->  Armazenar valores, e quando esse valor mudar, será refletido na interface em tempo real.
  // Conteúdo armazenado, função que atualiza o estado
  // É possível setar um valor inicial para o estado - useState('Matheus');
  const [ studentName, setStudentName ] = useState('');
  const [ students, setStudents ] = useState([]);

  function handleAddStudent(){

    const newStudent = {
      name: studentName,
      time: new Date().toLocaleDateString('pt-br', {
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit'
      })
    };

    setStudents(prevState => [...prevState, newStudent]);
  }

  // function onDelete(){

  //   students.map(student => (
  //     setStudents(prevState => prevState.filter(s => s.time !== student.time))
  //   ))
  // }

  return (
    <div className='container'>
        <img src={zuviaLogo} height="50px"/>

        <input 
          placeholder='New Zuvia user...'
          // Para cada caractere que muda dentro do input ele dá ume vento
          onChange={e => setStudentName(e.target.value)}
          />

        <button type='button' className='btn-add' onClick={handleAddStudent}> New User </button>
        {
          students.map(student => (
          <Card 
            key={student.time} 
            name={student.name} 
            time={student.time}
            // onDelete={onDelete}
            onDelete={() => setStudents(prevState => prevState.filter(s => s.time !== student.time))} 
          />)) 
        }
    </div>
  )
}