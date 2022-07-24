import React, { useState } from "react";

import { validateEmail, validatePassword } from "../../../utils/validator";
import Login from "../Login";

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

  // submit
  const [disableSubmit, setDistableSubmit] = useState(false);
  const [toastErrors, setToastErrors] = useState([]);

  const handleSubmit = (e) => {
    console.log('submit emmited')
    e.preventDefault();
    setDistableSubmit(true);
    let tmpErrors = [];
    if (validateEmail(email.email)) tmpErrors.push(validateEmail(email.email));
    if (validatePassword(password.password))
      tmpErrors.push(validatePassword(password.password));

    if (tmpErrors.length > 0) {
      setToastErrors(tmpErrors);
      setTimeout(() => {
        setToastErrors([]);
        setDistableSubmit(false);
      }, 3000);
    } else {
      setTimeout(() => {
        setToastErrors([]);
        // reset states
        setShow(false);
        setEmail({ email: "", err: false });
        setPassword({ password: "", err: false });
        setDistableSubmit(false);
      }, 3000);
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
        ]}
      />
    </>
  );
}
