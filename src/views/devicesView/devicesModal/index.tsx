import React, { useEffect, useState } from 'react'
import s from './style.module.scss';
import { Spinner, Modal, ModalBody } from 'reactstrap';
import ModalHeaderTitle from '../../../components/modalTitle';
import { getDeviceAll, getDeviceByDeviceId } from '../../../api/services/devices';
import StatusBox from '../../../components/statusBox';
import NotFoundBox from '../../../components/notFound';

const DevicesModal = ({ modal, toggle, onItemClick }: { modal: boolean, toggle: any, onItemClick: (e: number) => void }) => {
    const [loading, setLoding] = useState(false)
    const [devices, setDevices] = useState([])

    const getDevices = async () => {
        setLoding(true)
        await getDeviceAll()
            .then(res => {
                setDevices(res?.sensorxref?.filter((node: any) => node?.basetype !== "group"))
            })?.catch(err => {
                console.log(err)
            }).finally(() => setLoding(false))
    }

    useEffect(() => {
        if (modal) {
            getDevices()
        }
    }, [modal])

    return (
        <Modal
            isOpen={modal}
            toggle={toggle}
            className={s.modalContainer}
            backdrop
            keyboard
        >
            <ModalBody className={s.modalBody}>
                <ModalHeaderTitle title='دستگاه‌ ها' handleClose={() => { }} />
                {
                    loading ? <div className={s.spinner}><Spinner /></div> :
                        devices?.length > 0 ? <div className={s.sensorsList}>
                            <div className={s.listHeader}>
                                <span>نام</span>
                                <span>وضعیت</span>
                                <span>مقدار</span>
                            </div>
                            {devices?.map((item: any) =>
                                <div className={s.listItem} onClick={() => onItemClick(item)}>
                                    <span>{item?.name}</span>
                                    <span><StatusBox active={item?.fold} title={item?.fold ? "فعال" : "غیرفعال"} /></span>
                                    <span>{item?.objid}</span>
                                </div>
                            )}
                        </div> : <NotFoundBox />}
            </ModalBody>
        </Modal >
    )
}

export default DevicesModal