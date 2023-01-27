import React from 'react';
import "./style.css";
import { useEffect, useState } from 'react';

export const UseEffectOwn = () => {
  const [Data, setData] = useState(0);
  useEffect(() => {
    document.title = `Chats(${Data})`
  });
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
    </div>
  )
}
