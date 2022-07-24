import React, { useState } from "react";

import {
  validateName,
  validateEmail,
  validatePassword,
  validateRPassword,
} from "../../../utils/validator";
import Register from "../Register";

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
  const [rPassword, setRPassword] = useState({
    rPassword: "",
    err: false,
  });
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
        ]}
      />
    </>
  );
}
