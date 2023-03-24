const emailRegex: RegExp = new RegExp(/\S+@\S+\.\S+/);
const phoneRegex: RegExp = new RegExp(/(84|0)+([0-9]{8,9})\b/);

export const emailValidator = (value: string) =>
  !value
    ? "Email field is required."
    : emailRegex.test(value)
    ? ""
    : "Email is not in a valid format.";
export const nameValidator = (value: string) =>
  !value
    ? "Full Name is required"
    : value.length < 7
    ? "Full Name should be at least 7 characters."
    : "";
export const phoneValidator = (value: string) =>
  !value
    ? "Phone number is required."
    : phoneRegex.test(value)
    ? ""
    : "Phone number must have 10 or 11 number.";

export const DateValidator = (value: string) =>
  value ? "" : "Birthday is required.";

export const requiredValidator = (value: string) =>
  value ? "" : "This field is required.";

export const addressValidator = (value: string) =>
  value ? "" : "Address is required.";
