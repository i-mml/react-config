import Cookies from "js-cookie";
import React from "react";
import type { ReactElement } from "react";
import { Navigate } from "react-router-dom";
import Layout from "../views/layout/layout";




function PrivateRoute({ children }: { children: ReactElement }) {
  const tokenValue = Cookies.get("access-token")

  if (!tokenValue || tokenValue === "") { return <Navigate to='/login' replace /> };

  return <Layout>
    {children}
  </Layout>
}

export default PrivateRoute;
