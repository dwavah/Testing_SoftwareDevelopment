// src/components/OrderForm.js
import React, { useState } from 'react';
import API from '../services/api';

const OrderForm = () => {
  const [form, setForm] = useState({ item_name: '', quantity: 1 });

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await API.post('orders/create/', form);
      alert('Order created successfully!');
    } catch (error) {
      alert('Failed to create order: ' + error.response.data);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input name="item_name" placeholder="Item Name" onChange={handleChange} required />
      <input name="quantity" type="number" min="1" onChange={handleChange} value={form.quantity} required />
      <button type="submit">Create Order</button>
    </form>
  );
};

export default OrderForm;
