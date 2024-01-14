import React from "react";
import s from "../financialManagment.module.scss";
import FinancialManagementHeader from "./FinancialManagementHeader";
import { useMutation } from "react-query";
import { postPaymentRequest } from "../../../api/services/payment";
import { useSelector } from "react-redux";

const RenevalServis = () => {
  const authData = useSelector((state: any) => state?.auth?.data)

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

  const handleCallGateway = (response: any) => {
    let a = document.createElement("a");
    a.href = response?.payment_url;
    a.rel = "noopener"
    a.click()
  }

  const postPaymentRequestMutation = useMutation((e: any) => postPaymentRequest(e).then((res) => handleCallGateway(res?.data)).catch(err => err));

  const handlePayment = async () => {
    const params = {
      "user_id": authData?.admin?.user_id,
      "price": 100000,
      "authority": "",
      "refid": "",
      "status": "paymentURL",
      "gateway": "monitoring",
      "company_id": authData?.admin?.company_Id,
      "product_id": 1,
      "description": "test"
    }

    postPaymentRequestMutation.mutate(params)
  }

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
        <button className={s.payBtn} onClick={handlePayment} disabled={postPaymentRequestMutation.isLoading}>
          {
            postPaymentRequestMutation?.isLoading ? "درحال انجام" : "پرداخت"
          }
        </button>
      </div>
    </div>
  );
};

export default RenevalServis;
