import React from 'react';
import s from "./mobileSideBar.module.scss";
import { useLocation, useNavigate } from 'react-router';
import { useSelector } from 'react-redux';



const MobileSideBarView = () => {
  let location = useLocation();
  const navigate = useNavigate();

  const user = useSelector((state: any) => state?.auth?.data?.user);


  const SidebarList =
    user?.role === 2 ?
      [
        {
          id: 3,
          title: "پشتیبانی",
          icon: <svg width="20" height="21" viewBox="0 0 20 21" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g id="life-buoy">
              <path id="Icon" d="M4.10866 4.60841L7.64199 8.14175M12.3587 12.8584L15.892 16.3917M15.892 4.60841L12.3587 8.14175L15.3003 5.20008M4.10866 16.3917L7.64199 12.8584M18.3337 10.5001C18.3337 15.1025 14.6027 18.8334 10.0003 18.8334C5.39795 18.8334 1.66699 15.1025 1.66699 10.5001C1.66699 5.89771 5.39795 2.16675 10.0003 2.16675C14.6027 2.16675 18.3337 5.89771 18.3337 10.5001ZM13.3337 10.5001C13.3337 12.341 11.8413 13.8334 10.0003 13.8334C8.15938 13.8334 6.66699 12.341 6.66699 10.5001C6.66699 8.65913 8.15938 7.16675 10.0003 7.16675C11.8413 7.16675 13.3337 8.65913 13.3337 10.5001Z" stroke="#198BFF" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
            </g>
          </svg>
          ,
          link: "/support",
          supportedLinks: ["/support", "/support/create", "/support/:id"],
        },
      ] :
      [
        {
          id: 1,
          title: "صفحه اصلی",
          icon: <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g id="home">
              <path id="Icon" d="M7.5 18.3334V10.0001H12.5V18.3334M2.5 7.50008L10 1.66675L17.5 7.50008V16.6667C17.5 17.1088 17.3244 17.5327 17.0118 17.8453C16.6993 18.1578 16.2754 18.3334 15.8333 18.3334H4.16667C3.72464 18.3334 3.30072 18.1578 2.98816 17.8453C2.67559 17.5327 2.5 17.1088 2.5 16.6667V7.50008Z" stroke="#007EFF" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
            </g>
          </svg>,
          link: "/",
          supportedLinks: [
            "/",
            "/cameras",
            "/devices",
            "/notifications",
            "/companies",
            "/company/create",
            "/plan/management",
            "/banner/create",
          ],
        },

        {
          id: 2,
          title: "مدیریت مالی",
          icon: <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g id="credit-card" clip-path="url(#clip0_509_1282)">
              <path id="Icon" d="M0.833008 8.33325H19.1663M2.49967 3.33325H17.4997C18.4201 3.33325 19.1663 4.07944 19.1663 4.99992V14.9999C19.1663 15.9204 18.4201 16.6666 17.4997 16.6666H2.49967C1.5792 16.6666 0.833008 15.9204 0.833008 14.9999V4.99992C0.833008 4.07944 1.5792 3.33325 2.49967 3.33325Z" stroke="#198BFF" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
            </g>
            <defs>
              <clipPath id="clip0_509_1282">
                <rect width="20" height="20" fill="white" />
              </clipPath>
            </defs>
          </svg>
          ,
          link: "/financial-management",
          supportedLinks: [
            "/financial-management",
            "/financial-management/detail-service",
            "/financial-management/reneval-service",
          ],
        },

        {
          id: 3,
          title: "پشتیبانی",
          icon: <svg width="20" height="21" viewBox="0 0 20 21" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g id="life-buoy">
              <path id="Icon" d="M4.10866 4.60841L7.64199 8.14175M12.3587 12.8584L15.892 16.3917M15.892 4.60841L12.3587 8.14175L15.3003 5.20008M4.10866 16.3917L7.64199 12.8584M18.3337 10.5001C18.3337 15.1025 14.6027 18.8334 10.0003 18.8334C5.39795 18.8334 1.66699 15.1025 1.66699 10.5001C1.66699 5.89771 5.39795 2.16675 10.0003 2.16675C14.6027 2.16675 18.3337 5.89771 18.3337 10.5001ZM13.3337 10.5001C13.3337 12.341 11.8413 13.8334 10.0003 13.8334C8.15938 13.8334 6.66699 12.341 6.66699 10.5001C6.66699 8.65913 8.15938 7.16675 10.0003 7.16675C11.8413 7.16675 13.3337 8.65913 13.3337 10.5001Z" stroke="#198BFF" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
            </g>
          </svg>
          ,
          link: "/support",
          supportedLinks: ["/support", "/support/create", "/support/:id"],
        },

        {
          id: 4,
          title: "نقشه",
          icon: <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
            <g clip-path="url(#clip0_948_1435)">
              <path d="M7.50033 15L1.66699 18.3333V4.99999L7.50033 1.66666M7.50033 15L13.3337 18.3333M7.50033 15V1.66666M13.3337 18.3333L18.3337 15V1.66666L13.3337 4.99999M13.3337 18.3333V4.99999M13.3337 4.99999L7.50033 1.66666" stroke={location.pathname === "/plans" ? 'white' : "#198BFF"} stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
            </g>
            <defs>
              <clipPath id="clip0_948_1435">
                <rect width="20" height="20" fill='white' />
              </clipPath>
            </defs>
          </svg>,
          link: "/plans",
          supportedLinks: ["/plans"],
        },
      ];

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
    <div className={s.container}>
      <div className={s.itemBox} style={user?.role === 3 ? { justifyContent: "center" } : {}}>
        {SidebarList?.map(
          (item: {
            id: number;
            title: string;
            link: string;
            icon: any;
            supportedLinks: any[];
          }) => (
            <a href={item?.link} className={`${s.sidebarLink}  ${activeClassName(item?.supportedLinks)}`}>
              <div className={s.iconBox}>
                {item?.icon}
              </div>
              <div className={s.title}>{item.title}</div>
            </a>
          )
        )}
      </div>
    </div>
  );
};

export default MobileSideBarView;
