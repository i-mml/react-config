import React from 'react'
import s from './style.module.scss';

interface IProps {
    title: string, value: number, increased: boolean, hasPercent?: boolean, id: number
}

const UsedTraficItem = (props: IProps) => {
    const { title, value, increased, hasPercent = false, id } = props
    return (
        <div className={s.usedTraficItem}>
            <div className={s.top}>
                {
                    id === 1 ?
                        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="16" viewBox="0 0 14 16" fill="none">
                            <path d="M8.15333 13.6667C8.03613 13.8687 7.8679 14.0364 7.66548 14.153C7.46307 14.2696 7.23359 14.331 7 14.331C6.76641 14.331 6.53693 14.2696 6.33452 14.153C6.13211 14.0364 5.96387 13.8687 5.84667 13.6667M11 5C11 3.93913 10.5786 2.92172 9.82843 2.17157C9.07828 1.42143 8.06087 1 7 1C5.93913 1 4.92172 1.42143 4.17157 2.17157C3.42143 2.92172 3 3.93913 3 5C3 9.66667 1 11 1 11H13C13 11 11 9.66667 11 5Z" stroke="#111111" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                        :
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                            <g clip-path="url(#clip0_628_4237)">
                                <path d="M11.3333 0.666748L14 3.33341M14 3.33341L11.3333 6.00008M14 3.33341H4.66667C3.95942 3.33341 3.28115 3.61437 2.78105 4.11446C2.28095 4.61456 2 5.29284 2 6.00008V7.33341M4.66667 15.3334L2 12.6667M2 12.6667L4.66667 10.0001M2 12.6667H11.3333C12.0406 12.6667 12.7189 12.3858 13.219 11.8857C13.719 11.3856 14 10.7073 14 10.0001V8.66675" stroke="#111111" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                            </g>
                            <defs>
                                <clipPath id="clip0_628_4237">
                                    <rect width="16" height="16" fill="white" />
                                </clipPath>
                            </defs>
                        </svg>}
                <div className={s.title}>
                    {title}
                </div>
            </div>
            <div className={`${s.percentNumber} ${increased ? s.red : s.green}`}>
                {hasPercent && "%"} {value}
            </div>
            <div className={s.percentSlider} >
                <div className={`${s.percentSlierBar} ${increased ? s.redBg : s.greenBg}`} style={{ width: `${value / 100 * 100}%` }}></div>
            </div>

        </div>
    )
}

export default UsedTraficItem