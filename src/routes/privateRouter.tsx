import Cookies from "js-cookie";
import React from "react";
import type { ReactElement } from "react";
import { Navigate, useLocation } from "react-router-dom";
import Layout from "../views/layout/layout";
import { useSelector } from "react-redux";




function PrivateRoute({ children }: { children: ReactElement }) {
  const authData = useSelector((state: any) => state?.auth?.data)
  const location = useLocation()

  const tokenValue = Cookies.get("access-token")

  if (!tokenValue || tokenValue === "") { return <Navigate to='/login' replace /> };
  if (!authData?.subscription && location.pathname !== "/financial-management") { return <Navigate to='/financial-management' /> };


  return <Layout>
    {children}
  </Layout>
}

export default PrivateRoute;
