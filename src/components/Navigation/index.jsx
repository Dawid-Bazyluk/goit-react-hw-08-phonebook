import { NavLink } from "react-router-dom";
import { useAuth } from "../../hooks/useAuth";
import style from "./Navigation.module.scss";

export const Navigation = () => {
  const { isLoggedIn } = useAuth();

  return (
    <nav>
      {isLoggedIn ? (
        <>
          <NavLink className={style.link} to="/homepage">
            Home
          </NavLink>
          <NavLink className={style.link} to="/phonebook">
            Phonebook
          </NavLink>
        </>
      ) : (
        <NavLink className={style.homeLink} to="/">
          Home
        </NavLink>
      )}
    </nav>
  );
};
