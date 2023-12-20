import React from 'react'
import s from './style.module.scss';
import TitleBox from '../dashboardView/components/titleBox';
import DeviceTableItem from './devicesTableItem';

const DevicesView = () => {
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
                <input />
            </div>
            <table className={s.tableWrapper}>
                <thead>
                    <tr>
                        <th>وضعیت</th>
                        <th>نام دستگاه</th>
                        <th>سنسور</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        devicesTableData?.map(item =>
                            <DeviceTableItem {...item} />
                        )
                    }
                </tbody>
            </table>
        </div>
    )
}

export default DevicesView