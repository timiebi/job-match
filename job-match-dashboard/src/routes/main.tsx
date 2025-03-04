import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home.tsx";
import Login from "../pages/auth/login.tsx";
import AuthGuard from "./authGuard.tsx";
import { RoutesLinks } from "./frontendRoutes.ts";


// function JobPage() {
//     return null;
// }


const routes = [
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

