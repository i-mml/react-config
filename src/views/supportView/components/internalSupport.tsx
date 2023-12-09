import React from "react";
import s from "../support.module.scss";

const InternalSupport = () => {
  const tableList = [
    {
      id: 1,
      title: "شماره تیکت",
      value: "",
      icon: "",
      subValue: "",
    },
    {
      id: 2,
      title: "تاریخ ایجاد",
      value: "",
      icon: "",
      subValue: "",
    },
    {
      id: 3,
      title: "درجه اهمیت",
      value: "",
      icon: "",
      subValue: "",
    },
    {
      id: 4,
      title: "وضعیت",
      value: "",
      icon: "",
      subValue: "",
    },
    {
      id: 5,
      title: "آخرین آپدیت",
      value: "",
      icon: "",
      subValue: "",
    },
  ];
  return (
    <div className={s.internalContainer}>
      {tableList.map((item) => {
        return (
          <table key={item.id}>
            <tr>
              <td>{item?.title}</td>
              <td>{item?.value}</td>
              <td>{item?.subValue}</td>
            </tr>
          </table>
        );
      })}
    </div>
  );
};

export default InternalSupport;
