import React from 'react'
import s from './style.module.scss';

interface IProps {
    placeholder?: string,
    hideMobile?: boolean
    styles?: any
}

const InputSearch = (props: IProps) => {
    const { placeholder = 'جستجو', hideMobile = false, styles = {} } = props
    return (
        <div className={`${s.inputSearchBox} ${hideMobile ? s.hideMobile : ""}`} style={{ ...styles }} >
            <img src='/images/icons/search.svg' className={s.icon} />
            <input className={s.input} placeholder={placeholder} />
        </div >
    )
}

export default InputSearch