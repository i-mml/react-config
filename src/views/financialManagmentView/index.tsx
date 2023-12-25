import React from "react";
import s from "./financialManagment.module.scss";

const RemainDate = ({ remainDay }: { remainDay: number }) => {
  const packageSize = 40

  return (
    <div className={s.remainBox} style={{
      background: `radial-gradient(closest-side, white 80%, transparent 80% 100%),conic-gradient(#003F80 ${(remainDay / packageSize) * 100}%, #e7e7e7 0)`
    }}>
      <div className={s.remainDayContent}>
        <div className={s.remainDayCount}>{remainDay}</div>
        <div className={s.remainDayText}>روز مانده</div>
      </div>
    </div>
  )
}

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
  const remainDay = 5;

  return (
    <div className={s.container}>
      <div className={s.header}>
        <div className={s.title}>وضعیت سرویس شما</div>
        <div className={s.date}>تاریخ امروز: 25 شهریور 1402(02 اکتبر 2023)</div>
      </div>
      {remainDay > 0 ? (
        <div className={s.statusBox}>
          <RemainDate remainDay={remainDay} />

          <div className={s.reaminSubTitle}>
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
      ) : (
        <div className={s.statusBox}>
          <RemainDate remainDay={remainDay} />
          <div className={s.renevalSubTitle}>
            برای تمدید اشتراک خود بر روی{" "}
            <span className={s.renevalSubTitleServis}>تمدید سرویس</span> کلیک
            کنید.
          </div>
          <div className={s.btnBox}>
            <button type="submit" className={s.detailBtn}>
              جزئیات سرویس
            </button>

            <button type="submit" className={s.renevalBtn}>
              تمدید سرویس
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default FinancialManagmentView;
