export function emailVerification(email) {
  const regex = /\S+@\S+\.\S+/;
  const result = regex.test(email);
  return result;
}

export function passwordVerification(password) {
  const minimumPasswordLength = 6;
  return password.length >= minimumPasswordLength;
}
