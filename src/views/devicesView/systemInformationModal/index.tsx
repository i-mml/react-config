import React, { useEffect, useState } from 'react'
import { getDeviceSystemInformation } from '../../../api/services/devices'
import { Spinner, Modal, ModalBody } from 'reactstrap';
import ModalHeaderTitle from '../../../components/modalTitle';
import s from './style.module.scss';

const SystemInformationModal = ({ modal, toggle, objid, systemType }: { modal: boolean, toggle: any, objid?: number, systemType: { title: string, value: string } }) => {
    const [loading, setLoding] = useState(false)
    const [systemInfomations, setSystemInfomations] = useState<any>()


    const getSystemInformations = async () => {
        setLoding(true)
        await getDeviceSystemInformation(objid || 0)
            .then(res => {
                setSystemInfomations(res?.data)
            })?.catch(err => {
                toggle()
            }).finally(() => setLoding(false))
    }

    useEffect(() => {
        if (modal && objid) {
            getSystemInformations()
        }
    }, [modal])

    // console.log(systemInfomations?.[systemType?.value]?.sysinfo)

    return (
        <Modal
            isOpen={modal}
            toggle={toggle}
            className={s.modalContainer}
            backdrop
            keyboard
        >
            <ModalBody className={s.modalBody}>
                <ModalHeaderTitle title={`اطلاعات سیستم (${systemType?.title})`} handleClose={toggle} />
                {loading ? <div className={s.spinner}><Spinner /></div> :
                    systemInfomations?.[systemType?.value]?.sysinfo?.length > 0 ? <div className={s.sensorsList}>
                        <div className={s.listHeader}>
                            <span>عنوان</span>
                            <span>مقدار</span>
                        </div>
                        {systemInfomations?.[systemType?.value]?.sysinfo?.map((item: any) =>
                            <div className={s.listItem}>
                                <span>{item?.key || "-"}</span>
                                <span>{item?.value || "-"}</span>
                            </div>
                        )}
                    </div> : <div>موردی یافت نشد!</div>
                }
            </ModalBody>
        </Modal>
    )
}

export default SystemInformationModal