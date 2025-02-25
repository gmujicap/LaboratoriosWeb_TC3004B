import React from 'react'
import {useState} from "react"

export const AppCounter = () => {
    const [counter, setCounter] = useState(1);

    return (
    <div>
      <h1>Counter: {counter}</h1>
      <button className = "btn btn-primary" onClick={ () => setCounter(counter + 1)}>Add 1</button>
      <button className = "btn btn-primary" onClick={ () => setCounter(1)}>Reset</button>
      <button className = "btn btn-primary" onClick={ () => setCounter(counter - 1)}>Sub 1</button>


    </div>
  )
}

export default AppCounter
