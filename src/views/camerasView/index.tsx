import React from 'react'
import s from './style.module.scss';
import TitleBox from '../dashboardView/components/titleBox';
import CameraTableItem from './camerasTableItem';
import { getCameraAll } from '../../api/services/camera';
import { useQuery } from 'react-query';
import InputSearch from '../../components/searchInput';
import { isMobile } from 'react-device-detect';

const CamerasView = () => {
    const { data, isLoading } = useQuery('get-all-camearas', getCameraAll);
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
                <TitleBox icon='/images/icons/printer.svg' title='دوربین ها' />
                <InputSearch hideMobile={true} />
            </div>
            <table className={s.tableWrapper}>
                <thead>
                    <tr>
                        <th>نام دوربین</th>
                        <th>وضعیت</th>
                        <th>کانال</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        data?.map((item: any) =>
                            <CameraTableItem {...item} />
                        )
                    }
                </tbody>
            </table>
        </div>
    )
}

export default CamerasView