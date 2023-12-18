import React from 'react'
import s from './style.module.scss';

const SecondaryButton = ({ children = "", onClick = () => { }, className = "" }) => {
    return (
        <div className={`${s.secondaryButton} ${className}`} onClick={onClick}>{children}</div>
    )
}

export default SecondaryButton