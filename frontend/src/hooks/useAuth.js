import { useState } from 'react';
import { loginUser, registerUser } from '../services/authService';

export default function useAuth() {
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  async function login(formData) {
    setLoading(true);
    setError('');

    try {
      const data = await loginUser(formData);

      localStorage.setItem('token', data.data.token);
      return data;
    } catch (error) {
      setError(error.message);
      throw error;
    } finally {
      setLoading(false);
    }
  }

  async function register(formData) {
    setLoading(true);
    setError('');
    try {
      const data = await registerUser(formData);
      return data;
    } catch (error) {
      setError(error.message);
      throw error;
    } finally {
      setLoading(false);
    }
  }

  return { register, login, loading, error };
}
