import React, { useState, useRef, useEffect, useContext } from 'react';
import { ThemeContext } from '../App';

export const Home = () => {

const [isName, setIsName] = useState(""); 
const renderCount = useRef(0);
const inputRef = useRef()

useEffect(() => {
    renderCount.current = renderCount.current + 1;   
})

function focus(){
    inputRef.current.value = "Type here";
}
function removeText() {
    inputRef.current.value = ""
}
const darkTheme = useContext(ThemeContext);
const themeStyle = {
    backgroundColor: darkTheme ? '#333' : '#CCC',
    color: darkTheme ? '#CCC' : '#333',
    padding: '2rem',
    margin: '2rem'
}
  return (
    <>
        <input ref={inputRef} onClick={removeText}value={isName} onChange={(e) => setIsName(e.target.value)}/>
        <h1>{isName}</h1>
        <div>I rendered {renderCount.current} times</div>
        <button onClick={focus}>Focus</button>
        <div style={themeStyle}>Function Theme</div>
    </>
  )
}
