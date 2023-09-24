import React from 'react';
import type { ReactElement } from "react"
import { Navigate } from 'react-router-dom';

function PrivateRoute({ children }: { children: ReactElement }) {
    const isLogin = localStorage.getItem("token")

    if (!isLogin) return <Navigate to='/login' />;

    return children;
}

export default PrivateRoute;
