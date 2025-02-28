import React from 'react'
import { useFetch } from '../hooks/useFetch';
import { useCounter } from '../hooks/useCounter';
import { Loading } from './Loading';
import { Card } from './Card';

export const CustomHook = () => {
    const {counter, decrement, increment } = useCounter(1);
    const {data, hasError, isLoading} = useFetch(`https://pokeapi.co/api/v2/pokemon/${counter}`);

    return (
    <div>
        <h1>API de Pokemon</h1>
        <hr/>
        <h2>{data?.name}</h2>
        {isLoading ? <Loading/>
            : (<Card id={counter} name={data.name} sprites={ [
        data.sprites.front_default,
        data.sprites.front_shiny,
        data.sprites.back_default,
        data.sprites.back_shiny,
        ] } />)}

        <button className='btn btn-primary' onClick = { () => decrement()}>Previous</button>
        <button className='btn btn-primary' onClick = { () => increment()}>Next</button>
    </div>
  )
}

