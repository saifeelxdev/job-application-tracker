import useForm from '../hooks/useForm';
import useAuth from '../hooks/useAuth';
import { useNavigate } from 'react-router-dom';
import InputField from '../components/InputField/InputField';
import Button from '../components/Button/Button';

function Register() {
  const navigate = useNavigate();

  const { formData, handleChange } = useForm({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
    role: '',
  });

  const { register, loading, error } = useAuth();

  async function handleSubmit(e) {
    e.preventDefault();

    try {
      await register(formData);
      alert('Registration successful');

      if (formData.role === 'candidate') {
        navigate('/candidate');
      } else if (formData.role === 'recruiter') {
        navigate('/recruiter');
      }
    } catch (error) {
      console.log(error.message);
    }
  }
  return (
    <>
      <div className="min-h-screen bg-gray-700 grid place-items-center">
        <form
          onSubmit={handleSubmit}
          className="w-full max-w-md bg-white rounded-xl shadow-lg p-6 sm:p-8 grid gap-5"
        >
          <h2 className="text-center font-sans text-4xl font-semibold">
            Register
          </h2>
          {error && <p className="text-red-500">{error}</p>}

          <span className="text-xl">Role</span>
          <select name="role" value={formData.role} onChange={handleChange}>
            <option value="">Select Role</option>
            <option value="candidate">Candidate</option>
            <option value="recruiter">Recruiter</option>
          </select>

          <InputField
            label="Name"
            name="name"
            id="name"
            type="text"
            value={formData.name}
            onChange={handleChange}
            placeholder="Full Name"
          />
          <InputField
            label="Email"
            name="email"
            id="email"
            type="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Enter Email"
          />
          <InputField
            label="Password"
            name="password"
            id="password"
            type="password"
            value={formData.password}
            onChange={handleChange}
            placeholder="Enter Password"
          />
          <InputField
            label="Confirm Password"
            name="confirmPassword"
            id="confirm-password"
            type="password"
            value={formData.confirmPassword}
            onChange={handleChange}
            placeholder="Enter Password"
          />
          <Button
            text={loading ? 'Registering' : 'Register'}
            type="submit"
            disabled={loading}
            className="bg-blue-600 p-2 text-white cursor-pointer hover:bg-blue-700 transition-colors duration-200 ease-out"
          />
        </form>
      </div>
    </>
  );
}

export default Register;
