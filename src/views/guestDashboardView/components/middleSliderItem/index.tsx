import React from 'react'
import s from './style.module.scss';

const MiddleSliderItem = ({ image, title, sub_title: subTitle, description }: { image: string, title: string, sub_title: string, description: string }) => {
    return (
        <div className={s.middleSliderItem}>
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
        </div>
    )
}

export default MiddleSliderItem