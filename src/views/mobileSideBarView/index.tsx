// import React, { useState } from "react";
import s from "./mobileSideBar.module.scss";
import { SidebarList } from "./mobileSideBar.data";

const MobileSideBarView = () => {
  // const [current, setcurrent] = useState<string>("");
  // const router = useRouter();

  return (
    <div className={s.container}>
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
                className={s.active}
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
    </div>
  );
};

export default MobileSideBarView;
