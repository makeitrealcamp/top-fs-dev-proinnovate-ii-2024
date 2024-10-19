import { useState } from 'react';
import { register } from '../services/authService';
import { useNavigate } from 'react-router-dom';

export const SignUpForm = () => {
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
      const user = await register({
        email,
        password,
      });
      console.log({ user });
      if (user?.email) {
        navigate('/signin');
      }
    } catch (error: unknown) {
      console.error(error);
      setErrors('Invalid email or password');
    }
  };
  return (
    <form action="" className="w-full mt-4" onSubmit={handleSubmit}>
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
        onClick={() => console.log('Hello World')}
      >
        Create Account
      </button>
    </form>
  );
};
