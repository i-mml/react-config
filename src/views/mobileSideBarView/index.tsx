import React from 'react';
import { SidebarList } from "../layout/components/sidebar/sidebar.data";
import s from "./mobileSideBar.module.scss";
import { useLocation, useNavigate } from 'react-router';


const MobileSideBarView = () => {
  let location = useLocation();
  const navigate = useNavigate()

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
            <a href={item?.link} className={`${s.sidebarLink}  ${location?.pathname === item?.link && s.active}`}>
              <div className={s.iconBox}>
                <img src={item?.icon} alt="sideBar icon" className={s.icon} />
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
