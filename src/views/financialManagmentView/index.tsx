import React from "react";
import s from "./financialManagment.module.scss";
import RemainDate from "./components/RemainDate";
import { getSubscription } from "../../api/services/subscription";
import { useQuery } from "react-query";
import FinancialManagementHeader from "./components/FinancialManagementHeader";
import { Link } from "react-router-dom";
import LoadingPage from "../../components/loadingPage";


const FinancialManagmentView = () => {
  const { data, isLoading } = useQuery("subscription-data", getSubscription);
  const servisList = [
    {
      id: 1,
      title: "شناسه سرویس:",
      icon: "/images/icons/key.svg",
      value: "1234567",
    },
    {
      id: 2,
      title: "نصب حضوری سرویس",
      icon: "/images/icons/location.svg",
      value: "",
    },
    {
      id: 3,
      title: "آدرس:",
      icon: "/images/icons/marker-pin.svg",
      value: "1234567",
    },
  ];

  console.log(data?.data)

  if (isLoading) {
    return <LoadingPage />
  }
  return (
    <div className={s.container}>
      <FinancialManagementHeader title="وضعیت سرویس شما" />

      {!(data?.data?.remain > 0) ? (
        <div className={s.statusBox}>
          <RemainDate remainDay={data?.data?.remain} wholePeriod={data?.data?.hole} />

          <div className={s.reaminSubTitle}>
            <div>
              اشتراک سرویس شما به پایان رسیده است.
            </div>
            <div>
              لطفا جهت تمدید اشتراک خود از طریق لینک زیر اقدام کنید.
            </div>
          </div>



          <div className={s.btnBox}>
            <Link to="/financial-management/reneval-service">
              <button className={s.renevalBtn}>
                تمدید سرویس
              </button>
            </Link>

          </div>
        </div>
      ) : (
        <div className={s.statusBox}>
          <RemainDate remainDay={data?.data?.remain} wholePeriod={data?.data?.hole} />

          <div className={s.renevalSubTitle}>
            برای تمدید اشتراک خود بر روی{" "}
            <span className={s.renevalSubTitleServis}>تمدید سرویس</span> کلیک
            کنید.
          </div>
          <div className={s.btnBox}>

            <Link to="/financial-management/reneval-service">
              <button className={s.renevalBtn}>
                تمدید سرویس
              </button>
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default FinancialManagmentView;
