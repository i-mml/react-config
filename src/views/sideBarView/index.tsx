// import React, { useState } from "react";
import s from "./sideBar.module.scss";
import { SidebarList } from "./sidebar.data";

const SideBarView = () => {
  // const [current, setcurrent] = useState<string>("");
  // const router = useRouter();

  return (
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
            <a href={item?.link} className={s.sidebarLink}>
              <div
                // onClick={() => setcurrent(item.title)}
                // className={`${s.sidebarItem} ${
                //   router.path === item.link && s.active
                // }`}
                className={s.sidebarItem}
              >
                <div className={s.iconBox}>
                  <img src={item?.icon} alt="sideBar icon" className={s.icon} />
                </div>
                {/* <div className={s.icon}>{item?.icon}</div> */}
                <div className={s.title}>{item.title}</div>
              </div>
            </a>
          )
        )}
      </div>
      <div className={s.profileBox}>
        <img src="/Images/Avatar.png" alt="profile" className={s.profileImg} />
        <div className={s.infoProfileBox}>
          <div className={s.profileName}>سارا احمدی</div>
          <div className={s.profileEmail}>sara@gmail.com</div>
        </div>

        <img
          src="/Images/Icons/log-out.svg"
          alt="log out"
          className={s.logOut}
        />
      </div>
    </div>
  );
};

export default SideBarView;
