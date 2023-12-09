import React, { useState } from "react";
import s from "./support.module.scss";
import InternalSupport from "./components/internalSupport";
import ExternalSupport from "./components/externalSupport";

const SupportView = () => {
  const [currentTab, setCurrentTab] = useState("external-support");

  const tabsList = [
    { id: 1, faTitle: "پشتیبانی خارجی", title: "external_support" },
    { id: 3, faTitle: "پشتیبانی داخلی", title: "internal_support" },
  ];

  const contentGenerator = {
    external_support: <ExternalSupport />,
    internal_support: <InternalSupport />,
  };

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

export default SupportView;
