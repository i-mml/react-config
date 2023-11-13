import React, { useState } from "react";
import s from "../financialManagment.module.scss";
import Modal from "../../../components/Modal";

const DetailServis = () => {
  const [openModal, setOpenModal] = useState(false);

  const informationList = [
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
      value: " تهران،امیرآباد شمالی ، کوچه 20 ام.",
      edit: "Images/Icons/edit.svg",
    },
    {
      id: 4,
      title: "پایان تاریخ:",
      icon: "/Images/Icons/calendar.svg",
      value: " 02 مهر 1402 (24 اکتبر 2023)",
    },
  ];

  return (
    <div className={s.detailContainer}>
      <div className={s.header}>
        <div className={s.title}>جزئیات سرویس شما</div>
        <div className={s.date}>تاریخ امروز: 25 شهریور 1402(02 اکتبر 2023)</div>
      </div>
      <div className={s.informationContainer}>
        {informationList?.map((item) => (
          <div className={s.informationBox} key={item?.id}>
            <img alt="info-icon" src={item?.icon} className={s.infoIcon} />
            <div className={s.infoITitle}>{item?.title}</div>
            <div className={s.infoValue}>{item?.value}</div>
            {item?.edit ? (
              <>
                <img
                  alt="info-icon"
                  src={item?.edit}
                  className={s.editIcon}
                  onClick={() => {
                    setOpenModal(true);
                  }}
                />
              </>
            ) : null}
          </div>
        ))}
      </div>
      {openModal && <Modal closeModal={setOpenModal} />}
    </div>
  );
};

export default DetailServis;
