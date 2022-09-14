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
  } else if (!validator.isLength(name, { min: 2, max: 255 })) {
    return "نام باید بین 2 تا 255 حرف باشد.";
  }
  return false;
};

export const validatePassword = (password) => {
  if (validator.isEmpty(password)) {
    return "رمز عبور نمیتواند خالی باشد.";
  } else if (validator.isLength(password, { max: 7 })) {
    return "رمز عبور باید حداقل شامل 8 کارکتر باشد.";
  } else if (validator.isLength(password, { min: 255 })) {
    return "رمز عبور نمیتواند بیشتر از 255 کارکتر باشد.";
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

export const validatePrice = (price) => {
  if (validator.isEmpty(price)) {
    return "قیمت نمیتواند خالی باشد.";
  } else if (!validator.isNumeric(price)) {
    return "لطفا در وارد کردن قیمت فقط از اعداد استفاده کنید";
  } else if (price < 0) {
    return "قیمت نمیتواند منفی باشد.";
  } else if (validator.isLength(price, { min: 255, max: 1 })) {
    return "قیمت خارج از محدوده است";
  }
  return false;
};

export const validateAmount = (amount) => {
  if (validator.isEmpty(amount)) {
    return "تعداد/وزن نمیتواند خالی باشد.";
  } else if (!validator.isNumeric(amount)) {
    return "لطفا در وارد کردن تعداد/وزن فقط از اعداد استفاده کنید";
  } else if (amount < 0) {
    return "تعداد/وزن نمیتواند منفی باشد.";
  }
  return false;
};
