import React from "react";
import s from "./financialManagment.module.scss";

const FinancialManagmentView = () => {
  const servisList = [
    {
      id: 1,
      title: "شناسه سرویس:",
      icon: "/Images/Icons/key.svg",
      value: "1234567",
    },
    {
      id: 2,
      title: "نصب حضوری سرویس",
      icon: "/Images/Icons/location.svg",
      value: "",
    },
    {
      id: 3,
      title: "آدرس:",
      icon: "/Images/Icons/marker-pin.svg",
      value: "1234567",
    },
  ];

  return (
    <div className={s.container}>
      <div className={s.header}>
        <div className={s.title}>وضعیت سرویس شما</div>
        <div className={s.date}>تاریخ امروز: 25 شهریور 1402(02 اکتبر 2023)</div>
      </div>

      <div className={s.statusBox}>
        <img alt="remian-days" src="/images/Ring.svg" className={s.ringImg} />
        <div className={s.remainDayContent}>
          <div className={s.remainDayCount}>4</div>
          <div className={s.remainDayText}>روز مانده</div>
        </div>

        <div className={s.subTitle}>
          لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ
        </div>

        {servisList?.map((item) => (
          <div className={s.infoBox} key={item?.id}>
            <img alt="info-icon" src={item?.icon} className={s.infoIcon} />
            <div className={s.infoITitle}>{item?.title}</div>
            <div className={s.infoValue}>{item?.value}</div>
          </div>
        ))}

        <div className={s.btnBox}>
          <button type="submit" className={s.detailBtn}>
            جزئیات سرویس
          </button>
          <button type="submit" className={s.renevalBtn}>
            تمدید سرویس
          </button>
        </div>
      </div>
    </div>
  );
};

export default FinancialManagmentView;
