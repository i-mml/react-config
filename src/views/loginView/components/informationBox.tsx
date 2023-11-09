import React, { useState } from "react";
import { Field, Form, Formik } from "formik";
import s from "../login.module.scss";
import * as Yup from "yup";

const loginSchema = Yup.object().shape({
  user_name: Yup.string().required("نام کاربری خود را وارد کنید"),
  password: Yup.string().required("رمز خود را وارد کنید"),
});

const InformationBox = () => {
  const [password, setPassword] = useState("");
  const [type, setType] = useState("password");

  const handleToggle = () => {
    if (type === "password") {
      setType("text");
    } else {
      setType("password");
    }
  };

  return (
    <div className={s.informationBoxContainer}>
      <div className={s.logoBox}>
        <div className={s.logoText}>نام برند و لوگو</div>
        <img src="/Images/logo.svg" alt="Logo" className={s.logoImg} />
      </div>

      <div className={s.form}>
        <div className={s.welcome}>.به سبیان خوش آمدید</div>
        <Formik
          initialValues={{
            user_name: "",
            password: "",
          }}
          onSubmit={() => {
            console.log("submit");
          }}
          validationSchema={loginSchema}
        >
          {({ errors, touched }) => (
            <Form>
              <div className={s.loginInputBox}>
                <div className={s.userNameField}>
                  <Field
                    name="user_name"
                    placeholder="نام کاربری"
                    className={s.userName}
                  />
                  <img
                    src="/Images/Icons/user.svg"
                    alt="user-icon"
                    className={s.icon}
                  />
                  {errors.user_name && touched.user_name ? (
                    <div className={s.error}>{errors.user_name}</div>
                  ) : null}
                </div>

                <div className={s.line}></div>

                <div className={s.passwordField}>
                  <Field
                    id="password"
                    name="password"
                    type={type}
                    value={password}
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                      setPassword(e.target.value)
                    }
                    placeholder="رمز عبور"
                    className={s.password}
                  />
                  <img
                    src="/Images/Icons/lock.svg"
                    alt="lock-icon"
                    className={s.icon}
                  />

                  {errors.password && touched.password ? (
                    <div className={s.error}>{errors.password}</div>
                  ) : null}

                  <img
                    id="eye"
                    src="/Images/Icons/eye.svg"
                    alt="eye-icon"
                    className={s.eye}
                    onClick={handleToggle}
                  />
                </div>
              </div>

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
