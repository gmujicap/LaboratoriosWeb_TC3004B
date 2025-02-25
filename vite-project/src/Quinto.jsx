import React from 'react'

const Quinto = () => {
    const promesa = new Promise( (resolve, reject) => 
    
        setTimeout(()=>{
            console.log("Dentro de la promesa"),
            resolve();
        },2000)
    )


    return (
    <div>
    </div>
  )
}

export default Quinto
