let accessToken;

export function setAccess(newToken) {
  accessToken = newToken;
}

export function getAccess() {
  return accessToken;
}
