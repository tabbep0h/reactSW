import React from 'react'
import PersBlock from "./PersBlock"
import Header from './Header';
import Loader from './Loader';

function Pers({ data }) {

    const [ isLoading, setLoading ] = React.useState(false)
  
    if (Array.isArray(data)) {
        return
    }

    return (
        <div>
            <Header/>
          <div className='grid'>
            {data.results.map((pers) => (
              <div>
                <PersBlock pers={pers}/>
              </div>
            ))}
          </div>
        </div>
      );
    }

export default Pers