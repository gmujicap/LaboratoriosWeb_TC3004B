import React, {useState} from 'react'
import { useNavigate } from 'react-router-dom';

export const Login = () => {
    const [username, setUsername] = useState('');
    const navigate = useNavigate();

    const onLogin = () => {
        // Suponiendo que la validación es exitosa
        navigate('/Home');
        };


  return (
    <div>
      <h2>Login</h2>

      <input type="text"placeholder="Username" value={username}
        onChange={(e) => setUsername(e.target.value)}
        />
        <button onClick={onLogin}>Login</button>
    </div>
  )
}

