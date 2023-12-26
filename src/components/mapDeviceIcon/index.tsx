import React from 'react'
import s from './style.module.scss';

const MapDeviceIcon = (props: any) => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width="29" height="34" viewBox="0 0 29 34" fill="none" className={s.mapDeviceIcon} {...props} >
            <path d="M14.5 33.5C18.125 26.8 29 22.4756 29 13.4C29 5.99938 22.5081 0 14.5 0C6.49187 0 0 5.99938 0 13.4C0 22.4756 10.875 26.8 14.5 33.5Z" fill="#208B59" />
            <circle cx="14.5" cy="13.5" r="10.5" fill="#E5F2FF" />
        </svg>

    )
}

export default MapDeviceIcon