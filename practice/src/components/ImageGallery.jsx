import React, { useState } from 'react';
import {sculptureList} from "./Data.jsx"

export const ImageGallery = () => {

const [index, setIndex] = useState(0);

  const changeImage = () => {
    if(index < 11){
        setIndex(index + 1)
    } else {
        setIndex(0)
    }
  
      
}
  let sculpture = sculptureList[index];
  return (
    <div>
        <button onClick={changeImage}>Next</button>
        <h2>
            <i>{sculpture.name}</i> by {sculpture.artist}
        </h2>
        <p>({index+1 + " of " +sculptureList.length})</p>
        <button>Show details</button>
    </div>
  )
}
