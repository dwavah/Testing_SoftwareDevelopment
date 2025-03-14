// src/components/Login.js
import React, { useState } from 'react';
import API, { setAuthToken } from '../services/api';

const Login = ({ onLogin }) => {
  const [form, setForm] = useState({ username: '', password: '' });

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await API.post('users/login/', form);
      setAuthToken(res.data.token);
      onLogin(res.data.token);  // Send token up to parent if needed
      alert('Logged in successfully!');
    } catch (error) {
      alert('Login failed: ' + error.response.data);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input name="username" placeholder="Username" onChange={handleChange} required />
      <input name="password" type="password" placeholder="Password" onChange={handleChange} required />
      <button type="submit">Login</button>
    </form>
  );
};

export default Login;
