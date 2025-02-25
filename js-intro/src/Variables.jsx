import React from 'react'

export const Variables = () => {
    const nombre = "Jorge";
    const apellido = "Carranza";
    const nombreCompleto = nombre + " " + apellido;
    const nombreCom = `${nombre} ${apellido}`;
    console.log( nombreCompleto);
    return (
    <div>
      Variables
    </div>
  )
}

export default Variables
