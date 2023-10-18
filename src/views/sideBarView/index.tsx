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
            <div
              // onClick={() => setcurrent(item.title)}
              // className={`${s.sidebarItem} ${
              //   router.path === item.link && s.active
              // }`}
              className={s.active}
            >
              <div className={s.iconBox}>
                <img src={item?.icon} alt="sideBar icon" className={s.icon} />
              </div>
              {/* <div className={s.icon}>{item?.icon}</div> */}
              <div className={s.title}>{item.title}</div>
            </div>
          )
        )}
      </div>
    </div>
  );
};

export default SideBarView;
