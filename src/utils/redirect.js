import { tokenKey } from "./constants";
export const redirectFunc = (error) => {
  console.log(error);

  if (error.response.status === 403 || error.response.status === 401) {
    localStorage.removeItem(tokenKey);
    window.location.replace(`${window.location.origin}/login`);
  }
};
