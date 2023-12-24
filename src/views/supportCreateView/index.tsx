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
    full_name: string,
    email: string,
    title: string,
    label: string,
    message: string,
}

const SupportCreateView = () => {
    const initialValues: FormInitialValueType = {
        full_name: "",
        email: "",
        title: "",
        label: "فوری",
        message: ""
    }

    const [loading, setLoading] = useState(false);
    const navigate = useNavigate()
    const user = useSelector((state: any) => state?.auth?.data?.user);

    const hanldeSendMessage = async (fields: FormInitialValueType, response: any) => {
        setLoading(true)
        postMessageCreate({
            content: fields.message,
            sender: response?.user_id,
            ticket_id: response?.ID,
            type: "t"
        }).then(res => console.log("post message res", res?.data))
    }

    const mutation = useMutation((e: FormInitialValueType) => postTicketSend({
        label: e.label,
        title: e.title,
        user_id: user?.user_id
    }).then((res) => {
        hanldeSendMessage(e, res?.data)
    }
    ));

    console.log(mutation?.isLoading)

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
                        <Field name="full_name">
                            {({ field }: any) => (
                                <div className={s.inputBox}>
                                    <div className={s.label}>نام و نام خانوادگی</div>
                                    <input
                                        type="text"
                                        {...field}
                                        className={s.input}
                                    // disabled
                                    />
                                </div>
                            )}
                        </Field>
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