import React from "react";
import s from "../financialManagment.module.scss";
import moment from 'moment-jalaali';
import { useSelector } from "react-redux";
import FinancialManagementHeader from "./FinancialManagementHeader";
import { useMutation, useQuery } from "react-query";
import { postPaymentRequest } from "../../../api/services/payment";
import { getSubscription } from "../../../api/services/subscription";

const RenevalServis = () => {
  const authData = useSelector((state: any) => state?.auth?.data)
  const { data } = useQuery("subscription-data", getSubscription);
  console.log(data)

  const informationList = [
    {
      id: 1,
      title: "اشتراک سرویس مانیتورینگ شبکه",
      value: data?.data?.price + " تومان" ?? "-",
    },
    {
      id: 2,
      title: "دوره اشتراک",
      value: "۱۲ ماهه",
    },
    {
      id: 3,
      title: "تاریخ پایان اشتراک",
      value: data?.data?.expire_at ? moment(data?.data?.expire_at).format('jYYYY/jMM/jDD') : "-",
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
          <div className={s.informationBox} key={item?.id}>
            <div className={s.renevalInfoTitle}>{item?.title}</div>
            <div className={s.divider}><div className={s.dashed}></div></div>
            <div className={s.renevalInfoValue}>{item?.value}</div>
          </div>
        )}
        <button className={s.payBtn} onClick={handlePayment} disabled={postPaymentRequestMutation.isLoading}>
          {
            postPaymentRequestMutation?.isLoading ? <img src='/images/icons/loadingLines.svg' /> : "پرداخت"
          }
        </button>
      </div>
    </div>
  );
};

export default RenevalServis;
