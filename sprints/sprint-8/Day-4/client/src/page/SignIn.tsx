import { Link } from 'react-router-dom';
import { GoogleSignInIcon, DiscordSignInIcon } from '../constants';
import { SignInButton } from '../components';
import { SignInForm } from '../modules/auth/components/SignInForm';
import { loginWithDiscord } from '../modules/auth/services/authService';

export const SignIn = (): JSX.Element => {
  return (
    <div className="flex flex-col items-center justify-center h-screen px-2">
      <div className="flex flex-col items-center justify-center">
        <h1 className="text-3xl text-white font-bold">Welcome back</h1>
        <p className="text-gray-400 text-[0.8rem] pt-4 text-center">
          Sign in to ToDo App with your Discord, Google account or credentials
        </p>
        <SignInButton
          iconSvg={GoogleSignInIcon}
          text="Sign in with Google"
          onClick={() => console.log('Hello World')}
        />
        <SignInButton
          iconSvg={DiscordSignInIcon}
          text="Sign in with Discord"
          onClick={loginWithDiscord}
        />
        <div className="flex items-center w-full my-6">
          <div className="flex-grow border-t border-gray-400"></div>
          <span className="flex-shrink mx-4 text-gray-500 text-sm">or</span>
          <div className="flex-grow border-t border-gray-400"></div>
        </div>
        <SignInForm />

        <Link
          className="text-[0.7rem] text-center text-white mt-4 underline cursor-pointer"
          to={'/signup'}
        >
          Don't have an account? Create one here
        </Link>
        <a
          className="text-[0.7rem] text-center text-white mt-4 underline cursor-pointer"
          href="#"
        >
          Forgot your password?
        </a>
      </div>
    </div>
  );
};
