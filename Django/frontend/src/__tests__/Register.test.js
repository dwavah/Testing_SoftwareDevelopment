import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import Register from '../components/Register';
import axios from 'axios';

jest.mock('axios');

describe('User Registration Integration Test', () => {
  it('should register user successfully', async () => {
    axios.post.mockResolvedValueOnce({ status: 201 });

    render(<Register />);

    fireEvent.change(screen.getByPlaceholderText(/username/i), {
      target: { value: 'testuser' },
    });
    fireEvent.change(screen.getByPlaceholderText(/password/i), {
      target: { value: 'testpass123' },
    });

    fireEvent.click(screen.getByText(/register/i));

    await waitFor(() => {
      expect(axios.post).toHaveBeenCalledWith('users/register/', {
        username: 'testuser',
        password: 'testpass123',
      });
    });
  });
});
