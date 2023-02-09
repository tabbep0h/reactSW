import React from 'react'
import pers1 from "./dfg.jpg"

function PersBlock({ pers }) {

 return (
    <div>
        <div className='block'>
        <img className = "img" src={pers1}/>
        <p>Имя:{pers.name}</p>
        <p>Пол:{pers.gender}</p>
        <p>Рост:{pers.height}см</p> 
        <p>Год рождения:{pers.birth_year}</p>
        
        </div>    
    </div>
  )
}

export default PersBlock