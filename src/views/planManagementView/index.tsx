import React from 'react'
import s from './style.module.scss';
import TitleBox from '../dashboardView/components/titleBox';
import { useParams, useSearchParams } from 'react-router-dom';
import { useQuery } from 'react-query';
import { getPlanAll } from '../../api/services/plan';

const PlanManagementView = () => {
    const { data: planList = [] } = useQuery("get-all-plan", getPlanAll)
    const [searchParams] = useSearchParams();


    console.log(planList, searchParams.get('companyId'))

    return (
        <div className={s.container}>
            <div className={s.titleWrappwer}>
                <TitleBox title='مدیریت پلن' />
            </div>
        </div>
    )
}

export default PlanManagementView