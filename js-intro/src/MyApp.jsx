import React from 'react'
import {heroes} from './data/heroes.js';

export const MyApp = () => {
    /*
    const nombre = "Jorge";
    const apellido = "Carranza";
    const nombreCompleto = nombre + "" + apellido;
    const nombreCom = `${nombre} ${apellido}`;
    console.log( nombreCompleto);

    console.log(`Este es un texto: ${ getSaludo(nombreCompleto) }`);
    */

    const arreglo = [1,2,3,4,5];
    arreglo.push(1);
    console.log(arreglo);
    arreglo.pop(2);
    console.log(arreglo);

    let arreglo2 = [...arreglo,7];
    const doubles = arreglo2.map(function(i) {
        return i * 2;
    })
    console.log(doubles)

    const saludo = function (nombre) {
        return nombre;
    }

    const saludo2 = (nombre) => {
        return nombre;
    }

    const saludo3 = (nombre) => nombre;

    console.log(heroes)

    return (
        <div>MyApp</div>
    )
}

function getSaludo(nombre){
    return 'hola ' + nombre;
}