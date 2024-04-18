import React, { useState } from 'react'
import s from './style.module.scss';
import SensorsModal from '../../views/devicesView/sensorsModal';
import { Modal, ModalBody } from 'reactstrap';
import ModalHeaderTitle from '../modalTitle';
import SecondaryButton from '../buttons/secondaryButton';
import PrimaryButton from '../buttons/primaryButton';
import { useMutation, useQueryClient } from 'react-query';
import { toast } from 'react-toastify';
import { deletePlanManagementByDeviceId } from '../../api/services/planManagement';
import MonitorIcon from '../icons/Monitor';
import { iconsTranslation } from '../icons/iconsTranslation';


const MapDeviceIcon = (props: any) => {
    const [modal, setModal] = useState(false);
    const toggle = () => setModal(!modal);
    const deletePlanManagementMutation = useMutation((e: any) => deletePlanManagementByDeviceId(e).then(() => { toast.success("دستگاه با موفقیت حذف شد."); window?.location?.reload(); }).catch(err => { toggle(); toast.error("حذف دستگاه با خطا مواجه شد.") }));
    return (
        <div className={s.mapDeviceIcon} onClick={toggle} {...props}  >
            <svg xmlns="http://www.w3.org/2000/svg" width="29" height="34" viewBox="0 0 29 34" fill="none" className={s.svgIcon}>
                <path d="M14.5 33.5C18.125 26.8 29 22.4756 29 13.4C29 5.99938 22.5081 0 14.5 0C6.49187 0 0 5.99938 0 13.4C0 22.4756 10.875 26.8 14.5 33.5Z" fill={props?.sensors?.sensors?.find((node: any) => node?.sensor === "Ping")?.lastvalue === "0 msec" ? "#C31414" : "#208B59"} />
            </svg>
            {
                iconsTranslation[props?.sensors?.sensors?.[0]?.group] ?
                    <div className={s.icon} >
                        {iconsTranslation[props?.sensors?.sensors?.[0]?.group]}
                    </div>
                    :
                    <MonitorIcon className={s.icon} fillInside="#fff" />
            }
            {/* <img className={s.icon} src={} /> */}


            {!props?.deleteMode && modal &&
                <SensorsModal modalTitle={props?.sensors?.sensors?.[0]?.device || "-"} toggle={toggle} modal={modal} sensors={props?.sensors?.sensors} />}
            {
                props?.deleteMode && modal && <Modal
                    isOpen={modal}
                    toggle={toggle}
                    className={s.modalContainer}
                    backdrop
                    keyboard
                >
                    <ModalBody className={s.modalBody}>
                        <ModalHeaderTitle title='حذف دستگاه' handleClose={toggle} />
                        <p className={s.promptStyle}>آیا از حذف این دستگاه اطمینان دارید؟</p>

                        <div className={s.buttons}>
                            <SecondaryButton onClick={() => deletePlanManagementMutation.mutate(props?.ID)}>بله</SecondaryButton>
                            <PrimaryButton type='button' onClick={toggle}>خیر</PrimaryButton>
                        </div>
                    </ModalBody>
                </Modal >
            }
        </div>
    )
}

export default MapDeviceIcon