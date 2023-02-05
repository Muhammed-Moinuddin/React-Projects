import React from 'react'
import { useState } from 'react'

export const ObjectPractice = () => {

const [person, setPerson] = useState({
    name: "Moin",
    artwork: {
        skills: "Web Developer",
        age: 22
    }
})

function handleNameChange(e){
    setPerson({
        ...person,
        name: e.target.value,
    })
}

const handleAgeChange = (e) => {
    setPerson({
        ...person,
       artwork:{
        ...person.artwork,
        age: e.target.value
       },
        
    })
}
  return (
    <>
        <label>Name: {" "}
            <input value={person.name} onChange={handleNameChange}/>
        </label>
        <label>Age: {" "}
            <input value={person.artwork.age} onChange={handleAgeChange}/>
        </label>
        <p>
            Name is {person.name} <br/>
            Age is {person.artwork.age}
        </p>
    </>
  )
}
