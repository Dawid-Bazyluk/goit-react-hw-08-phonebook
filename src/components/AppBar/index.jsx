import { useAuth } from "../../hooks/useAuth";
import { AuthNav } from "../AuthNav";
import { Navigation } from "../Navigation";
import { UserMenu } from "../UserMenu";
import style from "./AppBar.module.scss";

export const AppBar = () => {
  const { isLoggedIn } = useAuth();

  return (
    <header className={style.header}>
      <Navigation />
      {isLoggedIn ? <UserMenu /> : <AuthNav />}
    </header>
  );
};
