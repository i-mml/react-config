import React from 'react'
import s from './style.module.scss';
import TitleBox from '../dashboardView/components/titleBox';
import { Field, Form, Formik } from 'formik';
import { useNavigate } from 'react-router-dom';
import SecondaryButton from '../../components/buttons/secondaryButton';
import PrimaryButton from '../../components/buttons/primaryButton';

const SupportCreateView = () => {
    const navigate = useNavigate()
    return (
        <div className={s.container}>
            <TitleBox icon='/images/ticket_tag.png' title='ارسال تیکت پشتیبانی' />

            <div className={s.form}>
                <Formik
                    initialValues={{}}
                    onSubmit={() => { }}
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
                                        disabled
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
                                        disabled
                                    />
                                </div>
                            )}
                        </Field>
                        <Field name="subject">
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
                                        defaultValue="1"
                                        defaultChecked="1"
                                    >
                                        <option value={1}>فوری</option>
                                        <option value={2}>متوسط</option>
                                        <option value={3}>کم</option>
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
                            <PrimaryButton onClick={() => { }} type="submit" className={s.saveBtn}>
                                ثبت
                            </PrimaryButton>
                            <SecondaryButton onClick={() => navigate('/support')} className={s.cancelBtn}>
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