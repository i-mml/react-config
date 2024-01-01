import React from 'react'
import s from './style.module.scss';

interface IProps {
    placeholder?: string,
    hideMobile?: boolean
}

const InputSearch = (props: IProps) => {
    const { placeholder = 'جستجو', hideMobile = false } = props
    return (
        <div className={s.inputSearchBox} style={{ display: hideMobile ? "none" : "" }}>
            <img src='/images/icons/search.svg' className={s.icon} />
            <input className={s.input} placeholder={placeholder} />
        </div>
    )
}

export default InputSearch