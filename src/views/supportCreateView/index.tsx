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
    const [searchParams] = useSearchParams();
    const navigate = useNavigate()
    const user = useSelector((state: any) => state?.auth?.data?.user);

    const isExternal = searchParams?.get("isInternal") && searchParams?.get("isInternal") === "false"

    const { data: companiesData, isLoading } = useQuery<any>(user?.role === 1 || user?.role === 3 ? "get-all-companies" : "", user?.role === 1 || user?.role === 3 ? getCompanyAll : () => { })
    const { data: devicesData } = useQuery<any>("get-all-device", getDeviceAll)

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
        internal: !!isExternal ? false : true,
        device_id: !!isExternal ? "" : e.device_id,
        device_name: !!isExternal ? "" : e.device_name,
        companeyId: !!isExternal ? e.companeyId : null as any
    }).then((res) => {
        hanldeSendMessage(e, res?.data)
    }
    ));
    // console.log(devicesData?.devices?.find((item: any) => item?.objid === 2128))
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
                        {!!!isExternal &&
                            <Field name="device_id">
                                {({ field }: any) => (
                                    <div className={s.inputBox}>
                                        <div className={s.label}>دستگاه</div>
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
                        {!!isExternal &&
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
        </div>
    )
}

export default SupportCreateView