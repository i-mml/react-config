import React from 'react'
import s from './style.module.scss';
import TitleBox from '../dashboardView/components/titleBox';
import DeviceTableItem from './devicesTableItem';
import { useQuery } from 'react-query';
import { getDeviceAll } from '../../api/services/devices';
import InputSearch from '../../components/searchInput';

const DevicesView = () => {
    const { data } = useQuery("get-all-device", getDeviceAll)

    const devicesTableData = [
        {
            id: 1,
            name: "پرینتر",
            nameEng: "printer",
            status: "ONLINE",
            sensorLink: "https://google.com/"
        },
        {
            id: 2,
            name: "پرینتر",
            nameEng: "printer",
            status: "ONLINE",
            sensorLink: "https://google.com/"
        },
        {
            id: 3,
            name: "پرینتر",
            nameEng: "printer",
            status: "OFFLINE",
            sensorLink: "https://google.com/"
        }
    ]
    return (
        <div className={s.container}>
            <div className={s.titleWrappwer}>
                <TitleBox icon='/images/icons/printer.svg' title='دستگاه‌های متصل' />
                <InputSearch hideMobile placeholder='جستجو دستگاه' />
            </div>
            <table className={s.tableWrapper}>
                <thead>
                    <tr>
                        <th>نام دستگاه</th>
                        <th>وضعیت</th>
                        <th>سنسور</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        data?.sensorxref?.map((item: any) =>
                            <DeviceTableItem {...item} />
                        )
                    }
                </tbody>
            </table>
        </div>
    )
}

export default DevicesView