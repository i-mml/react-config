import React, { useState } from "react";
import s from "./support.module.scss";
import { useNavigate } from "react-router-dom";
import moment from "moment-jalaali";
import InputSearch from "../../components/searchInput";
import { useQuery } from "react-query";
import { getTicketAll } from "../../api/services/ticket";
import { Spinner } from "reactstrap";


moment.loadPersian();



const SupportView = () => {
  const [currentTab, setCurrentTab] = useState("external_support");
  const { data: tickets, isLoading } = useQuery(["tickets-list", currentTab], () => getTicketAll(currentTab === "external_support" ? false : true));
  const [value, setValue] = useState('')
  const navigate = useNavigate()
  const tabsList = [
    { id: 1, faTitle: "پشتیبانی خارجی", title: "external_support" },
    { id: 3, faTitle: "پشتیبانی داخلی", title: "internal_support" },
  ];

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

  return (
    <div className={s.supportWrapper}>
      <div className={s.mobileSearchBox}>
        <input type="search" placeholder="جستجو تیکت" className={s.SearchBox} />
      </div>
      <div className={s.container}>
        <div className={s.header}>
          <div className={s.right}>
            <div className={s.title}>تیکت ها</div>
            <InputSearch value={value} setValue={setValue} />

          </div>
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

        {
          isLoading ? <div className={s.spinnerBox}><Spinner color="primary" className={s.spinner} /></div> :

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
                  tickets?.data?.map((item: any) =>
                    <tr key={item.id} onClick={() => navigate(`/support/${item?.ID}`)}>
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
                        {
                          moment(item?.CreatedAt).format("jYYYY/jMM/jDD")
                        }
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
                        {item?.status ?? "-"}
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
                            {
                              moment(item?.UpdatedAt).format("jYYYY/jMM/jDD")
                            }
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
        }

      </div>
    </div>

  );
};

export default SupportView;
