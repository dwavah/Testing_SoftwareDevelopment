// src/App.js
import React, { useState } from 'react';
import Register from './components/Register';
import Login from './components/Login';
import OrderForm from './components/OrderForm';
import OrderList from './components/OrderList';

function App() {
  const [token, setToken] = useState(null);

  const handleLogin = (token) => {
    setToken(token);
  };

  return (
    <div className="App">
      <h1>Welcome to the Shop</h1>
      <Register />
      <Login onLogin={handleLogin} />
      {token && (
        <>
          <OrderForm />
          <OrderList />
        </>
      )}
    </div>
  );
}

export default App;
