import React, { useState } from "react";
import s from "./profile.module.scss";
import UserInformationTab from "./components/userInformation";
import PasswordTab from "./components/password";

const ProfileView = () => {
  const [currentTab, setCurrentTab] = useState("user_information");

  const tabsList = [
    { id: 1, faTitle: "اطلاعات حساب کاربری", title: "user_information" },
    { id: 3, faTitle: "رمز عبور", title: "password" },
  ];

  const contentGenerator = {
    user_information: <UserInformationTab />,
    password: <PasswordTab />,
  };

  return (
    <div className={s.container}>
      <div className={s.title}>پروفایل</div>
      <div className={s.tabContainer}>
        <div className={s.TabsBox}>
          {tabsList?.map(({ faTitle, id, title }) => (
            <div
              className={`${s.profileTab} ${
                currentTab === title && s.profileActiveTab
              }`}
              onClick={() => setCurrentTab(title)}
              key={id}
            >
              {faTitle}
            </div>
          ))}
        </div>
        <>
          <div className={s.content}>
            {/* @ts-ignore */}
            {contentGenerator[currentTab]}
          </div>
        </>
      </div>
    </div>
  );
};

export default ProfileView;
