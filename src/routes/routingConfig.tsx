import React from "react";
import LoginPage from "../pages/login";
import { Routes, Route } from "react-router-dom";
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

const RoutingConfig = () => {
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
        path="/financial-managment"
        element={
          <PrivateRoute>
            <FinancialManagmentPage />
          </PrivateRoute>
        }
      />

      <Route
        path="/detail-servis"
        element={
          <PrivateRoute>
            <DetailServis />
          </PrivateRoute>
        }
      />

      <Route
        path="/reneval-servis"
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
