import React from 'react'
import s from './style.module.scss';

const MiddleSliderItem = () => {
    return (
        <div className={s.middleSliderItem}>
            <img src="/images/middleSlider.png" className={s.image} />
            <div className={s.textBox}>
                <h3 className={s.title}>
                    سبیان
                </h3>
                <div className={s.subTitle}>
                    لورم ایپسوم
                </div>
                <div className={s.description}>
                    لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه د استفاده قرار گیرد.
                </div>
            </div>
        </div>
    )
}

export default MiddleSliderItem