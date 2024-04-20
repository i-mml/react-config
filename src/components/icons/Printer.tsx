import React from 'react'

const PrinterIcon = (props: any) => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 23 22" fill="none">
            <g clip-path="url(#clip0_1286_2144)">
                <path d="M18.1934 3.07617V3.59375H16.6797V2.96875C16.6797 2.14844 16.2695 1.74805 15.4492 1.74805H6.61133C5.80078 1.74805 5.38086 2.14844 5.38086 2.96875V3.59375H3.86719V3.07617C3.86719 1.17188 4.91211 0.322266 6.63086 0.322266H15.4297C17.2461 0.322266 18.1934 1.17188 18.1934 3.07617Z" fill={props?.fillInside || "#000"} />
                <path d="M22.0605 6.45508V15.5957C22.0605 17.5 21.0547 18.457 19.1602 18.457H18.125V16.9824H19.1797C20.0391 16.9824 20.4883 16.5332 20.4883 15.6738V6.37695C20.4883 5.51758 20.0391 5.06836 19.1797 5.06836H2.89062C2.02148 5.06836 1.58203 5.51758 1.58203 6.37695V15.6738C1.58203 16.5332 2.02148 16.9824 2.89062 16.9824H3.93555V18.457H2.91016C1.00586 18.457 0 17.5 0 15.5957V6.45508C0 4.56055 1.10352 3.59375 2.91016 3.59375H19.1602C21.0547 3.59375 22.0605 4.56055 22.0605 6.45508ZM18.2031 7.38281C18.2031 8.05664 17.6465 8.60352 16.9922 8.60352C16.3184 8.60352 15.7715 8.05664 15.7715 7.38281C15.7715 6.72852 16.3184 6.17188 16.9922 6.17188C17.6465 6.17188 18.2031 6.72852 18.2031 7.38281Z" fill={props?.fillInside || "#000"} />
                <path d="M5.80078 21.3574H16.2598C17.5 21.3574 18.125 20.791 18.125 19.4922V11.5234C18.125 10.2246 17.5 9.6582 16.2598 9.6582H5.80078C4.61914 9.6582 3.93555 10.2246 3.93555 11.5234V19.4922C3.93555 20.791 4.56055 21.3574 5.80078 21.3574ZM6.28906 19.8828C5.77148 19.8828 5.50781 19.6289 5.50781 19.1016V11.9043C5.50781 11.377 5.77148 11.1328 6.28906 11.1328H15.7812C16.3086 11.1328 16.5527 11.377 16.5527 11.9043V19.1016C16.5527 19.6289 16.3086 19.8828 15.7812 19.8828H6.28906ZM7.64648 14.4043H14.4336C14.7852 14.4043 15.0391 14.1406 15.0391 13.7891C15.0391 13.457 14.7852 13.2031 14.4336 13.2031H7.64648C7.29492 13.2031 7.03125 13.457 7.03125 13.7891C7.03125 14.1406 7.29492 14.4043 7.64648 14.4043ZM7.64648 17.8125H14.4336C14.7852 17.8125 15.0391 17.5488 15.0391 17.2168C15.0391 16.875 14.7852 16.6113 14.4336 16.6113H7.64648C7.29492 16.6113 7.03125 16.875 7.03125 17.2168C7.03125 17.5488 7.29492 17.8125 7.64648 17.8125Z" fill={props?.fillInside || "#000"} />
            </g>
            <defs>
                <clipPath id="clip0_1286_2144">
                    <rect width="22.4219" height="21.3574" fill="white" />
                </clipPath>
            </defs>
        </svg>
    )
}

export default PrinterIcon