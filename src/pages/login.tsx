import React from "react";
import LoginView from "../views/loginView/loginView";
import Cookies from "js-cookie";
import { Navigate, redirect } from "react-router-dom";

const LoginPage = () => {
  // todo =>
  // post the login info and get the token and user infos
  // set token in LocalStorage (search it)
  // set user infos in redux (read redux hint in redux folder)

  const tokenValue = Cookies.get("access-token")

  if (tokenValue && tokenValue !== '') {
    return <Navigate to='/' replace />
  }
  return <LoginView />;
};

export default LoginPage;
