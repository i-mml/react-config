import React from 'react'
import s from './style.module.scss';

const SecondaryButton = ({ children = "", onClick = () => { }, className = "" }) => {
    return (
        <button className={`${s.secondaryButton} ${className}`} onClick={onClick}>{children}</button>
    )
}

export default SecondaryButton