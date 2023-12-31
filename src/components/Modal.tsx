import React from "react";
import s from "./modal.module.scss";

const Modal = ({ closeModal }: any) => {
  return (
    <div className={s.container}>
      <div className={s.modalContent}>
        <div className={s.header}>
          <div className={s.title}>ویرایش آدرس</div>
          <img
            src="/images/icons/x-circle.svg"
            alt="cross-icon"
            style={{ backgroundColor: "white" }}
            onClick={() => closeModal(false)}
          />
        </div>
        <textarea
          placeholder="تهران،امیرآباد شمالی ، کوچه 20 ام."
          className={s.inputBox}
        ></textarea>
        <button className={s.btn}>ثبت تغییرات</button>
      </div>
    </div>
  );
};

export default Modal;
