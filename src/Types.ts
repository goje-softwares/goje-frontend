import React from "react";

export type func = () => void;
export type bool = boolean;
export type str = string;

export type eFunc = React.ChangeEvent<HTMLInputElement>;
export type submitFunc = React.FormEvent<HTMLFormElement>;
export type onClose = func;
export type showPassword = bool;
export type handleEyeClick = func;
export type showRPassword = boolean;
export type handleSecondEyeClick = func;
export type name = { name: string; err: string | false };
export type handleNameChange = func;
export type handleNameBlur = func;
export type email = { email: string; err: string | false };
export type handleEmailChange = func;
export type handleEmailBlur = func;
export type password = { password: string; err: string | false };
export type handlePasswordChange = func;
export type handlePasswordBlur = func;
export type rPassword = { rPassword: string; err: string | false };
export type handleRPasswordChange = func;
export type handleRPasswordBlur = func;
export type handleSubmit = func;
export type toastErrors = string[];
export type success = null | "success";
export type setSuccess = (status: bool) => void;
export type disableSubmit = bool;

export type Name = {
  name: str;
  err: str | bool;
};

export type ToastErrors = (string | boolean)[];

export type Email = {
  email: str;
  err: str | bool;
};

export type Password = {
  password: str;
  err: str | bool;
};

export type RPassword = {
  rPassword: str;
  err: str | bool;
};
