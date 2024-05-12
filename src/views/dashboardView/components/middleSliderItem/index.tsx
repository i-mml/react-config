import React from 'react'
import s from './style.module.scss';
import { Link } from 'react-router-dom';

const MiddleSliderItem = (props: {
    image: string, title: string, sub_title: string, external_link: string, description: string
}) => {
    const { image, title, sub_title: subTitle, external_link, description } = props

    return (
        <Link className={s.middleSliderItem} to={external_link || ""} target='_blank'>
            <img src={image ? process.env.REACT_APP_IMAGE_BASE_URL + image : "/images/middleSlider.png"} className={s.image} />
            <div className={s.textBox}>
                <h3 className={s.title}>
                    {title || "-"}
                </h3>
                <div className={s.subTitle}>
                    {subTitle || "-"}
                </div>
                <div className={s.description}>
                    {description}
                </div>
            </div>
        </Link>
    )
}

export default MiddleSliderItem