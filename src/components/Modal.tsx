import React from "react";
import s from "./modal.module.scss";

const Modal = () => {
  return (
    <div className={s.container}>
      <div className={s.modalContent}>
        <div className={s.header}>
          <div className={s.title}>ویرایش آدرس</div>
          <img
            src="/Images/Icons/x-circle.svg"
            alt="cross-icon"
            style={{ backgroundColor: "white" }}
          />
        </div>
        <input
          type="text"
          placeholder="تهران،امیرآباد شمالی ، کوچه 20 ام."
          className={s.inputBox}
        />
        <button className={s.btn}>ثبت تغییرات</button>
      </div>
    </div>
  );
};

export default Modal;
