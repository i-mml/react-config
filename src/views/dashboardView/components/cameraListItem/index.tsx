import React from 'react'
import s from './style.module.scss';


const CameraListItem = ({ title = "", isLast = false, external_link = "" }) => {

    return (
        <div className={`${s.container} ${isLast ? s.isLast : ""}`}>
            <img src='/images/icons/webcam.svg' className={s.image} />
            <div className={s.title}>{title}</div>

            <div className={s.playLink}>
                <img src='/images/icons/play.svg' className={s.playLinkIcon} />
                <span className={s.link}>
                    <a href={external_link || "#"} target='_blank'>
                        پخش
                    </a>
                </span>
            </div>
        </div>
    )
}

export default CameraListItem