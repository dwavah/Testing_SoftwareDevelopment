import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import OrderForm from '../components/OrderForm';
import axios from 'axios';

jest.mock('axios');

describe('Order Creation Integration Test', () => {
  it('should create order successfully', async () => {
    axios.post.mockResolvedValueOnce({ status: 201 });

    render(<OrderForm />);

    fireEvent.change(screen.getByPlaceholderText(/item name/i), {
      target: { value: 'Laptop' },
    });
    fireEvent.change(screen.getByPlaceholderText(/quantity/i), {
      target: { value: '2' },
    });

    fireEvent.click(screen.getByText(/create order/i));

    await waitFor(() => {
      expect(axios.post).toHaveBeenCalledWith('orders/create/', {
        item_name: 'Laptop',
        quantity: '2',
      });
    });
  });
});
