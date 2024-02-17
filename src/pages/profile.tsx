import React, { useState } from "react";
import ProfileView from "../views/profileView";
import MobileNaviagtorLine from "../components/mobileNaviagatorLine";
import { isMobile } from "react-device-detect";
import LogoutModal from "../components/logoutModal";

const ProfilePage = () => {
  const [modal, setModal] = useState(false);
  const toggle = () => setModal(!modal);


  return (
    <>
      <MobileNaviagtorLine title="حساب کاربری" hasLink={false} />
      <ProfileView />
      <div
        onClick={toggle}
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

      {
        modal && <LogoutModal open={modal} toggle={toggle} />
      }
    </>
  );
};

export default ProfilePage;
