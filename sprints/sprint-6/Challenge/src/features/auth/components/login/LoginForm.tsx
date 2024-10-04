import { SubmitHandler, useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { useAppDispatch, useAppSelector } from '../../../../hooks/redux/hooks';
import { z } from 'zod';
import { login } from '../../authSlice';
import { useEffect } from 'react';
import { useNavigate } from 'react-router';

const schema = z.object({
  email: z.string().email(),
  password: z.string().min(4),
  // .regex(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{4,}$/),
});

type FormFields = z.infer<typeof schema>;

export const LoginForm = () => {
  const {
    register,
    formState: { errors, isSubmitting },
    handleSubmit,
  } = useForm<FormFields>({
    resolver: zodResolver(schema),
  });
  const dispatch = useAppDispatch();
  const onSubmit: SubmitHandler<FormFields> = async (data) => {
    dispatch(login(data));
  };

  const { isAuthenticated, isLoading } = useAppSelector((state) => state.auth);
  const navigate = useNavigate();

  useEffect(() => {
    if (isAuthenticated && !isLoading) {
      navigate('/tasks');
    }
  }, [isAuthenticated, isLoading]);

  return (
    <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
      <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
        <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
          Sign in to your account
        </h1>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="space-y-4 md:space-y-6"
        >
          <label
            htmlFor="email"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            email
          </label>
          <input
            className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-slate-600 focus:border-slate-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            {...register('email')}
            type="email"
            id="email"
          />
          <span role="alert" className="text-red-400">
            {errors.email && errors.email.message}
          </span>
          <label
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            htmlFor="password"
          >
            Password
          </label>
          <input
            className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-slate-600 focus:border-slate-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            {...register('password')}
            type="password"
            id="password"
          />
          <span role="alert" className="text-red-400">
            {errors.password && errors.password.message}
          </span>
          <button
            className="w-full text-black bg-slate-300 hover:bg-slate-200 focus:ring-4 focus:outline-none focus:ring-slate-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-slate-600 dark:hover:bg-slate-700 dark:focus:ring-slate-800"
            type="submit"
            id="submit"
            disabled={isSubmitting}
          >
            {' '}
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};
