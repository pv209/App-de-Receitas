export function setTokensToLocalStorage() {
  localStorage.setItem('mealsToken', 1);
  localStorage.setItem('cocktailsToken', 1);
}

export function setEmailToLocalStorage(email) {
  localStorage.setItem('user', JSON.stringify({ email }));
}
