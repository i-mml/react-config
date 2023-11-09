import React from "react";
import s from "../../profile.module.scss";
import { Field, Form, Formik } from "formik";

const UserInformationTab = () => {
  return (
    <div className={s.userInformationContainer}>
      <div className={s.topBox}>
        <div className={s.titleBox}>
          <img
            src="/images/icons/editor-icon.png"
            alt="editor icon"
            className={s.editedIcon}
          />
          <span className={s.topBoxTitle}>شرکت پردازش داده</span>
        </div>
        <button className={s.uploadLogo}>آپلود لوگو</button>
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
                    placeholder="سارا احمدی"
                    className={s.input}
                  />
                </div>
              )}
            </Field>

            <Field name="role">
              {({ field }: any) => (
                <div className={s.inputBox}>
                  <div className={s.label}>نقش</div>
                  {/* <input
                    type="text"
                    {...field}
                    placeholder="مدیر"
                    className={s.input}
                  /> */}
                  <select
                    className={s.select}
                    {...field}
                    defaultValue="1"
                    defaultChecked="1"
                  >
                    <option value={1}>مدیر</option>
                    <option value={2}>کارمند</option>
                    <option value={3}>ادمین</option>
                  </select>
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
                    placeholder="saraah@gmail.com"
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
    </div>
  );
};

export default UserInformationTab;
