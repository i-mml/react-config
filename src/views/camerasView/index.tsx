import React from 'react'
import s from './style.module.scss';
import TitleBox from '../dashboardView/components/titleBox';
import CameraTableItem from './camerasTableItem';

const CamerasView = () => {
    const devicesTableData = [
        {
            id: 1,
            name: "پرینتر",
            nameEng: "webcam",
            status: "ONLINE",
            sensorLink: "https://google.com/"
        },
        {
            id: 2,
            name: "پرینتر",
            nameEng: "webcam",
            status: "ONLINE",
            sensorLink: "https://google.com/"
        },
        {
            id: 3,
            name: "پرینتر",
            nameEng: "webcam",
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
                        <th>نام دوربین</th>
                        <th>وضعیت</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        devicesTableData?.map(item =>
                            <CameraTableItem {...item} />
                        )
                    }
                </tbody>
            </table>
        </div>
    )
}

export default CamerasView