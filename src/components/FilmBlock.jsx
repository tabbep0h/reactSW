import React from 'react'
import sw from "../components/star-wars-collection-pc_orig_5.jpg" 
import "../style.css"

function FilmBlock({film}) {
  return (
        <div className='film block'>
        <img className = "img" src={sw}/>
        <p>Название:{film.title}</p>
        <p>Дата выхода:{film.release_date}</p> 
        <p>Режиссер:{film.director}</p>
        <p>Продюсеры:{film.producer}</p>
        </div>                               
    
  )
}

export default FilmBlock