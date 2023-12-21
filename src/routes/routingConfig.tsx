import React from "react";
import LoginPage from "../pages/login";
import { Routes, Route } from "react-router-dom";
import PrivateRoute from "./privateRouter";
import NotFound from "../pages/notFound";
import AbountUsPage from "../pages/about-us";
import HomePage from "../pages/home";
import ProfilePage from "../pages/profile";
import FinancialManagmentPage from "../pages/financial-managment";
import DetailServis from "../views/financialManagmentView/components/detail-servis";
import RenevalServis from "../views/financialManagmentView/components/revenal-servis";
import Support from "../pages/support";
import DashboardView from "../views/dashboardView";
import DevicesView from "../views/devicesView";
import CamerasView from "../views/camerasView";
import NotificationsView from "../views/notificationsView";

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
            <DashboardView />
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
        path="/devices"
        element={
          <PrivateRoute>
            <DevicesView />
          </PrivateRoute>
        }
      />
      <Route
        path="/cameras"
        element={
          <PrivateRoute>
            <CamerasView />
          </PrivateRoute>
        }
      />
      <Route
        path="/notifications"
        element={
          <PrivateRoute>
            <NotificationsView />
          </PrivateRoute>
        }
      />
    </Routes>
  );
};

export default RoutingConfig;
