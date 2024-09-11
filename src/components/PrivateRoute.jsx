import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useLoggedIn, useLogout } from "../hooks";
import { redirectKey } from "../utils/constants";

const PrivateRoute = ({ children }) => {
  const { logout } = useLogout();
  const { pathname } = useLocation();
  const { checkAuth } = useLoggedIn();
  const navigate = useNavigate();

  const valid = checkAuth();

  useEffect(() => {
    if (!valid) {
      localStorage.setItem(redirectKey, pathname);
      logout();
      navigate("/");
    }
  }, [valid, logout, pathname]);

  if (valid) {
    return <div>{children}</div>;
  } else {
    // return null;
  }
};

export { PrivateRoute };
