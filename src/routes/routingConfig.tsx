import React from "react";
import LoginPage from "../pages/login";
import { Routes, Route } from "react-router-dom";
import PrivateRoute from "./privateRouter";

import NotFound from "../pages/notFound";
import AbountUsPage from "../pages/about-us";
import HomePage from "../pages/home";
import ProfilePage from "../pages/profile";
import SideBarPage from "../pages/side-bar";

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
        path="/side-bar"
        element={
          <PrivateRoute>
            <SideBarPage />
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
    </Routes>
  );
};

export default RoutingConfig;
