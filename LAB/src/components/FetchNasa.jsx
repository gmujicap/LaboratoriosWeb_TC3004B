import React from 'react'
import { useFetch } from '../hooks/useFetch';
import { useCounter } from '../hooks/useCounter';
import { Loading } from './Loading';
import { Photo } from './Photo';

export const FetchNasa = () => {
    const {counter, decrement, increment } = useCounter(1);
    const {data, hasError, isLoading} = useFetch(`https://api.nasa.gov/planetary/apod?api_key=dsE3OX09Y1j3snCqm9F3NJLWgw6aF6vbrhHVlrq3&date=2024-02-${counter}`);
    
  return (
    <div>
        <h1>API de NASA</h1>
        <h3>Se muestran las imagenes de NASA del día para cada día de Febrero 2024</h3>
        <hr/>
        <button className='btn btn-primary' onClick = { () => decrement()}>Previous</button>
        <button className='btn btn-primary' onClick = { () => increment()}>Next</button>
        <h5>{data?.explanation}</h5>
        {isLoading ? <Loading/>
            : (<Photo image={data?.url} />)}
    </div>
  )
}

