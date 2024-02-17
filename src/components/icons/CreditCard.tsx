import React from 'react'

const CreditCardIcon = (props: any) => {
    return (
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
            <g id="credit-card" clip-path="url(#clip0_509_1282)">
                <path id="Icon" d="M0.833008 8.33325H19.1663M2.49967 3.33325H17.4997C18.4201 3.33325 19.1663 4.07944 19.1663 4.99992V14.9999C19.1663 15.9204 18.4201 16.6666 17.4997 16.6666H2.49967C1.5792 16.6666 0.833008 15.9204 0.833008 14.9999V4.99992C0.833008 4.07944 1.5792 3.33325 2.49967 3.33325Z" stroke={props?.fillInside || "#198BFF"} stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
            </g>
            <defs>
                <clipPath id="clip0_509_1282">
                    <rect width="20" height="20" fill="white" />
                </clipPath>
            </defs>
        </svg>

    )
}

export default CreditCardIcon