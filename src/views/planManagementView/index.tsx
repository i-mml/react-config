import React, { MouseEvent, useRef, useState } from 'react'
import s from './style.module.scss';
import TitleBox from '../dashboardView/components/titleBox';
import { useParams, useSearchParams } from 'react-router-dom';
import { useQuery } from 'react-query';
import { getPlanAll } from '../../api/services/plan';
import MapDeviceIcon from '../../components/mapDeviceIcon';

const PlanManagementView = () => {
    const { data: planList = [] } = useQuery("get-all-plan", getPlanAll)
    const [tags, setTags] = useState<any>([])
    const [searchParams] = useSearchParams();
    const ref = useRef<any>()
    console.log(planList, searchParams.get('companyId'))


    const handleClick = (event: any) => {
        const rect = event.target?.getBoundingClientRect();
        const x = event.clientX - rect.left - 11;
        const y = event.clientY - rect.top - 11;
        setTags((prev: any) => [...prev, { x_position: Math.ceil((x / ref.current?.clientWidth) * 100), y_position: Math.ceil((y / ref.current?.clientHeight) * 100) }])
    }

    return (
        <div className={s.container}>
            <div className={s.titleWrappwer}>
                <TitleBox title='مدیریت پلن' />
            </div>
            <div className={s.box}>

                <img ref={ref} className={s.image} src={"http://content.nport.ir/images/plan/1.jpg"} onClick={handleClick} />
                <div className={s.devicesListWrapper}>
                    {
                        tags?.map((node: any) =>
                            <MapDeviceIcon key={node?.ID} style={{ top: `${node?.y_position}%`, left: `${node?.x_position}%` }} {...node} />
                        )
                    }
                </div>
            </div>
        </div>
    )
}

export default PlanManagementView