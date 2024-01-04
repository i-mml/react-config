import React from 'react'
import TitleBox from '../titleBox'
import SecondaryButton from '../../../../components/buttons/secondaryButton'
import { useNavigate } from 'react-router-dom'
import s from './style.module.scss';
import CompaniesListItem from '../companiesListItem';


const DashboardCompaniesList = ({ companies = [] }) => {
    const navigate = useNavigate()
    return (
        <div className={s.container}>
            <TitleBox title='شرکت ها' icon='/images/icons/printer.svg' />
            {
                companies?.length > 0 && companies?.slice(0, 5)?.map((item: any, index: number) => <CompaniesListItem key={item.ID} isLast={index === 5 || index === (companies?.length + 1)}  {...item} />)
            }
            <SecondaryButton className={s.showAll} onClick={() => navigate("/companies")}>
                مشاهده همه شرکت ها
            </SecondaryButton>
        </div >
    )
}

export default DashboardCompaniesList