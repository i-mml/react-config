import React, { useEffect, useRef, useState } from "react";
import s from "./style.module.scss";
import { Field, Form, Formik } from "formik";
import { useMutation, useQuery } from "react-query";
import { useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { getCompanyById } from "../../api/services/company";
import PrimaryButton from "../../components/buttons/primaryButton";
import SecondaryButton from "../../components/buttons/secondaryButton";
import TitleBox from "../dashboardView/components/titleBox";
import { getBannerAll, postBannerCreate } from "../../api/services/banner";

const CreateBannerView = () => {
    const navigate = useNavigate()
    const authData = useSelector((state: any) => state?.auth?.data)
    const { data } = useQuery("get-all-banners", getBannerAll)
    const createBannerMutation = useMutation((e: any) => postBannerCreate(e).then(() => navigate('/')).catch(err => err));
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
    const handleSubmit = async (values: any) => {
        const formData = new FormData()
        formData.append("title", values?.title)
        formData.append("sub_title", values?.sub_title)
        formData.append("position", data?.length + 1)
        formData.append("external_link", values?.external_link)
        formData.append("image", selectedFile)

        await createBannerMutation.mutate(formData)
    }


    return (
        <div className={s.userInformationContainer}>
            <TitleBox title="ایجاد شرکت جدید" />
            <div className={s.topBox}>
                <div className={s.titleBox}>
                    {selectedImage ? <img src={selectedImage} alt="Selected" className={s.selectedImage} /> :
                        <img
                            src={"/images/icons/editor-icon.png"}
                            alt="editor icon"
                            className={s.editedIcon}
                        />
                    }

                    <input className={s.topBoxTitle} disabled placeholder="تصویر بنر" />
                </div>
                <input type="file" accept="image/*" onChange={handleImageChange} hidden ref={inputFileRef} />
                {/* @ts-ignore */}
                <button onClick={() => inputFileRef.current.click()} className={s.uploadLogo}>آپلود لوگو</button>
            </div>

            <div className={s.form}>
                <Formik
                    initialValues={{}}
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
                        <Field name="position">
                            {({ field }: any) => (
                                <div className={s.inputBox}>
                                    <div className={s.label}>جایگاه</div>
                                    <input
                                        {...field}
                                        className={s.input}
                                        placeholder="جایگاه"
                                        disabled
                                        value={data?.length + 1}
                                    />
                                </div>
                            )}
                        </Field>
                        <div className={s.btnBox}>
                            <PrimaryButton type="submit" className={s.saveBtn} disabled={selectedFile === "" && createBannerMutation.isLoading}>
                                {
                                    createBannerMutation.isLoading ? "درحال انجام" : "ایجاد"}
                            </PrimaryButton>

                            <SecondaryButton className={s.cancelBtn} onClick={() => navigate("/")} disabled={createBannerMutation.isLoading} >
                                لغو
                            </SecondaryButton>

                        </div>
                    </Form>
                </Formik>
            </div>
        </div >
    );
};

export default CreateBannerView;
