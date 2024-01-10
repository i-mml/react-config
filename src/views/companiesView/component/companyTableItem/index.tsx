import React from 'react'
import s from './style.module.scss';
import StatusBox from '../../../../components/statusBox';
import moment from 'moment-jalaali';

const CompanyTableItem = (props: any) => {
  const {
    CreatedAt,
    ID,
    active,
    description,
    ems_token,
    english_name,
    logo,
    sub_title,
    title,
    isLast
  } = props

  return (
    <tr className={s.deviceTableItem}>
      <td>
        <img src={process.env.REACT_APP_IMAGE_BASE_URL + logo} className={s.image} />
      </td>
      <td>
        <div className={s.name}>
          <span className={s.nameValue}>{title}</span>
        </div>
      </td>
      <td>
        <StatusBox active={active} title={active ? "فعال" : "غیرفعال"} />
      </td>
      <td>
        <div className={s.date}  >
          {moment(CreatedAt).format('jYYYY/jMM/jDD')}
        </div>
      </td>

    </tr >
  )
}

export default CompanyTableItem