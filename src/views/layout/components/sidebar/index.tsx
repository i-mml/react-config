// import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router";
import s from "./sideBar.module.scss";
import { useMutation, useQuery } from "react-query";
import { LogoutService } from "../../../../api/services/auth";
import MobileSideBarView from "../mobileSidebar";
import { SidebarList } from "./sidebar.data";
import MobileHeader from "../mobileHeader";
import { useSelector } from "react-redux";
import { getCompanyById } from "../../../../api/services/company";
import { useParams } from "react-router-dom";

const SideBarView = () => {
  let location = useLocation();
  const navigate = useNavigate()
  const user = useSelector((state: any) => state?.auth?.data);
  const { data } = useQuery("get-company-by-id", () => getCompanyById(user?.admin?.company_Id));
  const mutation = useMutation(() => LogoutService().finally(() => navigate("/login", { replace: true })));
  const params = useParams()
  console.log(params)
  const removeToken = () => {
    mutation.mutate();
  }

  const activeClassName = (supportedLinks: string[]) => {
    if (supportedLinks.includes(location?.pathname)) {
      return s.active
    }
    if (location.pathname?.includes("/support/") && supportedLinks.includes("/support")) {
      return s.active
    }

    return ''
  }

  return (
    <>
      <div className={s.container}>
        <div className={s.logoBox}>
          <img src="/images/icons/sidebar_icon.svg" alt="Logo" className={s.logoImg} />
          <div className={s.logoText}>نت پورت</div>
        </div>
        <div className={s.itemBox}>
          {SidebarList?.filter(node => node?.allowedRoles?.includes(user?.user?.role))?.map(
            (item: {
              id: number;
              title: string;
              link: string;
              icon: string;
              subMenue: any[];
              supportedLinks: string[]
            }) => (
              <a href={item?.link} className={`${s.sidebarLink} ${activeClassName(item?.supportedLinks)}`}>
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

          <img src={data ? process.env.REACT_APP_IMAGE_BASE_URL + data?.data?.logo : ""} alt="profile" className={s.profileImg} />
          <div className={s.infoProfileBox}>
            <div className={s.profileName}>{user?.user?.first_name} {user?.user?.last_name}</div>
            <div className={s.profileEmail}>{user?.user?.email}</div>
          </div>

          <img
            src="/images/icons/log-out.svg"
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
