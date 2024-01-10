import React from 'react'
import TitleBox from '../dashboardView/components/titleBox'
import { getCompanyAll } from '../../api/services/company'
import { useQuery } from 'react-query'
import InputSearch from '../../components/searchInput'
import s from './style.module.scss';
import CompanyTableItem from './component/companyTableItem'
import PrimaryButton from '../../components/buttons/primaryButton'
import { useNavigate } from 'react-router-dom'
import SecondaryButton from '../../components/buttons/secondaryButton'

const CompaniesView = ({ limitShow = false }: { limitShow?: boolean }) => {
    const { data } = useQuery("get-all-companies", getCompanyAll)
    const navigate = useNavigate()

    return (
        <div className={`${s.container} ${limitShow && s.limitContainer}`}>
            <div className={s.titleWrappwer}>
                <TitleBox icon='/images/icons/printer.svg' title='شرکت ها' />
                <PrimaryButton className={s.createCompany} onClick={() => navigate("/company/create")} type="button">ایجاد شرکت</PrimaryButton>
            </div>
            <table className={s.tableWrapper}>
                <thead>
                    <tr>
                        <th style={{ width: "6%" }}>لوگو</th>
                        <th style={{ width: "15%" }}>نام شرکت</th>
                        <th style={{ width: "10%" }}>وضعیت</th>
                        <th  >تاریخ ایجاد</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        limitShow ?
                            data?.data?.slice(0, 5)?.map((item: any) =>
                                <CompanyTableItem {...item} />
                            ) :
                            data?.data?.map((item: any) =>
                                <CompanyTableItem {...item} />
                            )
                    }
                </tbody>
            </table>
            {limitShow && <SecondaryButton className={s.showAll} onClick={() => navigate("/companies")}>
                مشاهده همه شرکت ها
            </SecondaryButton>}
        </div>
    )
}

export default CompaniesView