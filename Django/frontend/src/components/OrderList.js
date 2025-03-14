// src/components/OrderList.js
import React, { useEffect, useState } from 'react';
import API from '../services/api';

const OrderList = () => {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const res = await API.get('orders/');
        setOrders(res.data);
      } catch (error) {
        alert('Failed to fetch orders: ' + error.response.data);
      }
    };
    fetchOrders();
  }, []);

  return (
    <div>
      <h3>My Orders</h3>
      <ul>
        {orders.map(order => (
          <li key={order.id}>{order.item_name} - Quantity: {order.quantity}</li>
        ))}
      </ul>
    </div>
  );
};

export default OrderList;
