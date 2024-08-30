import React, { useState } from 'react';
import './CSS/Login.css';

const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const handleLogin = async(e)=>{
        e.preventDefault();

        if(username === '' || password === ''){
            setError('Both feilds are required');
            return;
        }
        if(username === 'admin' && password === 'password'){
            alert('Login Succesful');
        }else{
            setError('Invalid usernme or password')
        }
    };

   return (
    <div className='container'>
        
        <h2 className='header'>Login</h2>
        <form onSubmit={handleLogin} className='form'>
        <div className='inputGroup'>
            <label htmlFor="username" className='label'>Username</label>
            <input
                type = "text"
                id = "username"
                value={username}
                onChange={(e)=> setUsername(e.target.value)}
            ></input>
        </div>
        <div className='inputGroup'>
            <label htmlFor="password" className='label'>Password</label>
            <input
                type = "password"
                id = "password"
                value={password}
                onChange={(e)=>setPassword(e.target.value)}
            ></input>
        </div>
        {error && <div className='error'>{error}</div>}
        <button type="submit" className='button'>Login</button>
        
        </form>
    </div>
   )
}

export default Login