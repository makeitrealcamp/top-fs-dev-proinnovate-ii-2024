import { Link } from 'react-router-dom';
import { SignUpForm } from '../modules/auth/components';

export const SignUp = (): JSX.Element => {
  return (
    <div className="flex flex-col items-center justify-center h-screen px-2">
      <div className="w-96 px-4 flex flex-col justify-center items-center">
        <h2 className="text-3xl text-white font-bold mb-4">
          Create an account
        </h2>
        <SignUpForm />
        <Link
          to={'/signin'}
          className="text-white text-[0.7rem] underline text-center mt-6"
        >
          Have an account? Sign in.
        </Link>
      </div>
    </div>
  );
};
