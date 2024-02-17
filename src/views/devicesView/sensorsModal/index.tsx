import React, { useEffect, useState } from 'react'
import s from './style.module.scss';
import { Spinner, Modal, ModalBody } from 'reactstrap';
import ModalHeaderTitle from '../../../components/modalTitle';
import { getDeviceByDeviceId } from '../../../api/services/devices';
import NotFoundBox from '../../../components/notFound';

const SensorsModal = ({ modal, toggle, sensors = [], objid, tags }: { modal: boolean, toggle: any, sensors?: any[], objid?: number, tags?: string }) => {
    const [loading, setLoding] = useState(false)
    const [sensorsData, setSensorsData] = useState(sensors)

    const getDeviceSensors = async () => {
        setLoding(true)
        await getDeviceByDeviceId(objid || 0, tags || "")
            .then(res => {
                setSensorsData(res?.data?.sensors)

            })?.catch(err => {
                console.log(err)
                toggle()
            }).finally(() => setLoding(false))
    }

    useEffect(() => {
        if (modal && objid) {
            getDeviceSensors()
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
                <ModalHeaderTitle title='سنسورها' handleClose={toggle} />
                {loading ? <div className={s.spinner}><Spinner /></div> :
                    sensorsData?.length > 0 ? <div className={s.sensorsList}>
                        <div className={s.listHeader}>
                            <span>عنوان</span>
                            <span>مقدار</span>
                        </div>
                        {sensorsData?.map((item: any) =>
                            <div className={s.listItem}>
                                <span>{item?.sensor}</span>
                                <span>{item?.lastvalue}</span>
                            </div>
                        )}
                    </div> : <NotFoundBox />
                }
            </ModalBody>
        </Modal>
    )
}

export default SensorsModal