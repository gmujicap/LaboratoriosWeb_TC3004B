import React from 'react'
import {heroes} from './data/heroes.js'

export const Tercer = () => {
    console.log(heroes)
    return (
        <div>
            lol

            <ul>
                {heroes.map( (hero) => (
                    <li key={hero.id}> {hero.name} - {hero.owner}</li>
                ))}
            </ul>  
        </div>
      )
}

export default Tercer