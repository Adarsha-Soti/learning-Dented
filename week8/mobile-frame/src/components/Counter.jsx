import React from 'react'

const Counter = (props) => {

  return (
    <div>
      <button className='add' onClick={()=>{
        props.setValue((previous)=>{
            return previous+1;
        });
      }}>add</button>
      
      <button className='subtract' onClick={()=>{
        props.setValue((previous)=>{
            return previous-1;
        });
      }}>subtract</button>
      <button className='reset' onClick={()=>{
        props.setValue(0);
      }}>reset</button>
    </div>
  )
}

export default Counter
