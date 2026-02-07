import { createJob } from '../services/jobServices';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function useJob() {
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  async function postJob(formData) {
    setLoading(true);
    setError('');

    try {
      const payload = {
        ...formData,
        salary: {
          minSalary: Number(formData.salary.minSalary),
          maxSalary: Number(formData.salary.maxSalary),
        },
      };

      const data = await createJob(payload);

      navigate('/recruiter');
      return data;
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  }
  return { loading, error, postJob };
}
