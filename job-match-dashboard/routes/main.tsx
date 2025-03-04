import { createBrowserRouter, RouteObject } from "react-router-dom";
import Home from "../src/pages/Home";

function JobPage() {
    return null;
}

const routes: RouteObject[] = [
    {
        path: "/",
        element: <Home />,
    },
    {
        path: "/job/:id",
        element: <JobPage />,
    },
];

export const router = createBrowserRouter(routes);
