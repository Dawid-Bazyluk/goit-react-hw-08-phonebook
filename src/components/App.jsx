import { lazy, useEffect } from "react";
import { useDispatch } from "react-redux";
import { useAuth } from "../hooks/useAuth";
import { refreshUser } from "../redux/auth/operations";
import { Navigate, Route, Routes } from "react-router-dom";
import { Layout } from "./Layout";
import HomeLogged from "../pages/HomeLogged";
import { RestrictedRoute } from "./RestrictedRoute";
import { PrivateRoute } from "./PrivateRoute";

const Home = lazy(() => import("../pages/Home"));
const Login = lazy(() => import("../pages/Login"));
const Register = lazy(() => import("../pages/Register"));
const Phonebook = lazy(() => import("../pages/Phonebook"));

const App = () => {
  const dispatch = useDispatch();
  const { isRefreshing } = useAuth();

  useEffect(() => {
    dispatch(refreshUser);
  }, [dispatch]);

  return isRefreshing ? (
    <p>Refreshing user...</p>
  ) : (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route
          path="/register"
          element={
            <RestrictedRoute redirectTo="/phonebook" component={<Register />} />
          }
        />
        <Route
          path="/login"
          element={
            <RestrictedRoute redirectTo="/phonebook" component={<Login />} />
          }
        />
        <Route
          path="/phonebook"
          element={
            <PrivateRoute redirectTo="/login" component={<Phonebook />} />
          }
        />
        <Route
          path="/homepage"
          element={
            <PrivateRoute redirectTo="/login" component={<HomeLogged />} />
          }
        />
      </Route>
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
};
export default App;
