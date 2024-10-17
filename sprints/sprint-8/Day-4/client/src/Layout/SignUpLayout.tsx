import { Link } from "react-router-dom";

export const SignUpLayout = (): JSX.Element => {
  return (
    <div className="w-96 px-4 flex flex-col justify-center items-center">
      <h2 className="text-3xl text-white font-bold mb-4">Create an account</h2>
      <form action="" className="w-full mt-4">
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
          Create Account
        </button>
      </form>
      <Link to={"/signin"} className="text-white text-[0.7rem] underline text-center mt-6">Have an account? Sign in.</Link>
    </div>
  );
};
