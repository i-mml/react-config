import React, { useState } from 'react'
import s from './style.module.scss';
import StatusBox from '../../../../components/statusBox';
import moment from 'moment-jalaali';
import { useNavigate } from 'react-router-dom';
import CreateCameraModal from '../../../dashboardView/components/createCameraModal';
import { useMutation, useQueryClient } from 'react-query';
import { patchCompanyActive } from '../../../../api/services/company';
import { toast } from 'react-toastify';
import { Spinner } from 'reactstrap';

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
    isLast, sub_scription
  } = props

  const queryClient = useQueryClient()
  const deactiveCompanyMutation = useMutation((e: any) => patchCompanyActive(e).then(() => { queryClient.invalidateQueries("get-all-companies"); toast.success("ویرایش با موفقیت انجام شد.") }).catch(err => err));


  const [modal, setModal] = useState(false);
  const toggle = () => setModal(!modal);

  const navigate = useNavigate()

  return (
    <tr className={s.deviceTableItem}>
      <td >
        <img src={process.env.REACT_APP_IMAGE_BASE_URL + logo} className={s.image} />
      </td>
      <td onClick={() => navigate(`/guest-dashboard?guestId=${ID}&guestToken=${ems_token}`)}>
        <div className={s.name}>
          <span className={s.nameValue}>{title}</span>
        </div>
      </td>
      <td>
        <StatusBox active={active} title={active ? "فعال" : "غیرفعال"} />
      </td>
      <td className={`${s.hideMobile}`}>
        <div className={s.date}  >
          {moment(CreatedAt).format('jYYYY/jMM/jDD')}
        </div>
      </td>
      <td>
        {sub_scription ?? "-"}
      </td>
      <td className={`${s.hideMobile}`} >
        <img src='/images/icons/webcam.svg' className={s.actionIcon} onClick={toggle} />

      </td>
      <td className={`${s.hideMobile}`} onClick={() => navigate(`/plan/management?companyId=${ID}&token=${ems_token}`)}>
        <img src='/images/icons/add.svg' className={s.actionIcon} />
      </td>
      <td className={`${s.hideMobile}`}>
        {deactiveCompanyMutation.isLoading ? <Spinner color='info' /> :
          <img src='/images/icons/cancle.svg' className={s.actionIcon} onClick={() => deactiveCompanyMutation.mutate(ID)} />
        }
      </td>
      <td className={`${s.hideMobile}`}>
        <img src='/images/icons/edit.svg' className={s.actionIcon} onClick={() => navigate(`/company/edit/${ID}`)} />
      </td>
      {
        modal && <CreateCameraModal modal={modal} toggle={toggle} companyId={ID} />
      }
    </tr>
  )
}

export default CompanyTableItem