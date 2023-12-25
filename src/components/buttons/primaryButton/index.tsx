import React, { ReactNode } from 'react'
import s from './style.module.scss';
import { string } from 'yup';

interface IProps {
    children: ReactNode, onClick: () => void, className?: string; type: "button" | "reset" | "submit", disabled?: boolean
}

const PrimaryButton = (props: IProps) => {
    const { children = "", onClick = () => { }, className = "", type = "button", disabled } = props
    return (
        <button className={`${s.secondaryButton} ${className}`} onClick={onClick} type={type} disabled={disabled}>{children}</button>
    )
}

export default PrimaryButton