import React from 'react';
import { useState } from 'react';

const initialList = [
    {id: 0, title: "Gorakh Hill", seen: true},
    {id: 1, title: "Murree", seen: false},
    {id: 2, title: "Kashmir", seen: false},
]

export const ListPractice = () => {

const [list, setList] = useState(initialList);

function handleClick(comingChecked, comingId){
    setList(list.map(eachItem => {
        if(eachItem.id === comingId){
            return {...eachItem, seen: comingChecked}
        } else {
            return eachItem;
        }
    }));
}
  return (
    <ul>
     {list.map(item => 
            <li key={item.id}>
                <label><input type="checkbox" checked={item.seen} onChange={e => {handleClick(e.target.checked, item.id)}}/>{item.title}</label>
            </li>
        
        )}
    </ul>
  )
}
