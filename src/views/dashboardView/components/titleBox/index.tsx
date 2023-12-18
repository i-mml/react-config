import React from 'react'
import s from './style.module.scss';

const TitleBox = ({ title = "", icon = "" }) => {
    return (
        <div className={s.titleBox}>
            {icon !== "" &&
                <img src={icon} className={s.icon} />
            }
            <h4 className={s.title}>
                {title}
            </h4>
        </div>
    )
}

export default TitleBox