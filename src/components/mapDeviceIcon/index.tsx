import React, { useState } from 'react'
import s from './style.module.scss';
import SensorsModal from '../../views/devicesView/sensorsModal';

const MapDeviceIcon = (props: any) => {
    const [modal, setModal] = useState(false);
    const toggle = () => setModal(!modal);

    const imgSrc: any = {
        "#1025": <svg className={s.icon} xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
            <g clipPath="url(#clip0_315_13027)">
                <path d="M12.0007 4.66668V3.46668C12.0007 2.71994 12.0007 2.34657 11.8553 2.06136C11.7275 1.81047 11.5235 1.6065 11.2726 1.47867C10.9874 1.33334 10.6141 1.33334 9.86732 1.33334H6.13398C5.38725 1.33334 5.01388 1.33334 4.72866 1.47867C4.47778 1.6065 4.27381 1.81047 4.14598 2.06136C4.00065 2.34657 4.00065 2.71994 4.00065 3.46668V4.66668M4.00065 12C3.38067 12 3.07068 12 2.81635 11.9319C2.12616 11.7469 1.58707 11.2078 1.40213 10.5176C1.33398 10.2633 1.33398 9.95332 1.33398 9.33334V7.86668C1.33398 6.74657 1.33398 6.18652 1.55197 5.7587C1.74372 5.38237 2.04968 5.07641 2.426 4.88466C2.85383 4.66668 3.41388 4.66668 4.53398 4.66668H11.4673C12.5874 4.66668 13.1475 4.66668 13.5753 4.88466C13.9516 5.07641 14.2576 5.38237 14.4493 5.7587C14.6673 6.18652 14.6673 6.74657 14.6673 7.86668V9.33334C14.6673 9.95332 14.6673 10.2633 14.5992 10.5176C14.4142 11.2078 13.8751 11.7469 13.185 11.9319C12.9306 12 12.6206 12 12.0007 12M10.0007 7.00001H12.0007M6.13398 14.6667H9.86732C10.6141 14.6667 10.9874 14.6667 11.2726 14.5214C11.5235 14.3935 11.7275 14.1895 11.8553 13.9387C12.0007 13.6534 12.0007 13.2801 12.0007 12.5333V11.4667C12.0007 10.7199 12.0007 10.3466 11.8553 10.0614C11.7275 9.81047 11.5235 9.6065 11.2726 9.47867C10.9874 9.33334 10.6141 9.33334 9.86732 9.33334H6.13398C5.38725 9.33334 5.01388 9.33334 4.72866 9.47867C4.47778 9.6065 4.27381 9.81047 4.14598 10.0614C4.00065 10.3466 4.00065 10.7199 4.00065 11.4667V12.5333C4.00065 13.2801 4.00065 13.6534 4.14598 13.9387C4.27381 14.1895 4.47778 14.3935 4.72866 14.5214C5.01388 14.6667 5.38725 14.6667 6.13398 14.6667Z" stroke="#007EFF" strokeLinecap="round" strokeLinejoin="round" />
            </g>
            <defs>
                <clipPath id="clip0_315_13027">
                    <rect width="16" height="16" fill="white" />
                </clipPath>
            </defs>
        </svg>,
        "#1225": <svg className={s.icon} xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
            <path d="M14.5 8.00001C14.5 7.72387 14.2761 7.50001 14 7.50001C13.7239 7.50001 13.5 7.72387 13.5 8.00001H14.5ZM2.5 8.00001C2.5 7.72387 2.27614 7.50001 2 7.50001C1.72386 7.50001 1.5 7.72387 1.5 8.00001H2.5ZM13.5 3.33334C13.5 3.39062 13.4656 3.52476 13.219 3.71913C12.978 3.90905 12.5983 4.10196 12.0845 4.27322C11.0622 4.61399 9.61807 4.83334 8 4.83334V5.83334C9.69564 5.83334 11.2515 5.60498 12.4008 5.2219C12.9728 5.03123 13.4717 4.79317 13.838 4.50454C14.1986 4.22035 14.5 3.82835 14.5 3.33334H13.5ZM8 4.83334C6.38193 4.83334 4.9378 4.61399 3.91547 4.27322C3.4017 4.10196 3.02199 3.90905 2.781 3.71913C2.53437 3.52476 2.5 3.39062 2.5 3.33334H1.5C1.5 3.82835 1.80142 4.22035 2.16202 4.50454C2.52826 4.79317 3.02724 5.03123 3.59925 5.2219C4.74849 5.60498 6.30436 5.83334 8 5.83334V4.83334ZM2.5 3.33334C2.5 3.27607 2.53437 3.14193 2.781 2.94756C3.02199 2.75764 3.4017 2.56473 3.91547 2.39347C4.9378 2.0527 6.38193 1.83334 8 1.83334V0.833344C6.30436 0.833344 4.74849 1.06171 3.59925 1.44479C3.02724 1.63546 2.52826 1.87352 2.16202 2.16215C1.80142 2.44633 1.5 2.83834 1.5 3.33334H2.5ZM8 1.83334C9.61807 1.83334 11.0622 2.0527 12.0845 2.39347C12.5983 2.56473 12.978 2.75764 13.219 2.94756C13.4656 3.14193 13.5 3.27607 13.5 3.33334H14.5C14.5 2.83834 14.1986 2.44633 13.838 2.16215C13.4717 1.87352 12.9728 1.63546 12.4008 1.44479C11.2515 1.06171 9.69564 0.833344 8 0.833344V1.83334ZM13.5 8.00001C13.5 8.05949 13.4649 8.19399 13.2207 8.38751C12.9815 8.57707 12.604 8.76971 12.0917 8.94074C11.0722 9.28108 9.62828 9.50001 8 9.50001V10.5C9.70505 10.5 11.2611 10.2723 12.4083 9.88928C12.9794 9.69865 13.4768 9.46045 13.8418 9.17127C14.2017 8.88603 14.5 8.49387 14.5 8.00001H13.5ZM8 9.50001C6.37172 9.50001 4.92779 9.28108 3.90833 8.94074C3.39602 8.76971 3.0185 8.57707 2.77928 8.38751C2.53507 8.19399 2.5 8.05949 2.5 8.00001H1.5C1.5 8.49387 1.79826 8.88603 2.15822 9.17127C2.52316 9.46045 3.02065 9.69865 3.59167 9.88928C4.73888 10.2723 6.29495 10.5 8 10.5V9.50001ZM1.5 3.33334V12.6667H2.5V3.33334H1.5ZM1.5 12.6667C1.5 13.1605 1.79826 13.5527 2.15822 13.8379C2.52316 14.1271 3.02065 14.3653 3.59167 14.5559C4.73888 14.9389 6.29495 15.1667 8 15.1667V14.1667C6.37172 14.1667 4.92779 13.9478 3.90833 13.6074C3.39602 13.4364 3.0185 13.2437 2.77928 13.0542C2.53507 12.8607 2.5 12.7262 2.5 12.6667H1.5ZM8 15.1667C9.70505 15.1667 11.2611 14.9389 12.4083 14.5559C12.9794 14.3653 13.4768 14.1271 13.8418 13.8379C14.2017 13.5527 14.5 13.1605 14.5 12.6667H13.5C13.5 12.7262 13.4649 12.8607 13.2207 13.0542C12.9815 13.2437 12.604 13.4364 12.0917 13.6074C11.0722 13.9478 9.62828 14.1667 8 14.1667V15.1667ZM14.5 12.6667V3.33334H13.5V12.6667H14.5Z" fill="#007EFF" />
        </svg>,
    }

    return (
        <div className={s.mapDeviceIcon} onClick={toggle} {...props}  >
            <svg xmlns="http://www.w3.org/2000/svg" width="29" height="34" viewBox="0 0 29 34" fill="none" className={s.svgIcon} >
                <path d="M14.5 33.5C18.125 26.8 29 22.4756 29 13.4C29 5.99938 22.5081 0 14.5 0C6.49187 0 0 5.99938 0 13.4C0 22.4756 10.875 26.8 14.5 33.5Z" fill="#208B59" />
                <circle cx="14.5" cy="13.5" r="10.5" fill="#E5F2FF" />
            </svg>
            {/* <img className={s.icon} src={} /> */}
            <img className={s.icon} src={"/images/icons/monitorBlue.svg"} />
            {modal &&
                <SensorsModal toggle={toggle} modal={modal} sensors={props?.sensors?.sensors} />}

        </div>
    )
}

export default MapDeviceIcon