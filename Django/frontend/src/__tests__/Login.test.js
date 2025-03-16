import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import Login from '../components/Login';
import axios from 'axios';

jest.mock('axios');

describe('User Login Integration Test', () => {
  it('should login user successfully and get token', async () => {
    const mockToken = 'mocked_token_123';
    axios.post.mockResolvedValueOnce({ data: { token: mockToken }, status: 200 });

    const mockOnLogin = jest.fn();

    render(<Login onLogin={mockOnLogin} />);

    fireEvent.change(screen.getByPlaceholderText(/username/i), {
      target: { value: 'testuser' },
    });
    fireEvent.change(screen.getByPlaceholderText(/password/i), {
      target: { value: 'testpass123' },
    });

    fireEvent.click(screen.getByText(/login/i));

    await waitFor(() => {
      expect(axios.post).toHaveBeenCalledWith('users/login/', {
        username: 'testuser',
        password: 'testpass123',
      });
    });

    expect(mockOnLogin).toHaveBeenCalledWith(mockToken);
  });
});
