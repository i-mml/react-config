import React from 'react'
import s from './style.module.scss';
import { Stats } from 'fs';
import StatusBox from '../../../components/statusBox';

interface IProps {
    ID: number,
    title: string,
    active: boolean,
    external_link: string
}


const CameraTableItem = ({ ID, title, active, external_link }: IProps) => {
    return (
        <tr className={s.cameraTableItem} key={ID}>
            <td>
                <div className={s.name}>
                    <img src={`/images/icons/webcam.svg`} className={s.image} />
                    <span className={s.nameValue}>{title}</span>
                </div>
            </td>
            <td>
                <StatusBox active={active} title={active ? "فعال" : "غیرفعال"} />
            </td>
            <td>
                <a href={external_link || "#"} target='blank' className={s.link} >
                    پخش
                </a>
            </td>
        </tr>
    )
}

export default CameraTableItem