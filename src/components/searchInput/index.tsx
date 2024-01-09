import React from 'react'
import s from './style.module.scss';

interface IProps {
    placeholder?: string,
    hideMobile?: boolean
    styles?: any,
    value: string,
    setValue: React.Dispatch<React.SetStateAction<string>>
}

const InputSearch = (props: IProps) => {
    const { placeholder = 'جستجو', hideMobile = false, styles = {}, value = '', setValue } = props
    return (
        <div className={`${s.inputSearchBox} ${hideMobile ? s.hideMobile : ""}`} style={{ ...styles }} >
            <img src='/images/icons/search.svg' className={s.icon} />
            <input className={s.input} placeholder={placeholder} value={value} onChange={(e) => setValue(e.target.value)} />
        </div >
    )
}

export default InputSearch