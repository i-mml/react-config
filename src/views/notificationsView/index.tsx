import React from 'react'
import TitleBox from '../dashboardView/components/titleBox'
import s from './style.module.scss';
import NotificationItem from './components/notficationsItem';
import { useQuery } from 'react-query';
import { getNotifications } from '../../api/services/notifications';

const NotificationsView = () => {
    const { data } = useQuery("get-notifications", getNotifications)
    const notifs = [
        {
            id: 1,
            title: "دوربین شماره 2",
            cameraName: "دوربین شماره یک",
            date: "25 شهریور 1402",
            description: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه د استفاده قرار گیرد.چاپگرها و متون بلکه روزنامه د استفاده قرار گیرد."
        },
        {
            id: 2,
            title: "دوربین شماره 2",
            cameraName: "دوربین شماره یک",
            date: "25 شهریور 1402",
            description: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه د استفاده قرار گیرد.چاپگرها و متون بلکه روزنامه د استفاده قرار گیرد."
        },
        {
            id: 3,
            title: "دوربین شماره 2",
            cameraName: "دوربین شماره یک",
            date: "25 شهریور 1402",
            description: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه د استفاده قرار گیرد.چاپگرها و متون بلکه روزنامه د استفاده قرار گیرد."
        }
    ]

    return (
        <div className={s.container}>
            <div className={s.titleWrappwer}>
                <TitleBox icon='/images/icons/printer.svg' title='دستگاه‌های متصل' />
                <input />
            </div>
            {
                data?.sensors?.map((item: any) => <NotificationItem {...item} key={item.id} />)
            }
        </div >
    )
}

export default NotificationsView