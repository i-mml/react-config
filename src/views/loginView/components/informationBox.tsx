import React, { useState, } from "react";
import { Field, Form, Formik } from "formik";
import s from "../login.module.scss";
import * as Yup from "yup";
import { useNavigate } from "react-router-dom";
import { LoginService, } from "../../../api/services/auth";
import { LoginFields } from "../../../types/api/auth";
import { useMutation } from "react-query";
import { setToken } from "../../../redux/reducers/auth";
import { useDispatch } from "react-redux";
import Cookies from "js-cookie";

const loginSchema = Yup.object().shape({
  number: Yup.string().required("نام کاربری خود را وارد کنید"),
  password: Yup.string().required("رمز خود را وارد کنید"),
});
const InformationBox = () => {
  const dispatch = useDispatch()

  const mutation = useMutation((e: LoginFields) => LoginService(e).then((res) => {
    Cookies.set("ems-token", res?.payload?.access_token, { path: "/" })
    dispatch(setToken(res));
    navigate("/", { replace: true });
  }
  ));
  const navigate = useNavigate()


  const [type, setType] = useState("password");

  const handleToggle = () => {
    setType(type === "password" ? "text" : "password");
  };

  const handleSubmit = (e: LoginFields) => {
    mutation.mutate(e);
  }

  return (
    <div className={s.informationBoxContainer}>
      <div className={s.logoBox}>

        <img src="/images/icons/sidebar_icon.svg" alt="Logo" className={s.logoImg} />
        <div className={s.logoText}>نت پورت</div>
      </div>

      <div className={s.form}>
        <div className={s.welcome}>به نت پورت خوش آمدید.</div>
        <Formik
          initialValues={{
            number: "",
            password: "",
          }}
          onSubmit={handleSubmit}
          validationSchema={loginSchema}

        >
          {({ errors, touched }) => (
            <Form className={s.formContainer}>
              <div className={s.loginInputBox}>
                <div className={s.userNameField}>
                  <img
                    src="/images/icons/user.svg"
                    alt="user-icon"
                    className={s.icon}
                  />
                  <Field
                    name="number"
                    placeholder="نام کاربری"
                    className={s.userName}
                  />
                  {errors.number && touched.number ? (
                    <div className={s.error}>{errors.number}</div>
                  ) : null}
                </div>

                <div className={s.line}></div>

                <div className={s.passwordField}>
                  <img
                    src="/images/icons/lock.svg"
                    alt="lock-icon"
                    className={s.icon}
                  />
                  <Field
                    id="password"
                    name="password"
                    type={type}
                    placeholder="رمز عبور"
                    className={s.password}
                  />
                  <img
                    id="eye"
                    src={`/images/icons/eye${type === "password" ? "" : "-off"}.svg`}
                    alt="eye-icon"
                    className={s.eye}
                    onClick={handleToggle}
                  />
                  {errors.password && touched.password ? (
                    <div className={s.error}>{errors.password}</div>
                  ) : null}


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
