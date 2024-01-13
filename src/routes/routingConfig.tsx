import React, { useEffect } from "react";
import LoginPage from "../pages/login";
import { Routes, Route, useNavigate } from "react-router-dom";
import PrivateRoute from "./privateRouter";
import NotFound from "../pages/notFound";
import AbountUsPage from "../pages/about-us";
import ProfilePage from "../pages/profile";
import FinancialManagmentPage from "../pages/financial-managment";
import Support from "../pages/support";
import HomePage from "../pages/home";
import SupportCreatePage from "../pages/supportCreate";
import SingleSupportPage from "../pages/singleSupport";
import NotificationsPage from "../pages/notifications";
import CamerasPage from "../pages/cameras";
import DevicesPage from "../pages/devices";
import Cookies from "js-cookie";
import RenevalServicePage from "../pages/renevalService";
import DetailServicePage from "../pages/detailService";
import PlansPage from "../pages/plans";
import CreateCompnayPage from "../pages/createCompnay";
import CompaniesPage from "../pages/companies";
import CreateBannerPage from "../pages/CreateBanner";
import PlanManagementPage from "../pages/planManaement";

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
            <DetailServicePage />
          </PrivateRoute>
        }
      />

      <Route
        path="/financial-management/reneval-service"
        element={
          <PrivateRoute>
            <RenevalServicePage />
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
        path="/support/:chatId"
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
      <Route
        path="/plans"
        element={
          <PrivateRoute>
            <PlansPage />
          </PrivateRoute>
        }
      />
      <Route
        path="/companies"
        element={
          <PrivateRoute>
            <CompaniesPage />
          </PrivateRoute>
        }
      />
      <Route
        path="/company/create"
        element={
          <PrivateRoute>
            <CreateCompnayPage />
          </PrivateRoute>
        }
      />

      <Route
        path="/banner/create"
        element={
          <PrivateRoute>
            <CreateBannerPage />
          </PrivateRoute>
        }
      />
      <Route
        path="/plan/management"
        element={
          <PrivateRoute>
            <PlanManagementPage />
          </PrivateRoute>
        }
      />
    </Routes>
  );
};

export default RoutingConfig;
