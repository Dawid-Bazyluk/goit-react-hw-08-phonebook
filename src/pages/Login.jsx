import { Helmet } from "react-helmet-async";
import { LoginForm } from "../components/LoginForm";


export default function LogIn() {
    return (
        <div>
            <Helmet>
                <title>Log in</title>
            </Helmet>
            <LoginForm/>
        </div>
    )
}