import { useDispatch } from "react-redux";
import { logIn } from "../../redux/auth/operations";
import style from "./LoginForm.module.scss";
import { Button } from "@mui/material";
import TextField from "@mui/material/TextField";

export const LoginForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.currentTarget;
    dispatch(
      logIn({
        email: form.elements.email.value,
        password: form.elements.password.value,
      }),
    );
    form.reset();
  };

  return (
    <form className={style.form} onSubmit={handleSubmit} autoComplete="off">
      <TextField
        id="email"
        label="Email"
        variant="standard"
        type="email"
        name="email"
        placeholder="Enter email"
        required
      />
      <TextField
        id="password"
        label="Password"
        variant="standard"
        type="password"
        name="password"
        placeholder="Enter password"
        required
      />

      <Button
        type="submit"
        variant="outlined"
        style={{ width: "100px", marginTop: "30px", alignSelf: "center" }}>
        Log In
      </Button>
    </form>
  );
};