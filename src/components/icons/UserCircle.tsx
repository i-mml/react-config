import React from 'react'

const UserCircleIcon = (props: any) => {
    return (
        <svg width="20" height="20" viewBox="0 0 20 21" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
            <g id="user-circle">
                <path id="Icon" d="M4.43057 16.6988C4.93751 15.5044 6.12109 14.6667 7.50033 14.6667H12.5003C13.8796 14.6667 15.0631 15.5044 15.5701 16.6988M13.3337 8.41675C13.3337 10.2577 11.8413 11.7501 10.0003 11.7501C8.15938 11.7501 6.66699 10.2577 6.66699 8.41675C6.66699 6.5758 8.15938 5.08341 10.0003 5.08341C11.8413 5.08341 13.3337 6.5758 13.3337 8.41675ZM18.3337 10.5001C18.3337 15.1025 14.6027 18.8334 10.0003 18.8334C5.39795 18.8334 1.66699 15.1025 1.66699 10.5001C1.66699 5.89771 5.39795 2.16675 10.0003 2.16675C14.6027 2.16675 18.3337 5.89771 18.3337 10.5001Z" stroke={props?.fillInside || "#198BFF"} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </g>
        </svg>
    )
}

export default UserCircleIcon