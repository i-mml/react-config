import React from "react";
import s from "../financialManagment.module.scss";
import FinancialManagementHeader from "./FinancialManagementHeader";

const RenevalServis = () => {
  const informationList = [
    {
      id: 1,
      title: "اشتراک سرویس مانیتورینگ شبکه",
      value: "۱۰۶ میلیون تومان",
    },
    {
      id: 2,
      title: "دوره اشتراک",
      value: "۱۲ ماهه",
    },
    {
      id: 6,
      title: "انواع پرداخت ها",
      value: "",
    },
    {
      id: 3,
      title: "پرداخت ۱ مرحله ای (۲۷.۸ درصد تخفیف)",
      value: "۷۸ میلیون تومان (ماهانه ۶.۵ میلیون تومان)",
    },
    {
      id: 4,
      title: "پرداخت ۲ مرحله ای (۱۱.۲ درصد تخفیف)",
      value: "۹۶ میلیون تومان (ماهانه ۸ میلیون تومان)",
    },
    {
      id: 5,
      title: "پرداخت ۴ مرحله ای",
      value: "۱۰۶ میلیون تومان (ماهانه ۹ میلیون تومان)",
    },
  ];

  return (
    <div className={s.renevalContainer}>
      <FinancialManagementHeader title="تمدید سرویس شما" />

      <div className={s.informationContainer}>
        {informationList?.map((item) =>
          item.id === 6 ?
            (
              <div className={s.renevalSectionTitle}>{item?.title}</div>
            )
            : (
              <div className={s.informationBox} key={item?.id}>
                <div className={s.renevalInfoTitle}>{item?.title}</div>
                <div className={s.divider}><div className={s.dashed}></div></div>
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
