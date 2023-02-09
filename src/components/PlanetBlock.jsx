import React from 'react'
import planet1 from "./planet.jpeg"

function PlanetBlock({ planet }) {

 return (
    <div>
        <div className='block'>
        <img className = "img" src={planet1}/>
        <p>Название:{planet.name}</p>
        <p>Диаметр:{planet.diameter}</p> 
        <p>Население:{planet.population} особей</p>
        <p>Поверхность:{planet.terrain}</p>
        </div>    
    </div>
  )
}

export default PlanetBlock