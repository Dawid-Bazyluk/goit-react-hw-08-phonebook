import { useDispatch } from "react-redux";
import { register } from "../../redux/auth/operations";
import style from "./RegisterForm.module.scss";
import { Button } from "@mui/material";
import TextField from "@mui/material/TextField";

export const RegisterForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.currentTarget;
    dispatch(
      register({
        name: form.elements.name.value,
        email: form.elements.email.value,
        password: form.elements.password.value,
      }),
    );
    form.reset();
  };

  return (
    <form className={style.form} onSubmit={handleSubmit} autoComplete="off">
      <TextField
        id="standard-basic"
        label="Username"
        variant="standard"
        type="text"
        name="name"
        placeholder="Enter username"
        required
      />
      <TextField
        id="standard-basic"
        label="Email"
        variant="standard"
        type="email"
        name="email"
        placeholder="Enter email"
        required
      />
      <TextField
        id="standard-basic"
        label="Password"
        variant="standard"
        type="password"
        name="password"
        placeholder="Enter password, at least 7 characters."
        pattern=".{7,}"
        title="Your password must contain at least 7 characters."
        required
      />
      <Button
        type="submit"
        variant="outlined"
        style={{ width: "100px", marginTop: "30px", alignSelf: "center" }}>
        Register
      </Button>
    </form>
  );
};
