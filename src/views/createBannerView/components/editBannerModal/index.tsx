import React, { useRef, useState } from 'react'
import s from './style.module.scss';
import { Modal, ModalBody } from 'reactstrap';
import { useMutation, } from 'react-query';
import { Field, Form, Formik } from "formik";
import ModalHeaderTitle from '../../../../components/modalTitle';
import PrimaryButton from '../../../../components/buttons/primaryButton';
import SecondaryButton from '../../../../components/buttons/secondaryButton';
import { putBannerEdit } from '../../../../api/services/banner';
import { toast } from 'react-toastify';


const EditBannerModal = ({ modal, toggle, bannerInfo }: { modal: boolean, toggle: any, bannerInfo: any }) => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [selectedFile, setSelectedFile] = useState("")
  const inputFileRef = useRef(null);


  const handleImageChange = (event: any) => {
    if (event.target.files && event.target.files[0]) {
      setSelectedFile(event.target.files[0])
      // @ts-ignore
      setSelectedImage(URL.createObjectURL(event.target.files[0]));
    }
  };

  const editBannerMutation = useMutation((e: any) => putBannerEdit(e).then(() => { toast.success("بنر با موفقیت ویرایش شد."); toggle() }).catch(err => err));

  const handleSubmit = (e: any) => {
    editBannerMutation.mutate({ ...e, active: !!e.active, position: +e?.position })
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
        <ModalHeaderTitle title='ویرایش بنر' handleClose={toggle} />
        <div className={s.flex}>
          {selectedImage ? <img src={selectedImage} alt="Selected" className={s.image} /> :
            <img src={process.env.REACT_APP_IMAGE_BASE_URL + bannerInfo?.image} className={s.image} />
          }
          <input type="file" accept="image/*" onChange={handleImageChange} hidden ref={inputFileRef} />
          {/* @ts-ignore */}
          <SecondaryButton onClick={() => inputFileRef.current.click()} className={s.uploadLogo}>انتخاب عکس</SecondaryButton>
        </div>

        <div className={s.form}>
          <Formik
            initialValues={
              { ...bannerInfo, active: bannerInfo?.active ? 1 : 0 }
            }
            onSubmit={(value: any) => {
              handleSubmit(value)
            }}
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
              <Field name="sub_title">
                {({ field }: any) => (
                  <div className={s.inputBox}>
                    <div className={s.label}>زیر عنوان</div>
                    <input
                      type="text"
                      {...field}
                      placeholder="زیر عنوان"
                      className={s.input}
                    />
                  </div>
                )}
              </Field>
              <Field name="external_link">
                {({ field }: any) => (
                  <div className={s.inputBox}>
                    <div className={s.label}>لینک</div>
                    <input
                      type="text"
                      {...field}
                      className={s.input}
                      placeholder="لینک"
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
              <Field name="position">
                {({ field }: any) => (
                  <div className={s.inputBox}>
                    <div className={s.label}>جایگاه</div>
                    <input
                      {...field}
                      className={s.input}
                      placeholder="جایگاه"
                    />
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

              <div className={s.btnBox}>
                <PrimaryButton type="submit" className={s.saveBtn} disabled={selectedFile === "" && editBannerMutation.isLoading}>
                  {
                    editBannerMutation.isLoading ? "درحال انجام" : "ویرایش"}
                </PrimaryButton>

                <SecondaryButton className={s.cancelBtn} onClick={() => toggle()} disabled={editBannerMutation.isLoading} >
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

export default EditBannerModal