import { GoogleSignInIcon, DiscordSignInIcon } from "../constants";
import { SignInButton } from "../components";
import { Link } from "react-router-dom";

export const SignInLayout = (): JSX.Element => {
  return (
    <div className="flex flex-col items-center justify-center">
      <h1 className="text-3xl text-white font-bold">Welcome back</h1>
      <p className="text-gray-400 text-[0.8rem] pt-4 text-center">
        Sign in to ToDo App with your Discord, Google account or credentials
      </p>
      <SignInButton
        iconSvg={GoogleSignInIcon}
        text="Sign in with Google"
        onClick={() => console.log("Hello World")}
      />
      <SignInButton
        iconSvg={DiscordSignInIcon}
        text="Sign in with Discord"
        onClick={() => console.log("Hello World")}
      />
      <div className="flex items-center w-full my-6">
        <div className="flex-grow border-t border-gray-400"></div>
        <span className="flex-shrink mx-4 text-gray-500 text-sm">or</span>
        <div className="flex-grow border-t border-gray-400"></div>
      </div>
      <form action="" className="w-full">
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
          onClick={() => console.log("Hello World")}
        >
          Sign In
        </button>
      </form>
      <Link
        className="text-[0.7rem] text-center text-white mt-4 underline cursor-pointer"
        to={"/signup"}
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
  );
};
