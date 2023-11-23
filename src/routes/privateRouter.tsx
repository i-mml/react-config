import React from "react";
import type { ReactElement } from "react";
import { Navigate } from "react-router-dom";
import { useCookies } from 'react-cookie';



function PrivateRoute({ children }: { children: ReactElement }) {
  const [cookies, setCookie] = useCookies([]);

  console.log("this is a good decition", cookies)
  const isLogin = localStorage.getItem("token");

  if (!isLogin) return <Navigate to='/login' />;

  return children;
}

export default PrivateRoute;
