import { useDispatch } from "react-redux"
import { useAuth } from "../../hooks/useAuth";
import style from "./UserMenu.module.scss"
import { Button } from "@mui/material";
import { logOut } from "../../redux/auth/operations";


export const UserMenu = () => {
  const dispatch = useDispatch();
  const { user } = useAuth();

  return (
    <div className={style.wrapper}>
      <p className={style.username}>Hi, {user.email}</p>
      <Button
        type="submit"
        variant="outlined"
        size="small"
        onClick={() => dispatch(logOut())}>
        Logout
      </Button>
    </div>
  );
};