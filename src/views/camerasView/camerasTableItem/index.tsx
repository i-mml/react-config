import React from 'react'
import s from './style.module.scss';
import { Stats } from 'fs';

interface IProps {
    id: number,
    name: string,
    nameEng: string,
    status: string,
    sensorLink: string
}


const CameraTableItem = ({ name, nameEng, status, sensorLink }: IProps) => {
    return (
        <tr className={s.cameraTableItem}>
            <td>
                <div className={s.name}>
                    <img src={`/images/icons/${nameEng || 'printer'}.svg`} className={s.image} />
                    <span className={s.nameValue}>{name}</span>
                </div>
            </td>
            <td>
                <a href={sensorLink} target='blank' className={s.link} >
                    پخش
                </a>
            </td>
        </tr>
    )
}

export default CameraTableItem