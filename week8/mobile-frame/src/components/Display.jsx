import React, { useState } from 'react'
import Counter from './Counter';

const Display = (props) => {
  return (
    <div className='display'>
      <h1>{props.value}</h1>  
    </div>
  )
}

export default Display
