export const Api = () => {
  
    const apiKey = 'uJ4VRHWLja3mginrRuITdamvxjOpeVFb';
    const peticion = fetch('https://api.giphy.com/v1/gifs/trending?api_key=' + apiKey);
    peticion
        .then( resp => resp.json() )
        .then( data =>{ console.log(data.data[0].url)})
        .catch( console.warn);
  
    return (
    <div>
      
    </div>
  )
}

export default Api
