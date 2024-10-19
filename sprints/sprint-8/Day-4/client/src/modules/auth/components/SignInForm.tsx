import { useState } from 'react';
import { useAuth } from '../application/AuthContext';
import { login } from '../services/authService';
import { useNavigate } from 'react-router-dom';

export const SignInForm = () => {
  const { login: authLogin } = useAuth();
  const [errors, setErrors] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const email = (e.target as HTMLFormElement).email.value;
      const password = (e.target as HTMLFormElement).password.value;
      console.log({
        email,
        password,
      });
      const user = await login({
        email,
        password,
      });
      authLogin(user);
      navigate('/tasks');
    } catch (error: unknown) {
      console.error(error);
      setErrors('Invalid email or password');
    }
  };

  return (
    <form action="" className="w-full" onSubmit={handleSubmit}>
      <div>
        {errors && (
          <div
            className="bg-red-100 border-l-4 border-red-500 text-red-700 p-4"
            role="alert"
          >
            <p>{errors}</p>
          </div>
        )}
      </div>

      <div className="w-full">
        <label
          htmlFor="email"
          className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
        >
          Email
        </label>
        <input
          type="text"
          id="email"
          className="bg-transparent border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:border-gray-600 dark:placeholder-gray-500 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="johndoe@gmail.com"
          required
        />
      </div>
      <div className="w-full mt-4">
        <label
          htmlFor="password"
          className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
        >
          Password
        </label>
        <input
          type="password"
          id="password"
          className="bg-transparent border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:border-gray-600 dark:placeholder-gray-500 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="Your password"
          required
        />
      </div>
      <button
        className="w-full text-white text-sm mt-6 h-10 rounded-xl cursor-pointer border-2 border-gray-600 p-2"
        type="submit"
      >
        Sign In
      </button>
    </form>
  );
};
