import React from "react";
import s from "../financialManagment.module.scss";

const RenevalServis = () => {
  const informationList = [
    {
      id: 1,
      title: "اشتراک نصب دوربین",
      value: "32,300,002 ریال",
    },
    {
      id: 2,
      title: "دوره اشتراک",
      value: "3ماهه",
    },
    {
      id: 3,
      title: "9% مالیت و ارزش افزوده",
      value: "300,002 ریال",
    },
    {
      id: 4,
      title: "مبلغ قابل پرداخت",
      value: "32,300,502 ریال",
    },
  ];

  return (
    <div className={s.renevalContainer}>
      <div className={s.header}>
        <div className={s.title}>تمدید سرویس شما</div>
        <div className={s.date}>تاریخ امروز: 25 شهریور 1402(02 اکتبر 2023)</div>
      </div>
      <div className={s.informationContainer}>
        {informationList?.map((item) => (
          <div className={s.informationBox} key={item?.id}>
            <div className={s.renevalInfoTitle}>{item?.title}</div>
            {/* <div className={s.divider}></div> */}
            <div className={s.renevalInfoValue}>{item?.value}</div>
          </div>
        ))}
        <button type="submit" className={s.payBtn}>
          پرداخت
        </button>
      </div>
    </div>
  );
};

export default RenevalServis;
