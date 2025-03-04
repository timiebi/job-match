import {useState,FormEvent} from "react";
import { useNavigate } from "react-router-dom";
import {RoutesLinks} from "../../../routes/frontendRoutes.ts";

export const useLogin = () =>{
    const navigate = useNavigate()
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');


  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
      e.preventDefault();
      if (email && password) {
          localStorage.setItem("job_user_email", email);
          navigate(RoutesLinks.home, {state: { email }});
      }
  }


  return {email, password, setPassword, setEmail, handleSubmit};
}