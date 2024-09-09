import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { logout as appLogout } from "../redux/slices";

const useLogout = () => {
  const dispatch = useDispatch();
  let navigate = useNavigate();

  const logout = () => {
    localStorage.clear();
    dispatch(appLogout());
  };

  return { logout };
};

export { useLogout };
