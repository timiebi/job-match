import {ReactNode} from "react";
import {Navigate} from "react-router-dom";

interface AuthGuardProps {
    children: ReactNode;
}


export default function AuthGuard({children}: AuthGuardProps) {
    const token = localStorage.getItem("job_user_email");

    if (!token) {
        return <Navigate to="/login" replace/>;
    }

    return <>{children}</>;
}
