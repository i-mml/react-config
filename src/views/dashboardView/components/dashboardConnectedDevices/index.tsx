import React from 'react'
import s from './style.module.scss';
import TitleBox from '../titleBox';
import DeviceListItem from '../devicesListItem';
import SecondaryButton from '../../../../components/buttons/secondaryButton';
import { useNavigate } from 'react-router-dom';

const DashboardConnectedDevices = ({ devices }: any) => {
    const navigate = useNavigate()
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
            <TitleBox title='دستگاه‌های متصل' icon='/images/icons/devices-list-icon.svg' />
            {
                devices?.devices?.length > 0 && devices?.devices?.slice(0, 4)?.map((item: any, index: number) => <DeviceListItem key={item.objid} name={item.name} isLast={index === 3} status={item.status} icon={item?.icon} group={item?.group} />)
            }
            <SecondaryButton className={s.showAll} onClick={() => navigate("/devices")}>
                مشاهده همه دستگاه ها
            </SecondaryButton>
        </div>
    )
}

export default DashboardConnectedDevices