import logo from './logo.svg';
import './App.css';
import CryptoJS from 'crypto-js';
import { useRef, useState } from 'react';


function App() {
  const cifrar = (texto) =>{
    var textoCifrado = CryptoJS.AES.encrypt(texto, '12345678').toString();
    return textoCifrado;
  }

  const descifrar = (texto) => {
    var bytes = CryptoJS.AES.decrypt(texto,'12345678');
    var textoDescrifrado = bytes.toString(CryptoJS.enc.Utf8);
    return textoDescrifrado;
  }

  const inputRef = useRef(null);
  const [textoCifrado, setTextoCifrado] = useState('');
  const [textoDescifrado, setTextoDescifrado] = useState('');

  const handleEncrypt = (e) => {
    e.preventDefault();
    const value = inputRef.current.value;
    const encrypted = cifrar(value);
    setTextoCifrado(encrypted);
  };

  const handleDecrypt = (e) => {
    e.preventDefault();
    const decrypted = descifrar(textoCifrado);
    setTextoDescifrado(decrypted);
  };

  return (
    <div className="App">
        <form onSubmit={handleEncrypt}>
          <input
            type="text"
            ref={inputRef}
            placeholder="Ingresa texto a cifrar..."
          />
          <button type="submit">Submit</button>
        </form>

      <h2>Texto Cifrado: {textoCifrado}</h2>
      <br/>
      <button onClick={handleDecrypt} disabled={!textoCifrado}>
          Descifrar
      </button>
      <h2>Texto Descifrado: {textoDescifrado}</h2>
    </div>
  );
}

export default App;
