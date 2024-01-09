import React, { useState } from 'react'
import s from './style.module.scss';
import TitleBox from '../dashboardView/components/titleBox';
import CameraTableItem from './camerasTableItem';
import { getCameraAll } from '../../api/services/camera';
import { useQuery } from 'react-query';
import InputSearch from '../../components/searchInput';
import TablePagination from '../../components/pagination';


const CamerasView = () => {
    const { data, isLoading } = useQuery('get-all-camearas', getCameraAll);
    const pageSize = 20;
    const [page, setPage] = useState(0)


    return (
        <div className={s.container}>
            <div className={s.titleWrappwer}>
                <TitleBox icon='/images/icons/printer.svg' title='دوربین ها' />
                <InputSearch hideMobile={true} placeholder='جستجو دوربین' />
            </div>
            <table className={s.tableWrapper}>
                <thead>
                    <tr>
                        <th className={s.cameraName}>نام دوربین</th>
                        <th>وضعیت</th>
                        <th>کانال</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        data?.slice(page * pageSize, (page + 1) * pageSize)?.map((item: any) =>
                            <CameraTableItem {...item} />
                        )
                    }
                </tbody>
            </table>
            <TablePagination dataLength={data?.length || 0} page={page} pageSize={pageSize} setPage={setPage} />
        </div>
    )
}

export default CamerasView