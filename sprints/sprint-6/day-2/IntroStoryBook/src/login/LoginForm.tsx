import { useState } from "react";
import { validatePassword, validEmail } from "./validation";

export const LoginForm = () => {

    const [errors, setErrors] = useState([])

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const form = e.currentTarget;
        const formData = new FormData(form);
        const username = formData.get('username') as string;
        const email = formData.get('email') as string;
        const password = formData.get('password') as string;
        const errors = [];
        if (!username) {
            errors.push('Username is required');
        }

        if (!email) {
            errors.push('Email is required');
        }
        if (!password) {
            errors.push('Password is required');
        }
        if (!validEmail(email)) {
            errors.push('Email is invalid');
        }
        if(!validatePassword(password)){
            errors.push('Password is invalid');
        }
        setErrors(errors);
    }
  return (
    <div>
      LoginForm
      <form action="" className=" flex flex-col gap-4">
        <label htmlFor="username">Username</label>
        <input type="text" id="username" required />
        <label htmlFor="email">email</label>
        <input type="email" id="email" required />
        <label htmlFor="password">Password</label>
        <input type="password" id="password" required />
        <button type="submit" id="submit"> Submit</button>
      </form>
    </div>
  );
};
