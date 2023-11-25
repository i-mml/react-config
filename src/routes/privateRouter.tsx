import Cookies from "js-cookie";
import React from "react";
import type { ReactElement } from "react";
import { Navigate } from "react-router-dom";




function PrivateRoute({ children }: { children: ReactElement }) {
  const tokenValue = Cookies.get("ems-token")

  if (!tokenValue || tokenValue === "") { return <Navigate to='/login' replace /> };

  return children;
}

export default PrivateRoute;
