import React from 'react';
import { useState } from 'react';
import "./style.css"

export const UseStateOwn = () => {
    const [Data, setData] = useState(10);
  return (
    <div className='center_div'>
        <p>{Data}</p>
        <div className='button2' onClick={() => {setData(Data + 1)}}>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            INCREMENT
        </div>
        <div className='button2' onClick={() => {Data > 0 ? setData(Data - 1) : setData(0)}}>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            DECREMENT
        </div>
    </div>
  )
}
