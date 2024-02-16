import React, { useState } from 'react'
import s from './style.module.scss';
import TitleBox from '../dashboardView/components/titleBox';
import { Field, Form, Formik } from 'formik';
import { useNavigate } from 'react-router-dom';
import SecondaryButton from '../../components/buttons/secondaryButton';
import PrimaryButton from '../../components/buttons/primaryButton';
import { useMutation } from 'react-query';
import { postTicketSend } from '../../api/services/ticket';
import { useSelector } from 'react-redux';
import { postMessageCreate } from '../../api/services/messages';

interface FormInitialValueType {
    email: string,
    title: string,
    label: string,
    message: string,
    device_id?: string,
    internal: "internal" | "external"
}

const SupportCreateView = () => {
    const initialValues: FormInitialValueType = {
        email: "",
        title: "",
        label: "فوری",
        message: "",
        device_id: "",
        internal: "internal"
    }

    const [loading, setLoading] = useState(false);
    const [internal, setInternal] = useState(initialValues?.internal);
    const navigate = useNavigate()
    const user = useSelector((state: any) => state?.auth?.data?.user);

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
        user_id: user?.user_id
    }).then((res) => {
        hanldeSendMessage(e, res?.data)
    }
    ));


    const hanldeSubmitCreateTicket = (e: FormInitialValueType) => {
        setLoading(true);
        mutation.mutate(e, {
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
                        {
                            internal === "internal" &&
                            <Field name="device_id">
                                {({ field }: any) => (
                                    <div className={s.inputBox}>
                                        <div className={s.label}>دستگاه</div>
                                        <input
                                            type="text"
                                            {...field}
                                            className={s.input}
                                        // disabled
                                        />
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
                        <Field name="internal">
                            {({ field }: any) => (
                                <div className={s.inputBox}>
                                    <div className={s.label}>نوع تیکت</div>
                                    <select
                                        className={s.select}
                                        {...field}
                                        value={internal}
                                        onChange={(e) => setInternal(e.target.value as FormInitialValueType["internal"])}
                                    >
                                        <option value={"internal"}>داخلی</option>
                                        <option value={"external"}>خارجی</option>
                                    </select>
                                </div>
                            )}
                        </Field>

                        <div className={s.buttons}>
                            <PrimaryButton onClick={() => { }} type="submit" className={s.saveBtn} disabled={mutation.isLoading || loading}>
                                {mutation?.isLoading || loading ? "در حال ثبت" : "ثبت"}
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