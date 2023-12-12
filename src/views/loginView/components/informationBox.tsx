import React, { useState, useContext } from "react";
import { Field, Form, Formik } from "formik";
import s from "../login.module.scss";
import * as Yup from "yup";
import Cookies from "js-cookie";
import { useLocation, useNavigate } from "react-router-dom";
import { LoginService, } from "../../../api/services/auth";
import { LoginFields } from "../../../types/api/auth";
import { useMutation } from "react-query";
import { AuthContext } from "../../../api/context";

const loginSchema = Yup.object().shape({
  number: Yup.string().required("نام کاربری خود را وارد کنید"),
  password: Yup.string().required("رمز خود را وارد کنید"),
});

const InformationBox = () => {
  const { authValue, setAuthValue } = useContext(AuthContext);
  const location = useLocation()
  const mutation = useMutation((e: LoginFields) => LoginService(e).finally(() => navigate("/", { replace: true })));
  const navigate = useNavigate()

  console.log('auth', authValue)

  const [type, setType] = useState("password");

  const handleToggle = () => {
    setType(type === "password" ? "text" : "password");
  };

  const handleSubmit = (e: LoginFields) => {
    setAuthValue("this is token value in context")
    mutation.mutate(e);
  }

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
            number: "",
            password: "",
          }}
          onSubmit={handleSubmit}
          validationSchema={loginSchema}
        >
          {({ errors, touched }) => (
            <Form>
              <div className={s.loginInputBox}>
                <div className={s.userNameField}>
                  <Field
                    name="number"
                    placeholder="نام کاربری"
                    className={s.userName}
                  />
                  <img
                    src="/Images/Icons/user.svg"
                    alt="user-icon"
                    className={s.icon}
                  />
                  {errors.number && touched.number ? (
                    <div className={s.error}>{errors.number}</div>
                  ) : null}
                </div>

                <div className={s.line}></div>

                <div className={s.passwordField}>
                  <Field
                    id="password"
                    name="password"
                    type={type}
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

              <button type="submit" className={s.button} disabled={mutation.isLoading}>
                {
                  mutation.isLoading ? "درحال ورود" : "ورود"
                }
              </button>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
};

export default InformationBox;
