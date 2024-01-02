import React from 'react'
import s from './style.module.scss';

const MiddleSliderItem = ({ image, title, sub_title: subTitle }: { image: string, title: string, sub_title: string }) => {
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
                    راه حل ابری نت پورت یک سرویس مدیریت متمرکز است که به کاربران امکان می دهد تمام دستگاه های شبکه نت پورت خود را از طریق یک پلت فرم ساده و امن مدیریت کنند. کاربران می توانند دستگاه های نت پورت خود را از طریق رابط وب داشبورد نت پورت یا از طریق API ها استقرار، نظارت و پیکربندی کنند. هنگامی که کاربر تغییری در پیکربندی ایجاد می‌کند، درخواست تغییر به ابر نت پورت ارسال می‌شود و سپس به دستگاه(های) مربوطه فرستاده می‌شود.
                </div>
            </div>
        </div>
    )
}

export default MiddleSliderItem