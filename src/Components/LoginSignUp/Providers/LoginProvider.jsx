import React, { useState } from "react";

import { validateEmail } from "../../../utils/validator";
import Login from "../Login";

export default function LoginProvider({ onClose }) {
  const [show, setShow] = React.useState(false);
  const handleClick = () => setShow(!show);

  // email
  const [email, setEmail] = useState({ email: "", err: false });
  const handleEmailChange = (e) => {
    const value = e.target.value;
    setEmail({ email: value, err: validateEmail(value) });
  };
  const handleEmailBlur = () => {
    setEmail({ ...email, err: validateEmail(email.email) });
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
          handleEmailBlur,
        ]}
      />
    </>
  );
}
