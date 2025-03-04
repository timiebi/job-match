import {createBrowserRouter, RouteObject} from "react-router-dom";
import Home from "../pages/Home.tsx";
import Login from "../pages/auth/login.tsx";
import {RoutesLinks} from "./frontendRoutes.ts";
import AuthGuard from "./authGuard.tsx";


// function JobPage() {
//     return null;
// }


const routes: RouteObject[] = [
    {
        path: RoutesLinks.login,
        element: <Login/>
    },
    {
        path: RoutesLinks.home,
        element: <AuthGuard><Home/></AuthGuard>,
    },
    // {
    //     path: RoutesLinks.job,
    //     element: <AuthGuard><JobPage/></AuthGuard>,
    // },
];

export const router = createBrowserRouter(routes);

