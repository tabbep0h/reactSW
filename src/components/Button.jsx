import React from 'react'
import "../style.css"

function Button({ children }) {
  return (
    <button className='btn'>{children}</button>
  )
}

export default Button