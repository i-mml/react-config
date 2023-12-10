import React, { useState } from "react";
import s from "./support.module.scss";

const SupportView = () => {
  const [currentTab, setCurrentTab] = useState("external-support");

  const tabsList = [
    { id: 1, faTitle: "پشتیبانی خارجی", title: "external_support" },
    { id: 3, faTitle: "پشتیبانی داخلی", title: "internal_support" },
  ];

  const tableList = [
    {
      id: 1,
      title: "شماره تیکت",
      value: "",
      icon: "",
      subValue: "",
    },
    {
      id: 2,
      title: "تاریخ ایجاد",
      value: "",
      icon: "",
      subValue: "",
    },
    {
      id: 3,
      title: "درجه اهمیت",
      value: "",
      icon: "",
      subValue: "",
    },
    {
      id: 4,
      title: "وضعیت",
      value: "",
      icon: "",
      subValue: "",
    },
    {
      id: 5,
      title: "آخرین آپدیت",
      value: "",
      icon: "",
      subValue: "",
    },
  ];


  return (
    <div className={s.container}>
      <div className={s.header}>
        <div className={s.title}>تیکت ها</div>
        <input type="search" placeholder="جستجو تیکت" className={s.SearchBox} />
        <button className={s.sentTiketBtn}>ارسال تیکت</button>
      </div>
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
        <div className={s.content}>
          <div className={s.internalContainer}>
            {tableList.map((item) => {
              return (
                <table key={item.id}>
                  <tr>
                    <td>{item?.title}</td>
                    <td>{item?.value}</td>
                    <td>{item?.subValue}</td>
                  </tr>
                </table>
              );
            })}
          </div>
        </div>

      </div>
    </div>
  );
};

export default SupportView;
