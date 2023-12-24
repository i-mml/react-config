import React from 'react'
import s from './style.module.scss';

const SecondaryButton = ({ children = "", onClick = () => { }, className = "", disabled = false }) => {
    return (
        <button className={`${s.secondaryButton} ${className}`} onClick={onClick} disabled={disabled}>{children}</button>
    )
}

export default SecondaryButton