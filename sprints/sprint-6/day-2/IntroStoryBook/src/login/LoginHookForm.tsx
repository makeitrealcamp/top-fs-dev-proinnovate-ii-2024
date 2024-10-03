import { SubmitHandler, useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';

import { z } from 'zod';

const schema = z.object({
  username: z.string().min(3).max(8),
  email: z.string().email(),
  password: z
    .string()
    .min(4)
    // .regex(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{4,}$/),
});

type FormFields = z.infer<typeof schema>;

export const LoginHookForm = () => {
  const {
    register,

    formState: { errors, isSubmitting },
    handleSubmit,
  } = useForm<FormFields>({
    resolver: zodResolver(schema),
  });

  const onSubmit: SubmitHandler<FormFields> = async (data) => {
    await new Promise((resolve) => setTimeout(resolve, 1000));
    console.log(data);
    console.log({ errors });
  };

  return (
    <div>
      LoginForm
      <form onSubmit={handleSubmit(onSubmit)} className=" flex flex-col gap-4">
        <label htmlFor="username">Username</label>
        <input
          {...register('username')}
          type="text"
          id="username"
          aria-invalid={errors.username ? 'true' : 'false'}
        />
        <span role="alert" className="text-red-400">
          {errors.username && errors.username.message}
        </span>
        <label htmlFor="email">email</label>
        <input {...register('email')} type="email" id="email" />
        <span role="alert" className="text-red-400">
          {errors.email && errors.email.message}
        </span>
        <label htmlFor="password">Password</label>
        <input {...register('password')} type="password" id="password" />
        <span role="alert" className="text-red-400">
          {errors.password && errors.password.message}
        </span>
        <button type="submit" id="submit" disabled={isSubmitting}>
          {' '}
          Submit
        </button>
      </form>
    </div>
  );
};
