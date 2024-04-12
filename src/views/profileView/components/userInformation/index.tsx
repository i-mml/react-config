import React, { useEffect, useRef, useState } from "react";
import s from "../../profile.module.scss";
import { Field, Form, Formik } from "formik";
import { putUserUpdate } from "../../../../api/services/user";
import { useMutation, useQuery } from "react-query";
import PrimaryButton from "../../../../components/buttons/primaryButton";
import SecondaryButton from "../../../../components/buttons/secondaryButton";
import { getCompanyById, putCompanyEdit } from "../../../../api/services/company";
import { useSelector } from "react-redux";
import { EditUserFields } from "../../../../types/api/user";
import { Link, useNavigate } from "react-router-dom";

const rolesTranslation: any = {
  0: "کارمند",
  1: "مدیرعامل",
  2: "مدیر",
  3: "ادمین"
}

const UserInformationTab = ({ data }: any) => {
  const navigate = useNavigate()
  const authData = useSelector((state: any) => state?.auth?.data)

  const updateUserMutation = useMutation((e: EditUserFields) => putUserUpdate(e));
  const updateLogoMutation = useMutation((e: any) => putCompanyEdit(e).then(res => window.location.reload()));


  const [selectedImage, setSelectedImage] = useState(null);
  const [selectedFile, setSelectedFile] = useState("")
  const [role, setRole] = useState(data?.admin?.role)
  const inputFileRef = useRef(null);


  const handleImageChange = (event: any) => {
    if (event.target.files && event.target.files[0]) {
      setSelectedFile(event.target.files[0])
      // @ts-ignore
      setSelectedImage(URL.createObjectURL(event.target.files[0]));
    }
  };
  const handleSubmit = async () => {
    const formData = new FormData()
    formData.append("logo", selectedFile)
    formData.append("id", authData?.admin?.company_Id)




    if (+data?.admin?.role !== +role) {
      updateUserMutation.mutate({
        user_id: authData?.admin?.user_id,
        role: role,
      })
    }
    if (selectedFile !== "") {
      updateLogoMutation.mutate(formData)
    }


  }

  useEffect(() => {
    setRole(data?.admin?.role)
  }, [data?.admin?.role])


  return (
    <div className={s.userInformationContainer}>
      <div className={s.topBox}>
        <div className={s.titleBox}>
          {selectedImage ? <img src={selectedImage} alt="Selected" className={s.selectedImage} /> :
            <img
              src={data?.data?.logo ? process.env.REACT_APP_IMAGE_BASE_URL + data?.data?.logo : "/images/icons/editor-icon.png"}
              alt="editor icon"
              className={s.editedIcon}
            />
          }

          <span className={s.topBoxTitle}>{data?.data?.title || "-"}</span>
        </div>
        <input type="file" accept="image/*" onChange={handleImageChange} hidden ref={inputFileRef} />
        {/* @ts-ignore */}
        <button onClick={() => inputFileRef.current.click()} className={s.uploadLogo}>آپلود لوگو</button>
      </div>

      <div className={s.form}>
        <Formik
          initialValues={{}}
          onSubmit={() => {
            "success";
          }}
        >
          <Form className={s.formBody}>
            <Field name="name">
              {({ field }: any) => (
                <div className={s.inputBox}>
                  <div className={s.label}>نام و نام خانوادگی</div>
                  <input
                    type="text"
                    {...field}
                    placeholder="نام"
                    className={s.input}
                    value={`${data?.admin?.first_name} ${data?.admin?.last_name}`}
                    disabled
                  />
                </div>
              )}
            </Field>

            <Field name="role">
              {({ field }: any) => (
                <div className={s.inputBox}>
                  <div className={s.label}>نقش</div>
                  <input
                    type="text"
                    {...field}
                    className={s.input}
                    value={rolesTranslation[role]}
                    disabled
                    onChange={(e) => setRole(e.target.value)}
                  />
                </div>
              )}
            </Field>

            <Field name="email">
              {({ field }: any) => (
                <div className={s.inputBox}>
                  <div className={s.label}>آدرس ایمیل</div>
                  <input
                    type="text"
                    {...field}
                    disabled
                    value={data?.admin?.email}
                    className={s.input}
                  />
                </div>
              )}
            </Field>

            <div className={s.btnBox}>
              <PrimaryButton type="button" className={s.saveBtn} onClick={handleSubmit} disabled={selectedFile === "" && role == data?.admin?.role}>
                {
                  updateUserMutation.isLoading || updateLogoMutation.isLoading ? <img src='/images/icons/loadingLines.svg' /> : "ثبت"}
              </PrimaryButton>

              <SecondaryButton className={s.cancelBtn} onClick={() => navigate("/")}>
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

export default UserInformationTab;
