import React, { useState } from 'react'
import StatusBox from '../statusBox'
import s from './style.module.scss';
import EditBannerModal from '../../views/createBannerView/components/editBannerModal';

const BannersTableItem = (props: any) => {
    const { active, ID, title, position, image } = props

    const [modal, setModal] = useState(false);
    const toggle = () => setModal(!modal);

    return (
        <tr>
            <td>
                <img src={process.env.REACT_APP_IMAGE_BASE_URL + image} className={s.image} />
            </td>
            <td>{title}</td>
            <td><StatusBox active={active} title={active ? "فعال" : "غیرفعال"} /></td>
            <td>{position}</td>
            <td>
                <img src='/images/icons/edit.svg' className={s.actionIcon} onClick={() => toggle()} />
            </td>
            {modal &&
                <EditBannerModal modal={modal} toggle={toggle} bannerInfo={props} />
            }
        </tr>
    )
}

export default BannersTableItem