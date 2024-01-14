import React from 'react'
import s from './style.module.scss';
import SecondaryButton from '../buttons/secondaryButton';
import BannersTableItem from '../bannersTableItem';
import TitleBox from '../../views/dashboardView/components/titleBox';
import PrimaryButton from '../buttons/primaryButton';
import { useQuery } from 'react-query';
import { useNavigate } from 'react-router-dom';
import { getBannerAll } from '../../api/services/banner';

const BannersTable = () => {
    const { data } = useQuery("get-all-banners", getBannerAll)
    const navigate = useNavigate()


    return (
        <div className={s.container}>
            <div className={s.titleWrappwer}>
                <TitleBox icon='/images/icons/printer.svg' title='بنر ها' />
                <PrimaryButton className={s.createCompany} onClick={() => navigate("/banner/create")} type="button">ایجاد بنر جدید</PrimaryButton>
            </div>
            <table className={s.tableWrapper}>
                <thead>
                    <tr>
                        <th className={`${s.w7}`}>عکس</th>
                        <th className={`${s.w10}`}>عنوان</th>
                        <th className={`${s.w7}`} >وضعیت</th>
                        <th className={`${s.w7}`}>جایگاه</th>
                        <th className={`${s.w7}`}>ویرایش</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        data?.map((item: any) =>
                            <BannersTableItem {...item} />
                        )
                    }
                </tbody>
            </table>

        </div >
    )
}

export default BannersTable