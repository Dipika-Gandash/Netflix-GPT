export const validateEmail = (email) => {
  if (!email) return "Email is required";
  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(
    email
  );
  if (!emailRegex) return "Invalid email format";
  return "";
};

export const validatePassword = (password) => {
  if (!password) return "Password is required";
  if (password.length < 6) return "Password must be at least 6 characters long";
  return "";
};

export const validateName = (name) => {
  if (!name) return "Name is required";
  if (name.length < 3) return "Name must be at least 3 characters long";
  return "";
};

export const validateForm = (values) => {
  const errors = {};

  const emailError = validateEmail(values.email);
  if (emailError) errors.email = emailError;

  const passwordError = validatePassword(values.password);
  if (passwordError) errors.password = passwordError;

  if (values.name !== undefined) {
    const nameError = validateName(values.name);
    if (nameError) errors.name = nameError;
  }

  return errors;
};
