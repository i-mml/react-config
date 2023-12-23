import React from "react";
import ProfileView from "../views/profileView";
import MobileNaviagtorLine from "../components/mobileNaviagatorLine";

const ProfilePage = () => {
  return (
    <>
      <MobileNaviagtorLine title="حساب کاربری" hasLink={false} />
      <ProfileView />
    </>
  );
};

export default ProfilePage;
