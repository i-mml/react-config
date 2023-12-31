import React, { useState } from "react";
import s from "../financialManagment.module.scss";
import Modal from "../../../components/Modal";
import FinancialManagementHeader from "./FinancialManagementHeader";

const DetailServis = () => {
  const [openModal, setOpenModal] = useState(false);

  const informationList = [
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
      value: " تهران،امیرآباد شمالی ، کوچه 20 ام.",
      edit: "/images/icons/edit.svg",
    },
    {
      id: 4,
      title: "پایان تاریخ:",
      icon: "/images/icons/calendar.svg",
      value: " 02 مهر 1402 (24 اکتبر 2023)",
    },
  ];

  return (
    <div className={s.detailContainer}>
      <FinancialManagementHeader title="جزئیات سرویس شما" />

      <div className={s.informationContainer}>
        {informationList?.map((item) => (
          <div className={s.informationBox} key={item?.id}>
            <img alt="info-icon" src={item?.icon} className={s.infoIcon} />
            <div className={s.infoITitle}>{item?.title}</div>
            <div className={s.infoValue}>{item?.value}</div>
            {item?.edit ? (
              <img
                alt="info-icon"
                src={item?.edit}
                className={s.editIcon}
                onClick={() => {
                  setOpenModal(true);
                }}
              />
            ) : null}
          </div>
        ))}
      </div>
      {openModal && <Modal closeModal={setOpenModal} />}
    </div>
  );
};

export default DetailServis;
