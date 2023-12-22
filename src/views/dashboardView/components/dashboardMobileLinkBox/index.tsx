import React from 'react'
import { useNavigate } from 'react-router-dom';
import s from './style.module.scss';

interface IProps {
    icon: string;
    title: string;
    link: string
}

const DashboardMobileLinkBox = (props: IProps) => {
    const { icon, title, link } = props;
    const navigate = useNavigate()

    return (
        <div className={s.mobileLinkBox} onClick={() => navigate(link)}>
            <img src={icon} alt='mobile link' className={s.icon} />
            <div className={s.title}>
                {title}
            </div>
        </div>
    )
}

export default DashboardMobileLinkBox