import {createBrowserRouter, RouteObject} from "react-router-dom";
import Home from "../src/pages/Home";
import Login from "../src/pages/auth/login.tsx";
import {RoutesLinks} from "./frontendRoutes.ts";
import {ReactNode} from "react";
import {Navigate} from "react-router-dom";

interface AuthGuardProps {
    children: ReactNode;
}

function AuthGuard({children}: AuthGuardProps) {
    const token = localStorage.getItem("job_user_email");

    if (!token) {
        return <Navigate to="/login" replace/>;
    }

    return <>{children}</>;
}


function JobPage() {
    return null;
}


const routes: RouteObject[] = [
    {
        path: RoutesLinks.login,
        element: <Login/>
    },
    {
        path: RoutesLinks.home,
        element: <AuthGuard><Home/></AuthGuard>,
    },
    {
        path: RoutesLinks.job,
        element: <AuthGuard><JobPage/></AuthGuard>,
    },
];

export const router = createBrowserRouter(routes);

