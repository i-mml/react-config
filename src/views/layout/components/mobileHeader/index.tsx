import React from 'react'
import s from './style.module.scss';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { getCompanyById } from '../../../../api/services/company';
import { useQuery } from 'react-query';

const MobileHeader = () => {
    const authData = useSelector((state: any) => state?.auth?.data)
    const { data } = useQuery("get-company-by-id", () => getCompanyById(authData?.admin?.company_Id));

    const navigate = useNavigate()


    return (
        <div className={s.mobileHeader} >
            <div className={s.contentBox}>
                <img src={data?.data?.logo ? process.env.REACT_APP_IMAGE_BASE_URL + data?.data?.logo : "/images/icons/editor-icon.png"}
                    className={s.profileImage}
                    onClick={() => navigate('/profile')}
                />
                <div className={s.notifIcon} onClick={() => navigate('/notifications')}>
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"
                        className={s.icon}
                    >
                        <g id="bell">
                            <path id="Icon" d="M9.15333 14C9.03613 14.2021 8.8679 14.3698 8.66548 14.4864C8.46307 14.603 8.23359 14.6643 8 14.6643C7.76641 14.6643 7.53693 14.603 7.33452 14.4864C7.13211 14.3698 6.96387 14.2021 6.84667 14M12 5.33337C12 4.27251 11.5786 3.25509 10.8284 2.50495C10.0783 1.7548 9.06087 1.33337 8 1.33337C6.93913 1.33337 5.92172 1.7548 5.17157 2.50495C4.42143 3.25509 4 4.27251 4 5.33337C4 10 2 11.3334 2 11.3334H14C14 11.3334 12 10 12 5.33337Z" stroke="#007EFF" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                        </g>
                    </svg>
                </div>
            </div>
        </div>
    )
}

export default MobileHeader