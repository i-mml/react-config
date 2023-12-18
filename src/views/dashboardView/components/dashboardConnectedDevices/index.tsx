import React from 'react'
import s from './style.module.scss';
import TitleBox from '../titleBox';
import DeviceListItem from '../devicesListItem';
import SecondaryButton from '../../../../components/buttons/secondaryButton';

const DashboardConnectedDevices = () => {
    const devicesLise = [
        {
            id: 1,
            name: "کیبورد",
            status: "online"
        },
        {
            id: 2,
            name: "پرینتر",
            status: "offline"
        },
        {
            id: 3,
            name: "کامپیوتر",
            status: "online"
        },
        {
            id: 4,
            name: "موس",
            status: "online"
        },
    ]
    return (
        <div className={s.container}>
            <TitleBox title='دستگاه‌های متصل' icon='/images/icons/printer.svg' />
            {
                devicesLise?.slice(0, 4)?.map((item, index) => <DeviceListItem key={item.id} name={item.name} isLast={index === 3} status={item.status} />)
            }
            <SecondaryButton className={s.showAll} onClick={() => alert("hs")}>
                مشاهده همه دستگاه ها
            </SecondaryButton>
        </div>
    )
}

export default DashboardConnectedDevices