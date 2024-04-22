import React, { useState } from 'react'
import StatusBox from '../statusBox'
import s from './style.module.scss';
import EditBannerModal from '../../views/createBannerView/components/editBannerModal';
import { toast } from 'react-toastify';
import { pathDeactiveBanner } from '../../api/services/banner';
import { useMutation, useQueryClient } from 'react-query';
import { Spinner } from 'reactstrap';

const BannersTableItem = (props: any) => {
    const { active, ID, title, position, image } = props
    const queryClient = useQueryClient()
    const deactiveBannerMutation = useMutation((e: any) => pathDeactiveBanner(e).then(() => { queryClient.invalidateQueries("get-all-banners"); toast.success("غیرفعال سازی بنر با موفقیت انجام شد.") }).catch(err => err));


    const [modal, setModal] = useState(false);
    const toggle = () => setModal(!modal);

    return (
        <tr>
            <td>
                <img src={process.env.REACT_APP_IMAGE_BASE_URL + image} className={s.image} />
            </td>
            <td>{title}</td>
            <td><StatusBox active={active} title={active ? "فعال" : "غیرفعال"} /></td>
            <td className={`${s.hideMobile}`}>{position}</td>
            <td className={`${s.hideMobile}`}>
                <img src='/images/icons/edit.svg' className={s.actionIcon} onClick={() => toggle()} />
            </td>
            <td className={`${s.hideMobile}`}>
                {deactiveBannerMutation.isLoading ? <Spinner color='info' /> :
                    <img src='/images/icons/cancle.svg' className={s.actionIcon} onClick={() => deactiveBannerMutation.mutate(ID)} />
                }
            </td>
            {modal &&
                <EditBannerModal modal={modal} toggle={toggle} bannerInfo={props} />
            }
        </tr>
    )
}

export default BannersTableItem