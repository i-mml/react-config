import React from "react";
import { Field, Form, Formik } from "formik";
import s from "../login.module.scss";

const InformationBox = () => {
  return (
    <div className={s.informationBoxContainer}>
      <div className={s.logoBox}>
        <div className={s.logoText}>نام برند و لوگو</div>
        <img src="/Images/logo.svg" alt="Logo" className={s.logoImg} />
      </div>
      <div className={s.form}>
        <Formik
          initialValues={{
            user_name: "",
            password: "",
          }}
          onSubmit={() => {
            console.log("submit");
          }}
        >
          {({ errors, touched }) => (
            <Form>
              <Field
                name="user_name"
                placeholder="نام کاربری"
                className={!errors.user_name ? s.field : s.errorField}
              />
              {errors.user_name && touched.user_name ? (
                <div className={s.error}>{errors.user_name}</div>
              ) : null}

              <Field
                name="password"
                type="password"
                placeholder="رمز عبور"
                className={s.password}
              />
              {errors.password && touched.password ? (
                <div className={s.error}>{errors.password}</div>
              ) : null}
              <button type="submit" className={s.button}>
                ورود
              </button>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
};

export default InformationBox;
