import React from 'react';
import FilmBlock from "./FilmBlock"
import Header from './Header';
import Loader from './Loader';
import "../style.css"

function Main({ data,loading }) {
  
  if (Array.isArray(data)) {
    return
  }

  console.log(loading)

  return (
    <div>
      { loading ? <Loader/> : 
      <div><Header/>
      <div className='grid'>
        {data.results.map((film) => (
          <div>
            <FilmBlock film={film}/>
          </div>
        ))}
      </div></div>
      }
      
    </div>
  );
}

export default Main;
