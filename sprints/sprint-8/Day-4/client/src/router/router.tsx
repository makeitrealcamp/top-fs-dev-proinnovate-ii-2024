import App from "../App";
import { createBrowserRouter, Navigate } from "react-router-dom";
import { Home, SignIn, SignUp } from "../page";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        children: [
            {
                path: "/",
                element: <Navigate to="/home" replace />
            },
            {
                path: "/home",
                element: <Home />
            },
            {
                path: "/signin",
                element: <SignIn />
            },
            {
                path: "/signup",
                element: <SignUp />
            }
        ]
    }
])