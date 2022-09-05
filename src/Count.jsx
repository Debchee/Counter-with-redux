import React from 'react';
import { useState } from 'react';
import {  useDispatch } from 'react-redux';
import {increment, decrement} from './redux/ducks/counter'

const Count = () => {
  const dispatch= useDispatch();

  const handleIncrement = ()=>{
    dispatch(increment())
  };

  const handleDecrement = ()=>{
    dispatch(decrement())
  };

  return (
    <div style={{backgroundColor: 'gray', margin: '10px'}}>
      <div style={{display: 'flex', justifyContent: 'center'}}>
      <button onClick={handleIncrement}>Increment</button>
      <button onClick={handleDecrement}>Increment</button>
      </div>
    </div>
  )
}

export default Count