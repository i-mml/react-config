import React, { useEffect, useRef, useState } from "react";
import s from "./style.module.scss";
import { Field, Form, Formik } from "formik";
import { useMutation, useQuery } from "react-query";
import { useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { getCompanyById, postCompanyCreate } from "../../api/services/company";
import { CompanyCreateFields } from "../../types/api/company";
import PrimaryButton from "../../components/buttons/primaryButton";
import SecondaryButton from "../../components/buttons/secondaryButton";
import TitleBox from "../dashboardView/components/titleBox";

const CreateCompnayView = () => {
    const navigate = useNavigate()
    const authData = useSelector((state: any) => state?.auth?.data)

    const { data } = useQuery("get-company-by-id", () => getCompanyById(authData?.admin?.company_Id));
    const createNewCompanyMutation = useMutation((e: any) => postCompanyCreate(e).catch(err => err));
    const [selectedImage, setSelectedImage] = useState(null);
    const [selectedFile, setSelectedFile] = useState("")
    const [role, setRole] = useState(data?.admin?.role)
    const inputFileRef = useRef(null);

    const [title, setTitle] = useState("")


    const handleImageChange = (event: any) => {
        if (event.target.files && event.target.files[0]) {
            setSelectedFile(event.target.files[0])
            // @ts-ignore
            setSelectedImage(URL.createObjectURL(event.target.files[0]));
        }
    };
    const handleSubmit = async (values: any) => {

        const formData = new FormData()
        formData.append("title", title)
        formData.append("ems_password", values?.ems_password)
        formData.append("ems_username", values?.ems_username)
        formData.append("english_name", values?.english_name)
        formData.append("description", values?.description)
        formData.append("sub_title", values?.sub_title)
        formData.append("logo", selectedFile)

        await createNewCompanyMutation.mutate(formData)
    }

    useEffect(() => {
        setRole(data?.admin?.role)
    }, [data?.admin?.role])

    return (
        <div className={s.userInformationContainer}>
            <TitleBox title="ایجاد شرکت جدید" />
            <div className={s.topBox}>
                <div className={s.titleBox}>
                    {selectedImage ? <img src={selectedImage} alt="Selected" className={s.selectedImage} /> :
                        <img
                            src={data?.data?.logo ? process.env.REACT_APP_IMAGE_BASE_URL + data?.data?.logo : "/images/icons/editor-icon.png"}
                            alt="editor icon"
                            className={s.editedIcon}
                        />
                    }

                    <input className={s.topBoxTitle} value={title} onChange={(e) => setTitle(e.target.value)} placeholder="عنوان شرکت" />
                </div>
                <input type="file" accept="image/*" onChange={handleImageChange} hidden ref={inputFileRef} />
                {/* @ts-ignore */}
                <button onClick={() => inputFileRef.current.click()} className={s.uploadLogo}>آپلود لوگو</button>
            </div>

            <div className={s.form}>
                <Formik
                    initialValues={{}}
                    onSubmit={(value: any) => {
                        console.log("submitted value", value)
                        handleSubmit(value)
                    }}
                >
                    <Form className={s.formBody}>
                        <Field name="english_name">
                            {({ field }: any) => (
                                <div className={s.inputBox}>
                                    <div className={s.label}>نام انگلیسی</div>
                                    <input
                                        type="text"
                                        {...field}
                                        placeholder="نام انگلیسی"
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

                        <Field name="ems_username">
                            {({ field }: any) => (
                                <div className={s.inputBox}>
                                    <div className={s.label}>نام کاربری</div>
                                    <input
                                        type="text"
                                        {...field}
                                        className={s.input}
                                        placeholder="نام کاربری"
                                    />
                                </div>
                            )}
                        </Field>
                        <Field name="ems_password">
                            {({ field }: any) => (
                                <div className={s.inputBox}>
                                    <div className={s.label}>رمز عبور</div>
                                    <input
                                        type="password"
                                        {...field}
                                        className={s.input}
                                        placeholder="رمز عبور"

                                    />
                                </div>
                            )}
                        </Field>
                        <Field name="description">
                            {({ field }: any) => (
                                <div className={s.textAreaBox}>
                                    <div className={s.label}>توضیحات</div>
                                    <textarea
                                        type="password"
                                        {...field}
                                        className={s.textarea}
                                        placeholder="توضیحات"
                                    />
                                </div>
                            )}
                        </Field>

                        <div className={s.btnBox}>
                            <PrimaryButton type="submit" className={s.saveBtn} disabled={selectedFile === "" && createNewCompanyMutation.isLoading}>
                                {
                                    createNewCompanyMutation.isLoading ? "درحال انجام" : "ایجاد"}
                            </PrimaryButton>

                            <SecondaryButton className={s.cancelBtn} onClick={() => navigate("/")} disabled={createNewCompanyMutation.isLoading} >
                                لغو
                            </SecondaryButton>

                        </div>
                    </Form>
                </Formik>
            </div>

            <div className={s.linksBox}>
                <div className={s.infoIcon}>
                    <svg
                        style={{ backgroundColor: "white" }}
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                    >
                        <path
                            d="M12 8V12M12 16H12.01M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12Z"
                            stroke="#007EFF"
                            stroke-width="2"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                        />
                    </svg>
                </div>
                <a href="/" className={s.rules}>
                    قوانین و مقررات
                </a>
            </div>
        </div >
    );
};

export default CreateCompnayView;
