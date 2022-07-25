import React, { useState } from "react";

import { validateEmail, validatePassword } from "../../../utils/validator";
import Login from "../Login";
import axios from "../../../api/axios";

export default function LoginProvider({ onClose }) {
  const [show, setShow] = React.useState(false);
  const handleClick = () => setShow(!show);

  // email
  const [email, setEmail] = useState({ email: "", err: false });
  const handleEmailChange = (e) => {
    const value = e.target.value;
    setEmail({ ...email, email: value });
  };

  // password
  const [password, setPassword] = useState({ password: "", err: false });
  const handlePasswordChange = (e) => {
    const value = e.target.value;
    setPassword({ ...password, password: value });
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
    if (validateEmail(email.email)) tmpErrors.push(validateEmail(email.email));
    if (validatePassword(password.password))
      tmpErrors.push(validatePassword(password.password));

    if (tmpErrors.length > 0) {
      setToastErrors(tmpErrors);
      clearToastsErrorsAfter3sec();
    } else {
      // TODO: save tokens
      // TODO: signup
      // TODO: logiur
      // TODO: check token
      const data = {
        email: email.email,
        password: password.password,
      };
      axios
        .post("/auth/login", data)
        .then((res) => {
          if (res.status === 200) {
            setToastErrors([]);
            onClose();
            setSuccess(true);
          }
        })
        .catch((err) => {
          if (err.response.status === 401) {
            setToastErrors(["ایمیل یا رمز عبور اشتباه است"]);
            clearToastsErrorsAfter3sec();
            setDisableSubmit(false);
          }
        });
    }
  };

  return (
    <>
      <Login
        props={[
          onClose,
          show,
          handleClick,
          email,
          handleEmailChange,
          password,
          handlePasswordChange,
          disableSubmit,
          toastErrors,
          handleSubmit,
          success,
          setSuccess,
        ]}
      />
    </>
  );
}
