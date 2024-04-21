import React, { useState } from 'react'
import TitleBox from '../dashboardView/components/titleBox'
import s from './style.module.scss';
import NotificationItem from './components/notficationsItem';
import { useQuery } from 'react-query';
import { getNotifications } from '../../api/services/notifications';
import InputSearch from '../../components/searchInput';
import TablePagination from '../../components/pagination';

const NotificationsView = () => {
    const { data } = useQuery("get-notifications", getNotifications)
    const pageSize = 30;
    const [page, setPage] = useState(0)
    const [value, setValue] = useState("")

    return (
        <div className={s.container}>

            <div className={s.titleWrappwer}>
                <TitleBox icon='/images/icons/bell.svg' title='هشدار قطع اتصال' />
                <InputSearch styles={{ marginTop: "16px" }} value={value} setValue={setValue} />

            </div>

            {
                data?.sensors?.filter((item: any) => item?.sensor?.toUpperCase()?.includes(value.toUpperCase()))?.slice(page * pageSize, (page + 1) * pageSize)?.map((item: any) => <NotificationItem {...item} key={item.id} />)
            }
            <TablePagination dataLength={data?.sensors?.filter((item: any) => item?.device?.toUpperCase()?.includes(value.toUpperCase()))?.length || 0} page={page} pageSize={pageSize} setPage={setPage} />

        </div >
    )
}

export default NotificationsView