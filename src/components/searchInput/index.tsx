import React from 'react'
import s from './style.module.scss';

interface IProps {
    placeholder?: string,

}

const InputSearch = (props: IProps) => {
    const { placeholder = 'جستجو' } = props
    return (
        <div className={s.inputSearchBox}>
            <img src='/images/icons/search.svg' className={s.icon} />
            <input className={s.input} placeholder={placeholder} />
        </div>
    )
}

export default InputSearch