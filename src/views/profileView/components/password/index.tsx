import React from "react";
import s from "../../profile.module.scss";
import { Field, Form, Formik } from "formik";

const PasswordTab = () => {
  return (
    <div className={s.passwordContainer}>
      <div className={s.form}>
        <Formik
          initialValues={{}}
          onSubmit={() => {
            "success";
          }}
        >
          <Form className={s.formBody}>
            <Field name="current-password">
              {({ field }: any) => (
                <div className={s.inputBox}>
                  <div className={s.label}>رمز عبور فعلی</div>
                  <input
                    type="password"
                    {...field}
                    placeholder="رمز عبور فعلی خود را وارد کنید."
                    className={s.input}
                  />
                </div>
              )}
            </Field>

            <Field name="new-password">
              {({ field }: any) => (
                <div className={s.inputBox}>
                  <div className={s.label}>رمز عبور جدید</div>
                  <input
                    type="password"
                    {...field}
                    placeholder="رمز عبور جدید خود را وارد کنید."
                    className={s.input}
                  />
                </div>
              )}
            </Field>

            <Field name="repeat-new-password">
              {({ field }: any) => (
                <div className={s.inputBox}>
                  <div className={s.label}>تکرار رمز عبور جدید</div>
                  <input
                    type="password"
                    {...field}
                    placeholder="رمز عبور جدید خود را تکرار کنید."
                    className={s.input}
                  />
                </div>
              )}
            </Field>

            <div className={s.btnBox}>
              <button type="submit" className={s.saveBtn}>
                ثبت
              </button>
              <button type="submit" className={s.cancelBtn}>
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
