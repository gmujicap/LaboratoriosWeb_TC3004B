import React from 'react'

export const Photo = ({image}) => {
  return (
    <section style={{height:200}}>

        <div>{
            <img src={image} key={image}/>
            }
        </div>
    </section>
  )
}

