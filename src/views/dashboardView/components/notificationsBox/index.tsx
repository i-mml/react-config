import React from 'react'
import s from './style.module.scss';
import TitleBox from '../titleBox';
import NotifListItem from '../notificationItem';

const NotificationsBox = () => {
    const notifs = [
        { id: 1, title: "دوربین شماره 1", subTitle: "دوربین شماره یک", date: "02 مهر 1402", status: 0, description: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه د استفاده قرار گیرد." },
        { id: 2, title: "دوربین شماره 1", subTitle: "دوربین شماره یک", date: "02 مهر 1402", status: 0, description: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه د استفاده قرار گیرد." },
        { id: 3, title: "دوربین شماره 1", subTitle: "دوربین شماره یک", date: "02 مهر 1402", status: 1, description: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه د استفاده قرار گیرد." },
        { id: 4, title: "دوربین شماره 1", subTitle: "دوربین شماره یک", date: "02 مهر 1402", status: 0, description: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه د استفاده قرار گیرد." },
        { id: 5, title: "دوربین شماره 1", subTitle: "دوربین شماره یک", date: "02 مهر 1402", status: 1, description: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه د استفاده قرار گیرد." },
        { id: 6, title: "دوربین شماره 1", subTitle: "دوربین شماره یک", date: "02 مهر 1402", status: 0, description: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه د استفاده قرار گیرد." },
        { id: 7, title: "دوربین شماره 1", subTitle: "دوربین شماره یک", date: "02 مهر 1402", status: 0, description: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه د استفاده قرار گیرد." },
    ]
    return (
        <div className={s.container}>
            <div className={s.top}>
                <TitleBox icon='/images/icons/bell.svg' title='اعلانات' />
                <div className={s.readAll}>خواندن همه</div>
            </div>
            {notifs?.slice(0, 8)?.map((item, index) => <NotifListItem {...item} defaultShow={index === 0} />)}
        </div>
    )
}

export default NotificationsBox