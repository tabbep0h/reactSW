import React from 'react'
import { Link } from 'react-router-dom'
import Button from './Button'

function Header() {
  return (
    <nav className='nav'>
        <Link to="/">
            <Button>Фильмы</Button>
        </Link>
        <Link to="/pers">
            <Button>Персонажи</Button>
        </Link>
        <Link to="/planets">
            <Button>Планеты</Button>
        </Link>
    </nav>
  ) 
}

export default Header