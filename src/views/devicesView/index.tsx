import React, { useState } from 'react'
import s from './style.module.scss';
import TitleBox from '../dashboardView/components/titleBox';
import DeviceTableItem from './devicesTableItem';
import { useQuery } from 'react-query';
import { getDeviceAll } from '../../api/services/devices';
import InputSearch from '../../components/searchInput';
import TablePagination from '../../components/pagination';

const DevicesView = () => {
    const { data } = useQuery("get-all-device", getDeviceAll)
    const pageSize = 20;
    const [page, setPage] = useState(0)
    const [value, setValue] = useState('')
    return (
        <div className={s.container}>
            <div className={s.titleWrappwer}>
                <TitleBox icon='/images/icons/printer.svg' title='دستگاه‌های متصل' />
                <InputSearch hideMobile placeholder='جستجو دستگاه' value={value} setValue={setValue} />
            </div>
            <table className={s.tableWrapper}>
                <thead>
                    <tr>
                        <th className={s.deviceTh}>نام دستگاه</th>
                        <th>وضعیت</th>
                        <th>سنسور</th>
                        <th className={s.hideMobile} style={{ width: "40%", textAlign: "center" }}>اطلاعات سیستم</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        data?.devices?.filter((item: any) => item?.name?.toUpperCase()?.includes(value.toUpperCase()))?.slice(page * pageSize, (page + 1) * pageSize)?.map((item: any) =>
                            <DeviceTableItem {...item} />
                        )
                    }
                </tbody>
            </table>
            <TablePagination dataLength={data?.devices?.filter((item: any) => item?.name?.toUpperCase()?.includes(value.toUpperCase()))?.length || 0} page={page} pageSize={pageSize} setPage={setPage} />
        </div>
    )
}

export default DevicesView