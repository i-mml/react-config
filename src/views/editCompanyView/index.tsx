import React, { useEffect, useRef, useState } from "react";
import s from "./style.module.scss";
import { Field, Form, Formik } from "formik";
import { useMutation, useQuery } from "react-query";
import { useNavigate } from "react-router-dom";
import { getCompanyById, postCompanyCreate, putCompanyEdit } from "../../api/services/company";

import PrimaryButton from "../../components/buttons/primaryButton";
import SecondaryButton from "../../components/buttons/secondaryButton";
import TitleBox from "../dashboardView/components/titleBox";
import { postAdminRegister } from "../../api/services/admin";
import { toast } from "react-toastify";
import { patchPlanActive, postPlanCreate } from "../../api/services/plan";
import { Spinner } from "reactstrap";

const EditCompnayView = ({ data, plans, id, reloadData, loading }: any) => {
    const navigate = useNavigate()
    const createNewCompanyMutation = useMutation((e: any) => putCompanyEdit(e).then(res => { handleCreateAdmin(id) }).catch(err => err));
    const createNewAdminMutation = useMutation((e: any) => postAdminRegister(e).catch(err => err));
    const createNewItManMutation = useMutation((e: any) => postAdminRegister(e).then(() => { toast.success("ایجاد شرکت و ادمین ها با موفقیت انجام شد.") }).catch(err => err));
    const createPlanMutation = useMutation((e: any) => postPlanCreate(e).then(() => { toast.success("پلن با موفقیت آپلود شد.") }).catch(err => err));

    const [selectedImage, setSelectedImage] = useState(null);
    const [selectedFile, setSelectedFile] = useState("");
    const [selectedPlanFiles, setSelectedPlanFiles] = useState<any>([]);
    const [previews, setPreviews] = useState<any>([]);
    const [title, setTitle] = useState(data?.data?.title || "")

    const inputFileRef = useRef(null);
    const inputPlaneRef = useRef(null);
    const formRef = useRef<any>(null);

    const role2Data = data?.admins?.find((item: any) => item?.role_id === 2)
    const role3Data = data?.admins?.find((item: any) => item?.role_id === 3)


    const handleImageChange = (event: any) => {
        if (event.target.files && event.target.files[0]) {
            setSelectedFile(event.target.files[0])
            // @ts-ignore
            setSelectedImage(URL.createObjectURL(event.target.files[0]));
        }
    };

    const handleCreateAdmin = async (company_id: any) => {
        const values = formRef?.current?.values

        selectedPlanFiles?.map((item: any, index: number) => {
            const planCreateBody = new FormData()
            planCreateBody.append("company_id", company_id)
            planCreateBody.append("position", `${index + 1}`)
            planCreateBody.append("image", item)
            planCreateBody.append("title", values?.[`plan_title_${index}`])
            createPlanMutation.mutate(planCreateBody)
        })
    }

    const handleSubmit = async (values: any) => {
        const formData = new FormData()
        formData.append("id", id)
        formData.append("title", title || data?.data?.title)
        formData.append("ems_token", data?.data?.ems_token)
        formData.append("english_name", values?.english_name)
        formData.append("description", values?.description)
        formData.append("sub_title", values?.sub_title)
        formData.append("sub_scription", values?.sub_scription)
        formData.append("ping_device_id", values?.ping_device_id)
        formData.append("graph_device_id", values?.graph_device_id)
        formData.append("health_device_id_1", values?.health_device_id_1)
        formData.append("health_device_id_2", values?.health_device_id_2)
        formData.append("health_device_id_3", values?.health_device_id_3)
        formData.append("health_device_id_4", values?.health_device_id_4)
        formData.append("health_device_id_5", values?.health_device_id_5)
        formData.append("health_device_id_6", values?.health_device_id_6)
        formData.append("health_device_id_7", values?.health_device_id_7)
        formData.append("health_device_id_8", values?.health_device_id_8)
        formData.append("health_device_id_9", values?.health_device_id_9)
        formData.append("health_device_id_10", values?.health_device_id_10)
        formData.append("active", values?.active)

        formData.append("logo", selectedFile !== "" ? selectedFile : data?.data?.logo)


        await createNewCompanyMutation.mutate(formData)
    }

    const selectFiles = (event: any) => {
        setSelectedPlanFiles([...event.target.files]);
    };

    const handleDeletePlan = async (id: number) => {
        await patchPlanActive(id)?.then(() => reloadData())
    }

    useEffect(() => {
        const fileReaders = selectedPlanFiles.map((file: any, index: number) => {
            const reader = new FileReader();
            reader.onloadend = () => {
                setPreviews((prevPreviews: any) => [...prevPreviews, reader.result]);
            };
            reader.readAsDataURL(file);
            return reader;
        });

        return () => {
            fileReaders.forEach((reader: any) => {
                if (reader.readyState === 1) {
                    reader.abort();
                }
            });
        };
    }, [selectedPlanFiles]);

    if (
        loading
    ) return <div className={s.userInformationContainer}>
        <div className={s.loadingBox}>
            <Spinner color='info' />
        </div>
    </div>
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
                    initialValues={{
                        ...data?.data,
                        sub_scription: Number(data?.data?.sub_scription),

                    }}
                    innerRef={formRef}
                    onSubmit={(value: any) => {
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
                        <Field name="sub_scription">
                            {({ field }: any) => (
                                <div className={s.inputBox}>
                                    <div className={s.label}>مبلغ تمدید</div>
                                    <input
                                        type="number"
                                        {...field}
                                        placeholder="مبلغ تمدید"
                                        className={s.input}
                                    />
                                </div>
                            )}
                        </Field>
                        <Field name="graph_device_id">
                            {({ field }: any) => (
                                <div className={s.inputBox}>
                                    <div className={s.label}>graph_device_id</div>
                                    <input
                                        {...field}
                                        className={s.input}
                                        placeholder="id 1"
                                    />
                                </div>
                            )}
                        </Field>
                        <Field name="ping_device_id">
                            {({ field }: any) => (
                                <div className={s.inputBox}>
                                    <div className={s.label}>ping_device_id</div>
                                    <input
                                        {...field}
                                        className={s.input}
                                        placeholder="id 2"
                                    />
                                </div>
                            )}
                        </Field>
                        <Field name="health_device_id_1">
                            {({ field }: any) => (
                                <div className={s.inputBox}>
                                    <div className={s.label}>health_device_id_1</div>
                                    <input
                                        {...field}
                                        className={s.input}
                                        placeholder="number"
                                    />
                                </div>
                            )}
                        </Field>
                        <Field name="health_device_id_2">
                            {({ field }: any) => (
                                <div className={s.inputBox}>
                                    <div className={s.label}>health_device_id_2</div>
                                    <input
                                        {...field}
                                        className={s.input}
                                        placeholder="number"
                                    />
                                </div>
                            )}
                        </Field>
                        <Field name="health_device_id_3">
                            {({ field }: any) => (
                                <div className={s.inputBox}>
                                    <div className={s.label}>health_device_id_3</div>
                                    <input
                                        {...field}
                                        className={s.input}
                                        placeholder="number"
                                    />
                                </div>
                            )}
                        </Field>
                        <Field name="health_device_id_4">
                            {({ field }: any) => (
                                <div className={s.inputBox}>
                                    <div className={s.label}>health_device_id_4</div>
                                    <input
                                        {...field}
                                        className={s.input}
                                        placeholder="number"
                                    />
                                </div>
                            )}
                        </Field>
                        <Field name="health_device_id_5">
                            {({ field }: any) => (
                                <div className={s.inputBox}>
                                    <div className={s.label}>health_device_id_5</div>
                                    <input
                                        {...field}
                                        className={s.input}
                                        placeholder="number"
                                    />
                                </div>
                            )}
                        </Field>
                        <Field name="health_device_id_6">
                            {({ field }: any) => (
                                <div className={s.inputBox}>
                                    <div className={s.label}>health_device_id_6</div>
                                    <input
                                        {...field}
                                        className={s.input}
                                        placeholder="number"
                                    />
                                </div>
                            )}
                        </Field>
                        <Field name="health_device_id_7">
                            {({ field }: any) => (
                                <div className={s.inputBox}>
                                    <div className={s.label}>health_device_id_7</div>
                                    <input
                                        {...field}
                                        className={s.input}
                                        placeholder="number"
                                    />
                                </div>
                            )}
                        </Field>
                        <Field name="health_device_id_8">
                            {({ field }: any) => (
                                <div className={s.inputBox}>
                                    <div className={s.label}>health_device_id_8</div>
                                    <input
                                        {...field}
                                        className={s.input}
                                        placeholder="number"
                                    />
                                </div>
                            )}
                        </Field>
                        <Field name="health_device_id_9">
                            {({ field }: any) => (
                                <div className={s.inputBox}>
                                    <div className={s.label}>health_device_id_9</div>
                                    <input
                                        {...field}
                                        className={s.input}
                                        placeholder="number"
                                    />
                                </div>
                            )}
                        </Field>
                        <Field name="health_device_id_10">
                            {({ field }: any) => (
                                <div className={s.inputBox}>
                                    <div className={s.label}>health_device_id_10</div>
                                    <input
                                        {...field}
                                        className={s.input}
                                        placeholder="number"
                                    />
                                </div>
                            )}
                        </Field>
                        <Field name="active">
                            {({ field }: any) => (
                                <div className={s.inputBox}>
                                    <div className={s.label}>وضعیت شرکت</div>
                                    <select
                                        className={s.select}
                                        {...field}
                                    >
                                        <option value="true" defaultChecked>فعال</option>
                                        <option value="false">غیرفعال</option>
                                    </select>
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

                        {/* upload plan images */}
                        <div className={s.label}>تصویر پلن‌</div>
                        <div className="w-100 flex">
                            <input type="file" multiple accept="image/*" onChange={selectFiles} hidden ref={inputPlaneRef} />
                            {/* @ts-ignore */}
                            <PrimaryButton onClick={() => inputPlaneRef.current.click()}
                                type="button"
                                className={s.uploadPlanBtn}
                            >
                                آپلود پلن شرکت
                            </PrimaryButton>
                        </div>
                        <div className={s.selectedPlanImageList} >
                            {plans?.map((item: any, index: number) => (
                                <div className={s.planBox}>
                                    <img key={index} src={process.env.REACT_APP_IMAGE_BASE_URL + item?.plan?.image} alt="preview" className={s.selectedPlanImage} />
                                    <div className={s.planName}>
                                        {item?.plan?.title}
                                    </div>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24"
                                        onClick={() => handleDeletePlan(item?.plan?.ID)}
                                    ><path fill="red" d="M6 19a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V7H6zM8 9h8v10H8zm7.5-5l-1-1h-5l-1 1H5v2h14V4z" /></svg>
                                </div>
                            ))}
                            {previews.map((preview: any, index: number) => (
                                <div className={s.uploadImageBox}>
                                    <img key={index} src={preview} alt="preview" className={s.selectedPlanImage} />
                                    <Field name={`plan_title_${index}`}>
                                        {({ field }: any) => (
                                            <div className={`${s.inputBox} ${s.mapNameInputBox}`}>
                                                <div className={s.label}>عنوان نقشه</div>
                                                <input
                                                    {...field}
                                                    className={s.input}
                                                    placeholder="عنوان نقشه"
                                                />
                                            </div>
                                        )}
                                    </Field>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24"
                                        onClick={() => setPreviews((prev: any) => (prev?.filter((node: any, nodeIndex: number) => nodeIndex !== index)))}
                                    ><path fill="red" d="M6 19a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V7H6zM8 9h8v10H8zm7.5-5l-1-1h-5l-1 1H5v2h14V4z" /></svg>
                                </div>
                            ))}
                        </div>

                        {/* <div style={{ width: "100%", marginBottom: "32px" }}>
                            <TitleBox title="اطلاعات مدیرعامل شرکت" />
                        </div>
                        <Field name="first_name">
                            {({ field }: any) => (
                                <div className={s.inputBox}>
                                    <div className={s.label}>نام</div>
                                    <input
                                        type="text"
                                        {...field}
                                        className={s.input}
                                        placeholder="نام"
                                    />
                                </div>
                            )}
                        </Field>
                        <Field name="last_name">
                            {({ field }: any) => (
                                <div className={s.inputBox}>
                                    <div className={s.label}>نام خانوادگی</div>
                                    <input
                                        type="text"
                                        {...field}
                                        className={s.input}
                                        placeholder="نام خانوادگی"
                                    />

                                </div>
                            )}
                        </Field>
                        <Field name="mobile">
                            {({ field }: any) => (
                                <div className={s.inputBox}>
                                    <div className={s.label}>شماره همراه</div>
                                    <input
                                        {...field}
                                        className={s.input}
                                        placeholder="شماره همراه"
                                    />
                                </div>
                            )}
                        </Field>
                        <Field name="national_code">
                            {({ field }: any) => (
                                <div className={s.inputBox}>
                                    <div className={s.label}>کد ملی</div>
                                    <input
                                        {...field}
                                        className={s.input}
                                        placeholder="کد ملی"
                                    />
                                </div>
                            )}
                        </Field>
                        <Field name="email">
                            {({ field }: any) => (
                                <div className={s.inputBox}>
                                    <div className={s.label}>ایمیل</div>
                                    <input
                                        {...field}
                                        className={s.input}
                                        placeholder="ایمیل"
                                        type="email"
                                    />
                                </div>
                            )}
                        </Field>
                        <Field name="password">
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

                        <div style={{ width: "100%", marginBottom: "32px" }}>
                            <TitleBox title="اطلاعات مدیر فنی" />
                        </div>
                        <Field name="it_first_name">
                            {({ field }: any) => (
                                <div className={s.inputBox}>
                                    <div className={s.label}>نام</div>
                                    <input
                                        type="text"
                                        {...field}
                                        className={s.input}
                                        placeholder="نام"
                                    />
                                </div>
                            )}
                        </Field>
                        <Field name="it_last_name">
                            {({ field }: any) => (
                                <div className={s.inputBox}>
                                    <div className={s.label}>نام خانوادگی</div>
                                    <input
                                        type="text"
                                        {...field}
                                        className={s.input}
                                        placeholder="نام خانوادگی"
                                    />

                                </div>
                            )}
                        </Field>
                        <Field name="it_mobile">
                            {({ field }: any) => (
                                <div className={s.inputBox}>
                                    <div className={s.label}>شماره همراه</div>
                                    <input
                                        {...field}
                                        className={s.input}
                                        placeholder="شماره همراه"
                                    />
                                </div>
                            )}
                        </Field>
                        <Field name="it_national_code">
                            {({ field }: any) => (
                                <div className={s.inputBox}>
                                    <div className={s.label}>کد ملی</div>
                                    <input
                                        {...field}
                                        className={s.input}
                                        placeholder="کد ملی"
                                    />
                                </div>
                            )}
                        </Field>
                        <Field name="it_email">
                            {({ field }: any) => (
                                <div className={s.inputBox}>
                                    <div className={s.label}>ایمیل</div>
                                    <input
                                        {...field}
                                        className={s.input}
                                        placeholder="ایمیل"
                                        type="email"
                                    />
                                </div>
                            )}
                        </Field>
                        <Field name="it_password">
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

                        <div style={{ width: "100%", marginBottom: "32px" }}>
                            <TitleBox title="اطلاعات کارمند" />
                        </div>
                        <Field name="employee_first_name">
                            {({ field }: any) => (
                                <div className={s.inputBox}>
                                    <div className={s.label}>نام</div>
                                    <input
                                        type="text"
                                        {...field}
                                        className={s.input}
                                        placeholder="نام"
                                    />
                                </div>
                            )}
                        </Field>
                        <Field name="employee_last_name">
                            {({ field }: any) => (
                                <div className={s.inputBox}>
                                    <div className={s.label}>نام خانوادگی</div>
                                    <input
                                        type="text"
                                        {...field}
                                        className={s.input}
                                        placeholder="نام خانوادگی"
                                    />

                                </div>
                            )}
                        </Field>
                        <Field name="employee_mobile">
                            {({ field }: any) => (
                                <div className={s.inputBox}>
                                    <div className={s.label}>شماره همراه</div>
                                    <input
                                        {...field}
                                        className={s.input}
                                        placeholder="شماره همراه"
                                    />
                                </div>
                            )}
                        </Field>
                        <Field name="employee_national_code">
                            {({ field }: any) => (
                                <div className={s.inputBox}>
                                    <div className={s.label}>کد ملی</div>
                                    <input
                                        {...field}
                                        className={s.input}
                                        placeholder="کد ملی"
                                    />
                                </div>
                            )}
                        </Field>
                        <Field name="employee_email">
                            {({ field }: any) => (
                                <div className={s.inputBox}>
                                    <div className={s.label}>ایمیل</div>
                                    <input
                                        {...field}
                                        className={s.input}
                                        placeholder="ایمیل"
                                        type="email"
                                    />
                                </div>
                            )}
                        </Field>
                        <Field name="employee_password">
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
                        </Field> */}

                        <div className={s.btnBox}>
                            <PrimaryButton type="submit" className={s.saveBtn} disabled={selectedFile === "" && createNewCompanyMutation.isLoading || createNewAdminMutation.isLoading}>
                                {
                                    createNewAdminMutation.isLoading || createNewCompanyMutation.isLoading ? <img src='/images/icons/loadingLines.svg' /> : "ثبت"}
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
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
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

export default EditCompnayView;
