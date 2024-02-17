import React from 'react'
import SearchFoundIcon from '../icons/SearchFoundIcon'
import s from './style.module.scss';

const NotFoundBox = () => {
    return (
        <div className={s.container}>
            <SearchFoundIcon />
            <div className={s.text}>موردی یافت نشد!</div>
        </div>
    )
}

export default NotFoundBox