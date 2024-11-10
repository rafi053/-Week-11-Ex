import  { FC, useState } from 'react';
import axios from 'axios';

const BaseURL = 'http://localhost:3001/api/auth';

const LoginComponent:FC = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleRegister = async () => {
    try {
      const response = await axios.post(`${BaseURL}/register`, {
        username,
        password,
      });

      const { token } = response.data;
      console.log(token);
      
      localStorage.setItem('token', token);

      console.log('Login successful');
    } catch (error) {
      console.error('Login failed', error); 
    }
  };


  const handleLogin = async () => {
    try {
      const response = await axios.post(`${BaseURL}/login/token`, {
        username,
        password,
      });

      const { token } = response.data;
      console.log(token);
      
      localStorage.setItem('token', token);

      console.log('Login successful');
    } catch (error) {
      console.error('Login failed', error); 
    }
  };

  const fetchData = async () => {
    const token = localStorage.getItem('token');
    try {
      const response = await axios.get(`${BaseURL}/protected/token`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      console.log(response.data);
    } catch (error) {
      console.error(error);
    }
  };


  return (
    <div>
      <input
        type="text"
        placeholder="Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={handleLogin}>Login</button>
      <button onClick={fetchData}>Fetch Data</button>
    </div>
  );
};

export default LoginComponent;