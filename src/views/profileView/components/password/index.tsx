import React, { useState } from "react";
import s from "../../profile.module.scss";
import { Field, Form, Formik } from "formik";
import { toast } from "react-toastify";
import { putCompanyChangePassword } from "../../../../api/services/company";
import { useMutation } from "react-query";
import { CompanyChangePassword } from "../../../../types/api/company";
import { useNavigate } from "react-router-dom";
import PasswordInput from "../passwordInput";
interface InitialValues {
  currentPassword: string,
  newPassword: string,
  confirm: string
}

const PasswordTab = () => {
  const initialValues: InitialValues = {
    confirm: "",
    currentPassword: "",
    newPassword: ""
  }

  const navigate = useNavigate()
  const mutation = useMutation((e: CompanyChangePassword) => putCompanyChangePassword(e));

  const handleChangePassword = async (value: InitialValues) => {
    if (
      value.confirm !== value.newPassword
    ) {
      toast.error("رمز عبور جدید و تکرار آن تطابق ندارند", { position: "top-right" })
      return
    }

    mutation.mutate({ new_password: value.newPassword, old_password: value.currentPassword }, {
      onSuccess: () => {
        navigate("/login")
      },
    })
  }

  return (
    <div className={s.passwordContainer}>
      <div className={s.form}>
        <Formik
          initialValues={initialValues}
          onSubmit={handleChangePassword}
        >
          <Form className={s.formBody}>
            <Field name="currentPassword">
              {({ field }: any) => (
                <div className={s.inputBox}>
                  <div className={s.label}>رمز عبور فعلی</div>
                  <PasswordInput field={field} placeholder="رمز عبور فعلی خود را وارد کنید." />
                </div>
              )}
            </Field>

            <Field name="newPassword">
              {({ field }: any) => (
                <div className={s.inputBox}>
                  <div className={s.label}>رمز عبور جدید</div>
                  <PasswordInput field={field} placeholder="رمز عبور جدید خود را وارد کنید." />
                </div>
              )}
            </Field>

            <Field name="confirm">
              {({ field }: any) => (
                <div className={s.inputBox}>
                  <div className={s.label}>تکرار رمز عبور جدید</div>
                  <PasswordInput field={field} placeholder="رمز عبور جدید خود را تکرار کنید." />
                </div>
              )}
            </Field>

            <div className={s.btnBox}>
              <button type="submit" className={s.saveBtn}>
                ثبت
              </button>
              <button className={s.cancelBtn} onClick={() => navigate("/")}>
                لغو
              </button>
            </div>
          </Form>
        </Formik>
      </div>
    </div>
  );
};

export default PasswordTab;
