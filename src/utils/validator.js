import validator from "validator";

export const validateEmail = (email) => {
  if (validator.isEmpty(email)) {
    return "ایمیل نمیتواند خالی باشد.";
  } else if (!validator.isEmail(email)) {
    return "ایمیل صحیح نیست.";
  }
  return false;
};

export const validateName = (name) => {
  if (validator.isEmpty(name)) {
    return "نام نمیتواند خالی باشد.";
  }
  return false;
};

export const validatePassword = (password) => {
  if (validator.isEmpty(password)) {
    return "رمز عبور نمیتواند خالی باشد.";
  } else if (validator.isLength(password, { min: 1, max: 7 })) {
    return "رمز عبور باید حداقل شامل 8 کارکتر باشد.";
  } else if (validator.isLength(password, { min: 128 })) {
    return "رمز عبور نمیتواند بیشتر از 128 کارکتر باشد.";
  }
  return false;
};

export const validateRPassword = (password, rPassword) => {
  if (validator.isEmpty(rPassword)) {
    return "تکرار رمز عبور نمیتواند خالی باشد.";
  } else if (!validator.equals(password, rPassword)) {
    return "رمز عبور با تکرار آن یکسان نیست.";
  }
  return false;
};
