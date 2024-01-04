import React from 'react'
import TitleBox from '../dashboardView/components/titleBox'
import { getCompanyAll } from '../../api/services/company'
import { useQuery } from 'react-query'
import InputSearch from '../../components/searchInput'
import s from './style.module.scss';
import CompanyTableItem from './component/companyTableItem'
import PrimaryButton from '../../components/buttons/primaryButton'
import { useNavigate } from 'react-router-dom'

const CompaniesView = () => {
    const { data } = useQuery("get-all-companies", getCompanyAll)
    const navigate = useNavigate()

    return (
        <div className={s.container}>
            <div className={s.titleWrappwer}>
                <TitleBox icon='/images/icons/printer.svg' title='شرکت ها' />
                <PrimaryButton className={s.createCompany} onClick={() => navigate("/company/create")} type="button">ایجاد شرکت</PrimaryButton>
            </div>
            <table className={s.tableWrapper}>
                <thead>
                    <tr>
                        <th className={s.deviceTh}>نام شرکت</th>
                        <th>وضعیت</th>
                        <th>تاریخ ایجاد</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        data?.data?.map((item: any) =>
                            <CompanyTableItem {...item} />
                        )
                    }
                </tbody>
            </table>
        </div>
    )
}

export default CompaniesView