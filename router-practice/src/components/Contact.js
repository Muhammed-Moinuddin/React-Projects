import {React, useState, useReducer} from 'react';

function reducer(state, action){
    switch(action.type){
        case "increment":
           return {count: state.count + 1};
        case "decrement":
            return {count: state.count - 1};
        default: 
        return state;
    }
}

export const Contact = () => {

// const [count, setCount] = useState(0);
const [state, dispatch] = useReducer(reducer, {count: 0})

function increment(){
   dispatch({type: "increment"}) 
}

function decrement(){
    dispatch({type: "decrement"}) 
}

  return (
    <>
        <button onClick={increment}> + </button>
        <span>{state.count}</span>
        <button onClick={decrement}> - </button>
    </>
  )
}
