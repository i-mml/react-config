import React from 'react'
import StatusBox from '../statusBox'
import s from './style.module.scss';

const BannersTableItem = (props: any) => {
    const { active, ID, title, position, image } = props
    console.log(props)
    return (
        <tr>
            <td>
                <img src={process.env.REACT_APP_IMAGE_BASE_URL + image} className={s.image} />
            </td>
            <td>{title}</td>
            <td><StatusBox active={active} title={active ? "فعال" : "غیرفعال"} /></td>
            <td>{position}</td>
        </tr>
    )
}

export default BannersTableItem