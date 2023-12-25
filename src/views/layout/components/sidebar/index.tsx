// import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router";
import s from "./sideBar.module.scss";
import { useMutation } from "react-query";
import { LogoutService } from "../../../../api/services/auth";
import MobileSideBarView from "../mobileSidebar";
import { SidebarList } from "./sidebar.data";
import MobileHeader from "../mobileHeader";
import { useSelector } from "react-redux";

const SideBarView = () => {
  let location = useLocation();
  const navigate = useNavigate()
  const user = useSelector((state: any) => state?.auth?.data);
  const mutation = useMutation(() => LogoutService().finally(() => navigate("/login", { replace: true })));

  const removeToken = () => {
    mutation.mutate();
  }

  return (
    <>
      <div className={s.container}>
        <div className={s.logoBox}>
          <img src="/Images/logo.svg" alt="Logo" className={s.logoImg} />
          <div className={s.logoText}>نام برند و لوگو</div>
        </div>
        <div className={s.itemBox}>
          {SidebarList?.map(
            (item: {
              id: number;
              title: string;
              link: string;
              icon: string;
              subMenue: any[];
            }) => (
              <a href={item?.link} className={`${s.sidebarLink} ${location?.pathname === item?.link && s.active}`}>
                <div
                  className={s.sidebarItem}
                >
                  <div className={s.iconBox}>
                    <img src={item?.icon} alt="sideBar icon" className={s.icon} />
                  </div>
                  <div className={s.title}>{item.title}</div>
                </div>
              </a>
            )
          )}
        </div>
        <div className={s.profileBox} onClick={removeToken}>
          <img src="/Images/Avatar.png" alt="profile" className={s.profileImg} />
          <div className={s.infoProfileBox}>
            <div className={s.profileName}>{user?.user?.first_name} {user?.user?.last_name}</div>
            <div className={s.profileEmail}>{user?.user?.email}</div>
          </div>

          <img
            src="/Images/Icons/log-out.svg"
            alt="log out"
            className={s.logOut}
          />
        </div>
      </div>
      <MobileHeader />
      <MobileSideBarView />
    </>
  );
};

export default SideBarView;
