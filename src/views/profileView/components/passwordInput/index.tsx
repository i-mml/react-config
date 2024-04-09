import React, { useState } from 'react'
import s from "../../profile.module.scss";

const PasswordInput = ({ field, placeholder }: any) => {
    const [inputType, setInputType] = useState("password")

    return (
        <div className={s.passowrdInput}>
            <input
                type={inputType}
                {...field}
                placeholder={placeholder || ""}
                className={s.input}
            />
            <div className={s.inputTypeButton} onClick={() => setInputType((prev: any) => (prev === "password" ? "text" : "password"))}>
                <img src={`/images/icons/${inputType === "password" ? "show" : "hidden"}.svg`} />
            </div>
        </div>
    )
}

export default PasswordInput