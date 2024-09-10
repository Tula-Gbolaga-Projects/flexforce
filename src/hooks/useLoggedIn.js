import { loginKey, tokenKey } from "../utils/constants";
import { compareDiffInHours } from "../utils/dateHelpers";

const useLoggedIn = () => {
  const checkAuth = () => {
    const token = localStorage.getItem(tokenKey);
    const lastLogin = localStorage.getItem(loginKey);

    if (!token) {
      return false;
    }

    const TOKEN_DURATION_IN_HRS = 3;

    const diff = compareDiffInHours(new Date(), new Date(+lastLogin));

    return diff <= TOKEN_DURATION_IN_HRS;
  };

  return { checkAuth };
};

export { useLoggedIn };
