import React, { useState } from "react";
import s from "./profile.module.scss";
import UserInformationTab from "./components/userInformation";
import PasswordTab from "./components/password";
import TitleBox from "../dashboardView/components/titleBox";
import { useQuery } from "react-query";
import { useSelector } from "react-redux";
import { getCompanyById } from "../../api/services/company";
import LoadingPage from "../../components/loadingPage";

const ProfileView = () => {
  const authData = useSelector((state: any) => state?.auth?.data)

  const [currentTab, setCurrentTab] = useState("user_information");

  const { data, isLoading } = useQuery("get-company-by-id", () => getCompanyById(authData?.admin?.company_Id));

  const tabsList = [
    { id: 1, faTitle: "اطلاعات حساب کاربری", title: "user_information" },
    { id: 3, faTitle: "تغییر رمز عبور", title: "password" },
  ];

  const contentGenerator = {
    user_information: <UserInformationTab data={data} />,
    password: <PasswordTab />,
  };

  if (isLoading) {
    return <LoadingPage />
  }
  return (
    <div className={s.container}>
      <TitleBox title="پروفایل" />
      <div className={s.tabContainer}>
        <div className={s.TabsBox}>
          {tabsList?.map(({ faTitle, id, title }) => (
            <div
              className={`${s.profileTab} ${currentTab === title && s.profileActiveTab
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
