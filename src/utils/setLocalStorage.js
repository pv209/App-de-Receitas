export function setTokensToLocalStorage() {
  localStorage.setItem('mealsToken', 1);
  localStorage.setItem('cocktailsToken', 1);
}

export function setEmailToLocalStorage(email) {
  localStorage.setItem('user', JSON.stringify({ email }));
}

export function getLocalStorage(storage) {
  let data = localStorage.getItem(storage);
  data = JSON.parse(data);
  if (data === null) return [];
  return data;
}
