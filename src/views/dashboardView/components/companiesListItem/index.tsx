import React from 'react'
import s from './style.module.scss';
import StatusBox from '../../../../components/statusBox';

const CompaniesListItem = (props: any) => {
    const {
        ID,
        active,
        description,
        ems_token,
        english_name,
        logo,
        sub_title,
        title,
        isLast
    } = props
    console.log(props)
    return (
        <div className={`${s.container} ${isLast ? s.isLast : ""}`}>
            <img src={process.env.REACT_APP_IMAGE_BASE_URL + logo} className={s.image} />
            <div className={s.title}>{title || "-"}</div>
            <div className={s.statusBadge}>
                <StatusBox title={active ? "فعال" : "غیر فعال"} active={active} />
            </div>
        </div>
    )
}

export default CompaniesListItem