import React from "react";
import ProfileView from "../views/profileView";
import MobileNaviagtorLine from "../components/mobileNaviagatorLine";
import { useMutation } from "react-query";
import { LogoutService } from "../api/services/auth";
import { useNavigate, useParams } from "react-router-dom";
import { isMobile } from "react-device-detect";

const ProfilePage = () => {
  const navigate = useNavigate()
  const mutation = useMutation(() => LogoutService().finally(() => navigate("/login", { replace: true })));

  const params = useParams()

  const removeToken = () => {
    mutation.mutate();
  }

  return (
    <>
      <MobileNaviagtorLine title="حساب کاربری" hasLink={false} />
      <ProfileView />
      <div
        onClick={removeToken}
        style={{
          fontSize: "16px",
          fontWeight: "600",
          color: "#C31414",
          textAlign: "center",
          width: "100%",
          marginTop: '40px',
          display: isMobile ? "" : "none"
        }}>
        خروج از حساب کاربری
      </div>
    </>
  );
};

export default ProfilePage;
