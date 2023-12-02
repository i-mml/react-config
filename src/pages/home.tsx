import Cookies from 'js-cookie'
import React from 'react'
import { redirect, useNavigate } from 'react-router-dom'
import { useMutation } from "react-query";
import { LogoutService } from '../api/services/auth';

const HomePage = () => {
  const navigate = useNavigate()
  const mutation = useMutation(() => LogoutService().finally(() => navigate("/login", { replace: true })));

  const removeToken = () => {
    mutation.mutate();
  }

  return (
    <div>
      <h2>HoemPage</h2>
      <button onClick={removeToken}>logout</button>
    </div>
  )
}

export default HomePage