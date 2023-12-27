import React, { useEffect } from "react";
import LoginPage from "../pages/login";
import { Routes, Route, useNavigate } from "react-router-dom";
import PrivateRoute from "./privateRouter";
import NotFound from "../pages/notFound";
import AbountUsPage from "../pages/about-us";
import ProfilePage from "../pages/profile";
import FinancialManagmentPage from "../pages/financial-managment";
import Support from "../pages/support";
import DetailServis from "../views/financialManagmentView/components/detail-servis";
import RenevalServis from "../views/financialManagmentView/components/revenal-servis";
import HomePage from "../pages/home";
import SupportCreatePage from "../pages/supportCreate";
import SingleSupportPage from "../pages/singleSupport";
import NotificationsPage from "../pages/notifications";
import CamerasPage from "../pages/cameras";
import DevicesPage from "../pages/devices";
import Cookies from "js-cookie";

const RoutingConfig = () => {
  const tokenValue = Cookies.get("ems-token")
  const navigate = useNavigate()

  useEffect(() => {
    if (!tokenValue || tokenValue === "") { return navigate('/login') };
  }, [])

  return (
    <Routes>
      {/* public routes(e.g policies , login , 404 ,...) */}
      <Route path="*" element={<NotFound />} />
      <Route path="/login" element={<LoginPage />} />

      {/* private routes (after login) */}
      <Route
        path="/"
        element={
          <PrivateRoute>
            <HomePage />
          </PrivateRoute>
        }
      />

      <Route
        path="/profile"
        element={
          <PrivateRoute>
            <ProfilePage />
          </PrivateRoute>
        }
      />

      <Route
        path="/about-us"
        element={
          <PrivateRoute>
            <AbountUsPage />
          </PrivateRoute>
        }
      />

      <Route
        path="/financial-management"
        element={
          <PrivateRoute>
            <FinancialManagmentPage />
          </PrivateRoute>
        }
      />

      <Route
        path="/financial-management/detail-service"
        element={
          <PrivateRoute>
            <DetailServis />
          </PrivateRoute>
        }
      />

      <Route
        path="/financial-management/reneval-service"
        element={
          <PrivateRoute>
            <RenevalServis />
          </PrivateRoute>
        }
      />

      <Route
        path="/support"
        element={
          <PrivateRoute>
            <Support />
          </PrivateRoute>
        }
      />
      <Route
        path="/support/create"
        element={
          <PrivateRoute>
            <SupportCreatePage />
          </PrivateRoute>
        }
      />
      <Route
        path="/support/:id"
        element={
          <PrivateRoute>
            <SingleSupportPage />
          </PrivateRoute>
        }
      />

      <Route
        path="/devices"
        element={
          <PrivateRoute>
            <DevicesPage />
          </PrivateRoute>
        }
      />
      <Route
        path="/cameras"
        element={
          <PrivateRoute>
            <CamerasPage />
          </PrivateRoute>
        }
      />
      <Route
        path="/notifications"
        element={
          <PrivateRoute>
            <NotificationsPage />
          </PrivateRoute>
        }
      />
    </Routes>
  );
};

export default RoutingConfig;
