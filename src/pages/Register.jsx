import { Helmet } from "react-helmet-async";
import { RegisterForm } from "../components/RegisterForm";

export default function Register() {
  return (
    <div>
      <Helmet>
        <title>Sing up here</title>
      </Helmet>
      <RegisterForm />
    </div>
  );
}
