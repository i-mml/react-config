import React, { useState } from "react";
import s from "./support.module.scss";
import { useNavigate } from "react-router-dom";

interface ISupportViewProps {
  loading: boolean,
  data: any[]
}

const SupportView = (props: ISupportViewProps) => {
  console.log(props?.data)
  const [currentTab, setCurrentTab] = useState("external-support");
  const navigate = useNavigate()

  const tabsList = [
    { id: 1, faTitle: "پشتیبانی خارجی", title: "external_support" },
    { id: 3, faTitle: "پشتیبانی داخلی", title: "internal_support" },
  ];

  // const tableData = [
  //   {
  //     id: 1,
  //     title: "مشکل در سفارش",
  //     ticket_id: "65232",
  //     created_at: "1403/09/03",
  //     label: "high",
  //     status: "pending",
  //     updated_at: "1403/0903",
  //     updated_at_user: "علی احمدی",
  //   },
  //   {
  //     id: 2,
  //     title: "مشکل در سفارش",
  //     ticket_id: "65232",
  //     created_at: "1403/09/03",
  //     label: "high",
  //     status: "pending",
  //     updated_at: "1403/0903",
  //     updated_at_user: "علی احمدی",
  //   },
  //   {
  //     id: 3,
  //     title: "مشکل در سفارش",
  //     ticket_id: "65232",
  //     created_at: "1403/09/03",
  //     label: "medium",
  //     status: "pending",
  //     updated_at: "1403/0903",
  //     updated_at_user: "علی احمدی",
  //   },
  //   {
  //     id: 4,
  //     title: "مشکل در سفارش",
  //     ticket_id: "65232",
  //     created_at: "1403/09/03",
  //     label: "low",
  //     status: "pending",
  //     updated_at: "1403/0903",
  //     updated_at_user: "علی احمدی",
  //   },
  // ];

  const labelGenerator: any = {
    "فوری": {
      class: s.high,
      title: "فوری"
    },
    "متوسط": {
      class: s.medium,
      title: "متوسط"
    },
    "کم": {
      class: s.low,
      title: "کم"
    }
  }

  const statusGenerator: any = {
    pending: "در حال بررسی"
  }


  return (
    <div className={s.supportWrapper}>
      <div className={s.mobileSearchBox}>
        <input type="search" placeholder="جستجو تیکت" className={s.SearchBox} />
      </div>
      <div className={s.container}>
        <div className={s.header}>
          <div className={s.title}>تیکت ها</div>
          <input type="search" placeholder="جستجو تیکت" className={s.SearchBox} />
          <button className={s.sentTiketBtn} onClick={() => navigate("/support/create")}>ارسال تیکت</button>
        </div>
        <div className={s.tabContainer}>
          <div className={s.TabsBox}>
            {tabsList?.map(({ faTitle, id, title }) => (
              <div
                className={`${s.profileTab} ${currentTab === title && s.profileActiveTab
                  }`}
                onClick={() => setCurrentTab(title)}
                key={id}
              >
                {faTitle}
              </div>
            ))}
          </div>
        </div>

        <table className={s.tableWrapper}>
          <thead>
            <tr>
              <th className={s.mobileShow}>شماره تیکت</th>
              <th>تاریخ ایجاد</th>
              <th>درجه اهمیت</th>
              <th className={s.mobileShow}>وضعیت</th>
              <th>آخرین آپدیت</th>
            </tr>
          </thead>
          <tbody className={s.tableBody}>
            {
              props.data?.map(item =>
                <tr key={item.id} onClick={() => navigate(`/support/${item?.id}`)}>
                  <td className={s.mobileShow}>
                    <div className={s.ticketId}>
                      <img src="/images/ticket_tag.png" className={s.ticketIcon} />
                      <div>
                        <div className={s.ticketIdNumber}>#{item?.ID}</div>
                        <div className={s.ticketTitle}>
                          {item?.title}
                        </div>
                      </div>
                    </div>
                  </td>
                  <td>
                    {item?.CreatedAt}
                  </td>
                  <td>
                    {item?.label === "" ? "-" :
                      <div className={`${s.label} ${labelGenerator[item?.label]?.class}`}>
                        <span className={s.circle}></span>
                        <span className={s.labelValue}>
                          {labelGenerator[item?.label]?.title}
                        </span>
                      </div>}
                  </td>
                  <td className={s.mobileShow}>
                    {statusGenerator[item?.status] ?? "-"}
                    <div className={`${s.onlyMobile} ${s.label} ${labelGenerator[item?.label]?.class} `}>
                      <span className={s.circle}></span>
                      <span className={s.labelValue}>
                        {labelGenerator[item?.label]?.title}
                      </span>
                    </div>
                  </td>
                  <td>
                    <div className={s.updatedAt}>
                      <div className={s.date}>
                        {item?.UpdatedAt}
                      </div>
                      <div className={s.updatedUser}>
                        {item?.updated_at_user}
                      </div>
                    </div>
                  </td>
                </tr>
              )
            }
          </tbody>
        </table>


      </div>
    </div>

  );
};

export default SupportView;
