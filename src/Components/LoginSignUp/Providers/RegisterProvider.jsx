import React, { useState } from "react";
import axios from "../../../api/axios";

import {
  validateName,
  validateEmail,
  validatePassword,
  validateRPassword,
} from "../../../utils/validator";
import Register from "../Register";

// eslint-disable-next-line react/prop-types
export default function RegisterProvider({ onClose }) {
  // show and hide password states
  const [showPassword, setShowPassword] = useState(false);
  const handleEyeClick = () => setShowPassword(!showPassword);
  const [showRPassword, setShowRepeatPassword] = useState(false);
  const handleSecondEyeClick = () => setShowRepeatPassword(!showRPassword);

  // name
  const [name, setName] = useState({ name: "", err: false });
  const handleNameChange = (e) => {
    const value = e.target.value;
    setName({ name: value, err: validateName(value) });
  };
  const handleNameBlur = () => {
    setName({ ...name, err: validateName(name.name) });
  };

  // email
  const [email, setEmail] = useState({ email: "", err: false });
  const handleEmailChange = (e) => {
    const value = e.target.value;
    setEmail({ email: value, err: validateEmail(value) });
  };
  const handleEmailBlur = () => {
    setEmail({ ...email, err: validateEmail(email.email) });
  };

  // password
  const [password, setPassword] = useState({ password: "", err: false });
  const handlePasswordChange = (e) => {
    const value = e.target.value;
    setPassword({ password: value, err: validatePassword(value) });
  };
  const handlePasswordBlur = () => {
    setPassword({ ...password, err: validatePassword(password.password) });
    setRPassword({
      ...rPassword,
      err: validateRPassword(password.password, rPassword.rPassword),
    });
  };

  // repeat password
  const [rPassword, setRPassword] = useState({ rPassword: "", err: false });
  const handleRPasswordChange = (e) => {
    const value = e.target.value;
    setRPassword({
      rPassword: value,
      err: validateRPassword(password.password, value),
    });
  };
  const handleRPasswordBlur = () => {
    setRPassword({
      ...rPassword,
      err: validateRPassword(password.password, rPassword.rPassword),
    });
  };

  const clearToastsErrorsAfter3sec = () => {
    setTimeout(() => {
      setToastErrors([]);
      setDisableSubmit(false);
    }, 3000);
  };

  // submit
  const [disableSubmit, setDisableSubmit] = useState(false);
  const [toastErrors, setToastErrors] = useState([]);
  const [success, setSuccess] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setDisableSubmit(true);
    let tmpErrors = [];
    if (validateName(name.name)) tmpErrors.push(validateName(name.name));
    if (validateEmail(email.email)) tmpErrors.push(validateEmail(email.email));
    if (validatePassword(password.password))
      tmpErrors.push(validatePassword(password.password));
    if (validateRPassword(password.password, rPassword.rPassword))
      tmpErrors.push(validateRPassword(password.password, rPassword.rPassword));

    if (tmpErrors.length > 0) {
      setToastErrors(tmpErrors);
      clearToastsErrorsAfter3sec();
    } else {
      const data = {
        name: name.name,
        email: email.email,
        password: password.password,
      };

      axios
        .post("/auth/register", data)
        .then((res) => {
          if (res.status === 200) {
            if (
              res.data.email &&
              res.data.email[0] === "The email has already been taken."
            ) {
              setToastErrors(["ایمیل قبلا در سیستم ثبت شده است"]);
              clearToastsErrorsAfter3sec();
            } else {
              setToastErrors([]);
              onClose();
              setSuccess(true);
            }
          }
        })
        .catch((err) => {
          setToastErrors(["عملیات ورود با خطا روبرو شد"]);
          clearToastsErrorsAfter3sec();
          setDisableSubmit(false);
          err && console.error(err);
        });
    }
  };

  return (
    <>
      <Register
        props={[
          onClose,
          showPassword,
          handleEyeClick,
          showRPassword,
          handleSecondEyeClick,
          name,
          handleNameChange,
          handleNameBlur,
          email,
          handleEmailChange,
          handleEmailBlur,
          password,
          handlePasswordChange,
          handlePasswordBlur,
          rPassword,
          handleRPasswordChange,
          handleRPasswordBlur,
          handleSubmit,
          toastErrors,
          success,
          setSuccess,
          disableSubmit,
        ]}
      />
    </>
  );
}
