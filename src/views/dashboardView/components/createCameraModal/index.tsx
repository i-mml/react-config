import React, { useState } from 'react'
import s from './style.module.scss';
import { Spinner, Modal, ModalBody } from 'reactstrap';
import { useMutation } from 'react-query';
import { Field, Form, Formik } from "formik";
import ModalHeaderTitle from '../../../../components/modalTitle';
import { postCameraCreate } from '../../../../api/services/camera';
import PrimaryButton from '../../../../components/buttons/primaryButton';
import SecondaryButton from '../../../../components/buttons/secondaryButton';

const CreateCameraModal = ({ modal, toggle, companyId }: { modal: boolean, toggle: any, companyId: number }) => {
    const createCameraMutation = useMutation((e: any) => postCameraCreate(e).then(() => toggle()).catch(err => err));

    const handleSubmit = (e: any) => {
        createCameraMutation.mutate({ ...e, active: !!e.active, company_id: companyId })
    }

    return (
        <Modal
            isOpen={modal}
            toggle={toggle}
            className={s.modalContainer}
            backdrop
            keyboard
        >
            <ModalBody className={s.modalBody}>
                <ModalHeaderTitle title='افزودن دوربین' handleClose={toggle} />
                <div className={s.form}>
                    <Formik
                        initialValues={{}}
                        onSubmit={handleSubmit}
                    >
                        <Form className={s.formBody}>
                            <Field name="title">
                                {({ field }: any) => (
                                    <div className={s.inputBox}>
                                        <div className={s.label}>عنوان</div>
                                        <input
                                            type="text"
                                            {...field}
                                            placeholder="عنوان"
                                            className={s.input}
                                        />
                                    </div>
                                )}
                            </Field>

                            <Field name="active">
                                {({ field }: any) => (
                                    <div className={s.inputBox}>
                                        <div className={s.label}>وضعیت</div>
                                        <select
                                            className={s.select}
                                            {...field}
                                            placeholder="وضعیت"
                                        >
                                            <option hidden>وضعیت</option>
                                            <option value={1}>فعال</option>
                                            <option value={0}>غیرفعال</option>
                                        </select>
                                    </div>
                                )}
                            </Field>
                            <Field name="description">
                                {({ field }: any) => (
                                    <div className={s.textAreaBox}>
                                        <div className={s.label}>توضیحات</div>
                                        <textarea
                                            {...field}
                                            className={s.textarea}
                                            placeholder="توضیحات"
                                        />
                                    </div>
                                )}
                            </Field>

                            <Field name="external_link">
                                {({ field }: any) => (
                                    <div className={s.inputBoxFull}>
                                        <div className={s.label}>لینک</div>
                                        <input
                                            type="text"
                                            {...field}
                                            className={s.input}
                                            placeholder='لینک'
                                        />
                                    </div>
                                )}
                            </Field>

                            <div className={s.btnBox}>
                                <PrimaryButton type="submit" className={s.saveBtn} disabled={createCameraMutation.isLoading}>
                                    {
                                        createCameraMutation.isLoading || createCameraMutation.isLoading ? <img src='/images/icons/loadingLines.svg' /> : "ثبت"}
                                </PrimaryButton>

                                <SecondaryButton className={s.cancelBtn} onClick={() => toggle()}>
                                    لغو
                                </SecondaryButton>

                            </div>
                        </Form>
                    </Formik>
                </div>
            </ModalBody>
        </Modal >
    )
}

export default CreateCameraModal