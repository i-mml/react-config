import React, { useState } from 'react'
import s from './style.module.scss';
import TitleBox from '../dashboardView/components/titleBox';
import { Field, Form, Formik } from 'formik';
import { useNavigate, useSearchParams } from 'react-router-dom';
import SecondaryButton from '../../components/buttons/secondaryButton';
import PrimaryButton from '../../components/buttons/primaryButton';
import { useMutation, useQuery } from 'react-query';
import { postTicketSend } from '../../api/services/ticket';
import { useSelector } from 'react-redux';
import { postMessageCreate } from '../../api/services/messages';
import { getCompanyAll } from '../../api/services/company';
import { getDeviceAll } from '../../api/services/devices';
import { Spinner } from 'reactstrap';
import { isMobile } from 'react-device-detect';
import DashboardMapModal from '../dashboardView/components/dashboardMapModal';
import { getPlanAll } from '../../api/services/plan';

interface FormInitialValueType {
    email: string,
    title: string,
    label: string,
    message: string,
    device_id?: string,
    device_name?: string,
    companeyId?: ""
}

const SupportCreateView = () => {
    const initialValues: FormInitialValueType = {
        email: "",
        title: "",
        label: "فوری",
        message: "",
        device_id: "",
        companeyId: ""
    }

    const [loading, setLoading] = useState(false);
    const [isOpen, setIsOpen] = useState(false);

    const toggleMapModal = () => setIsOpen(!isOpen);

    const [searchParams] = useSearchParams();
    const navigate = useNavigate()
    const user = useSelector((state: any) => state?.auth?.data?.user);
    const profile = useSelector((state: any) => state?.auth?.data);

    const isExternal = searchParams?.get("isInternal") && searchParams?.get("isInternal") === "false"

    const { data: companiesData, isLoading } = useQuery<any>(user?.role === 1 ? "get-all-companies" : "", user?.role === 1 ? getCompanyAll : () => { })
    const { data: devicesData } = useQuery<any>("get-all-device", getDeviceAll)
    const { data: planAll, isLoading: planListLoading } = useQuery<any>('dashboard-all-services', () => getPlanAll(profile?.user?.role !== 0 ? profile?.admin?.company_Id : profile?.user?.companey_id))


    const hanldeSendMessage = async (fields: FormInitialValueType, response: any) => {
        setLoading(true)
        const formData = new FormData()
        formData.append("content", fields.message)
        formData.append("sender", response?.user_id)
        formData.append("ticket_id", response?.ID)
        formData.append("type", "t")

        postMessageCreate(formData).then(res => navigate(`/support/${res?.data?.ticket_id}`))
    }


    const mutation = useMutation((e: FormInitialValueType) => postTicketSend({
        label: e.label,
        title: e.title,
        user_id: user?.user_id,
        internal: user?.role === 1 ? false : true,
        device_id: user?.role === 1 ? "" : e.device_id,
        device_name: user?.role === 1 ? "" : e.device_name,
        company_id: user?.role === 1 ? Number(e.companeyId) : null as any
    }).then((res) => {
        hanldeSendMessage(e, res?.data)
    }
    ));

    const hanldeSubmitCreateTicket = (e: FormInitialValueType) => {
        setLoading(true);

        mutation.mutate({ ...e, device_name: devicesData?.devices?.find((item: any) => item?.objid === Number(e?.device_id))?.name }, {
            onSuccess() {
                setLoading(false);
            },
        });
    }

    return (
        <div className={s.container}>
            <TitleBox icon='/images/ticket_tag.png' title='ارسال تیکت پشتیبانی' />

            <div className={s.form}>
                <Formik
                    initialValues={initialValues}
                    onSubmit={hanldeSubmitCreateTicket}
                >
                    <Form className={s.formBody}>

                        <Field name="email">
                            {({ field }: any) => (
                                <div className={s.inputBox}>
                                    <div className={s.label}>آدرس ایمیل</div>
                                    <input
                                        type="email"
                                        {...field}
                                        placeholder="example@gmail.com"
                                        className={s.input}
                                    // disabled
                                    />
                                </div>
                            )}
                        </Field>
                        {user?.role !== 1 &&
                            <Field name="device_id">
                                {({ field }: any) => (
                                    <div className={s.inputBox}>
                                        <div className={s.label}>دستگاه
                                            {
                                                planListLoading ?
                                                    <Spinner size={25} style={{
                                                        width: "16px",
                                                        height: "16px",
                                                        marginRight: "6px"
                                                    }} /> :
                                                    !isMobile ?
                                                        <svg
                                                            style={{
                                                                marginRight: "6px"
                                                            }}
                                                            xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128" width="28" height="28"
                                                            onClick={toggleMapModal}>
                                                            <path fill="#B8B8B8" d="M 84 11 C 82.3 11 81 12.3 81 14 C 81 15.7 82.3 17 84 17 L 106.80078 17 L 60.400391 63.400391 C 59.200391 64.600391 59.200391 66.499609 60.400391 67.599609 C 61.000391 68.199609 61.8 68.5 62.5 68.5 C 63.2 68.5 63.999609 68.199609 64.599609 67.599609 L 111 21.199219 L 111 44 C 111 45.7 112.3 47 114 47 C 115.7 47 117 45.7 117 44 L 117 14 C 117 12.3 115.7 11 114 11 L 84 11 z M 24 31 C 16.8 31 11 36.8 11 44 L 11 104 C 11 111.2 16.8 117 24 117 L 84 117 C 91.2 117 97 111.2 97 104 L 97 59 C 97 57.3 95.7 56 94 56 C 92.3 56 91 57.3 91 59 L 91 104 C 91 107.9 87.9 111 84 111 L 24 111 C 20.1 111 17 107.9 17 104 L 17 44 C 17 40.1 20.1 37 24 37 L 69 37 C 70.7 37 72 35.7 72 34 C 72 32.3 70.7 31 69 31 L 24 31 z" /></svg> : null
                                            }
                                        </div>
                                        <select
                                            className={s.select}
                                            {...field}
                                        >
                                            {
                                                devicesData?.devices?.map((item: any) => <option value={`${item?.objid}`} key={item?.objid}>{item?.name || "-"}</option>)
                                            }
                                        </select>
                                    </div>
                                )}
                            </Field>
                        }
                        {user?.role === 1 &&
                            <Field name="companeyId">
                                {({ field }: any) => (
                                    <div className={s.inputBox}>
                                        <div className={s.label}>شرکت</div>
                                        <select
                                            className={s.select}
                                            {...field}
                                        >
                                            {
                                                companiesData?.data?.map((item: any) => <option value={`${item?.ID}`} key={item?.Id}>{item?.title || "-"}</option>)
                                            }
                                        </select>
                                    </div>
                                )}
                            </Field>
                        }
                        <Field name="title">
                            {({ field }: any) => (
                                <div className={s.inputBox}>
                                    <div className={s.label}>موضوع</div>
                                    <input
                                        type="text"
                                        {...field}
                                        className={s.input}
                                    />
                                </div>
                            )}
                        </Field>
                        <Field name="label">
                            {({ field }: any) => (
                                <div className={s.inputBox}>
                                    <div className={s.label}>اولویت</div>
                                    <select
                                        className={s.select}
                                        {...field}
                                    >
                                        <option value="فوری" defaultChecked>فوری</option>
                                        <option value="متوسط">متوسط</option>
                                        <option value="کم">کم</option>
                                    </select>
                                </div>
                            )}
                        </Field>
                        <Field name="message">
                            {({ field }: any) => (
                                <div className={s.textareaBox}>
                                    <div className={s.label}>پیام</div>
                                    <textarea
                                        {...field}
                                        className={s.textarea}
                                        rows="8"
                                    />
                                </div>
                            )}
                        </Field>


                        <div className={s.buttons}>
                            <PrimaryButton onClick={() => { }} type="submit" className={s.saveBtn} disabled={mutation.isLoading || loading}>
                                {mutation?.isLoading || loading ? <img src='/images/icons/loadingLines.svg' /> : "ثبت"}
                            </PrimaryButton>
                            <SecondaryButton onClick={() => navigate('/support')} className={s.cancelBtn} disabled={mutation.isLoading || loading}>
                                لغو
                            </SecondaryButton>
                        </div>
                    </Form>
                </Formik>
            </div>
            {
                isOpen ?
                    <DashboardMapModal toggle={toggleMapModal} isOpen={isOpen} planList={planAll} />
                    : null
            }
        </div >
    )
}

export default SupportCreateView