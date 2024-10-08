import React, { useState } from "react";
import s from "./support.module.scss";
import { useNavigate } from "react-router-dom";
import moment from "moment-jalaali";
import InputSearch from "../../components/searchInput";
import { useQuery } from "react-query";
import { getAcceptedTicket, getTicketAll, getTicketByStatus } from "../../api/services/ticket";
import { Spinner } from "reactstrap";
import TablePagination from "../../components/pagination";
import { useSelector } from "react-redux";
import LoadingPage from "../../components/loadingPage";


moment.loadPersian();



const SupportView = () => {
  const user = useSelector((state: any) => state?.auth?.data?.user);

  const tabsList = user?.role !== 0 ? [
    { id: 2, faTitle: "پشتیبانی داخلی", isInternal: true },
    { id: 1, faTitle: "پشتیبانی خارجی", isInternal: false },
  ] :
    [
      { id: 3, faTitle: "پشتیبانی داخلی", isInternal: true },
    ];

  const { data: tickets, isLoading } = useQuery("tickets-list", user?.role === 1 ? () => getTicketByStatus(`status=INPROCESS&user_id=${user?.user_id}`) : () => getTicketByStatus(`status=INPROCESS&user_id=${user?.user_id}`));
  const pageSize = 30;
  const [page, setPage] = useState(0)
  const [value, setValue] = useState("")
  const [internal, setInternal] = useState(tabsList[0]?.isInternal)
  const navigate = useNavigate()

  const ticketsData = internal ? tickets?.internal : tickets?.external

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
    DONE: "انجام شده",
    INPROCESS: "در حال بررسی"
  }

  if (isLoading) {
    return <LoadingPage />
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
          <button className={s.sentTiketBtn} onClick={() => navigate(`/support/create${internal ? "" : "?isInternal=false"}`)}>ارسال تیکت</button>
        </div>
        <div className={s.tabContainer}>
          <div className={s.TabsBox}>
            {tabsList?.map(({ faTitle, id, isInternal }) => (
              <div
                className={`${s.profileTab} ${isInternal === internal && s.profileActiveTab
                  }`}
                onClick={() => setInternal(isInternal)}
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
                  {
                    user?.role === 1 ?
                      <th>
                        نام شرکت
                      </th>
                      :
                      null
                  }
                  <th>
                    دستگاه
                  </th>
                  <th>تاریخ ایجاد</th>
                  <th>درجه اهمیت</th>
                  <th className={s.mobileShow}>وضعیت</th>
                  <th>آخرین آپدیت</th>
                </tr>
              </thead>

              <tbody className={s.tableBody}>
                {
                  ticketsData?.filter((item: any) => item?.title?.toString()?.toUpperCase()?.includes(value.toUpperCase()))?.slice(page * pageSize, (page + 1) * pageSize)?.map((item: any) =>
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
                      {
                        user?.role === 1 ?
                          <td>
                            {item?.company_name || '-'}
                          </td>
                          :
                          null
                      }
                      <td>
                        {item?.device_name || '-'}
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
                        {item?.status ? statusGenerator[item?.status] : "-"}
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
        <TablePagination dataLength={ticketsData?.filter((item: any) => item?.title?.toString()?.toUpperCase()?.includes(value.toUpperCase()))?.length || 0} page={page} pageSize={pageSize} setPage={setPage} />
      </div>
    </div>

  );
};

export default SupportView;
