import React from 'react'
import {useEffect, useState} from 'react';
import {Message} from './Message';

export const SimpleForm = () => {
  const [formState, setFormState] = useState({
    matricula: 'A01285409',
    nombre: 'Gabriel',
    apellido: 'Mujica',
    edad: 21,
    carrera: ' ',
    universidad: ' '
  });

  const {matricula, nombre, apellido, edad, carrera, universidad} = formState;

  const onInputChange = ({target}) => {
    const {name, value} = target;
    setFormState({...formState, [name]: value
    });
  }


    useEffect( () => {
        console.log(useState);
        }, []);

        const onSubmit = () => {
            console.log("Form submitted:", formState);
          };


    
    return (
    <>
      <h1>Formulario Simple</h1><hr />

        <input type ="text" className="form-control mt-2" placeholder="A0XXXXXXX" name="matricula"
            value={matricula}
            onChange={onInputChange}
        />

        <input type="text" className="form-control mt-2" placeholder="Nombre" name = "nombre"
        value={nombre}
        onChange = {onInputChange}
        />

        <input type ="text" className="form-control mt-2" placeholder="Apellido" name="apellido"
            value={apellido}
            onChange={onInputChange}
        />

        <input type ="number" className="form-control mt-2" placeholder="Edad" name="edad"
            value={edad}
            onChange={onInputChange}
        />

        <input type ="text" className="form-control mt-2" placeholder="Universidad" name="universidad"
            value={universidad}
            onChange={onInputChange}
        />

        <input type ="text" className="form-control mt-2" placeholder="Carrera" name="carrera"
            value={carrera}
            onChange={onInputChange}
        />

        <button className = "btn btn-primary" onClick={onSubmit}>Enviar</button>


        {
            (nombre === 'strider2') && <Message />
        }
    </>
  )
}

export default SimpleForm
