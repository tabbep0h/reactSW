import React from 'react';
import PlanetBlock from "./PlanetBlock"
import Header from './Header';

function Planets({ data }) {
  
  if (Array.isArray(data)) {
    return
  }
  
  return (
    <div>
      <Header/>
      <div className='grid'>
        {data.results.map((planet) => (
          <div>
            <PlanetBlock planet={planet}/>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Planets;
