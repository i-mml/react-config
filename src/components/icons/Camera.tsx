import React from 'react'

const CameraIcon = (props: any) => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 55 37" fill="none">
            <rect x="1" y="1" width="53" height="8" stroke={props?.fillInside || "#198BFF"} strokeWidth="2" />
            <path d="M5 9H51V13C51 25.7025 40.7025 36 28 36C15.2975 36 5 25.7025 5 13V9Z" stroke={props?.fillInside || "#198BFF"} strokeWidth="2" />
            <circle cx="28" cy="24" r="8" stroke={props?.fillInside || "#198BFF"} strokeWidth="2" />
            <circle cx="28" cy="24" r="4" stroke={props?.fillInside || "#198BFF"} strokeWidth="2" />
            <circle cx="42.5" cy="13.5" r="1.5" fill={props?.fillInside || "#198BFF"} />
        </svg>

    )
}

export default CameraIcon