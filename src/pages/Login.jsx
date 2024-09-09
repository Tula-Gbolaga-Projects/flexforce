import { useState } from "react";
import { Link } from "react-router-dom";
import { Button, Input } from "../components/UI";
import { useLocation, useNavigate } from "react-router-dom";
import Logo from "../assets/logo.png";
import { useDispatch } from "react-redux";
import { userLogin } from "../redux/slices";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [formError, setFormError] = useState("");
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const isAdmin = pathname === "/login/admin";
  const isAgency = pathname === "/login/agency";
  const isJobSeeker = pathname === "/login";
  const dispatch = useDispatch();

  const emailHandler = (x) => {
    setEmail(x.target.value);
  };

  const passwordHandler = (x) => {
    setPassword(x.target.value);
  };
  const submitFunc = (e) => {
    e.preventDefault();

    let redirectPath = "/jobseeker";
    if (isAdmin) {
      redirectPath = "/admin";
    }
    if (isAgency) {
      redirectPath = "/agency";
    }

    if (!email || !password) {
      setFormError("Ensure you enter Email and Password");
      return;
    }

    setFormError("");

    dispatch(userLogin({ userName: email, password }))
      .unwrap()
      .then((response) => {
        console.log(response);
        navigate(redirectPath);
      })
      .catch((error) => {
        const errorMsg = error?.errors?.[0]?.errorMessages?.toString();
        setFormError(errorMsg);
      });
  };

  return (
    <div className="bg-gray-100 px-2">
      <div className="flex items-center justify-center min-h-screen">
        <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
          <div className="flex justify-center mb-2">
            <img src={Logo} alt="cardimg" />
          </div>
          <h2 className="text-center text-[20px] font-bold mb-3">
            {`Login as ${
              isAdmin
                ? " an Admin"
                : isAgency
                ? "an Agency Staff"
                : isJobSeeker
                ? "a Job Seeker"
                : ""
            } `}
          </h2>
          <div className="flex justify-center my-3">
            {!isJobSeeker && (
              <Button
                title={"Jobseeker Login"}
                onClick={() => {
                  navigate("/login");
                }}
              />
            )}
            {!isAgency && (
              <Button
                title={"Agency Login"}
                onClick={() => {
                  navigate("/login/agency");
                }}
              />
            )}
            {!isAdmin && (
              <Button
                title={"Admin Login"}
                onClick={() => {
                  navigate("/login/admin");
                }}
              />
            )}
          </div>
          {(isAgency || isJobSeeker) && (
            <h3 className="text-center">
              Don't have an account?{" "}
              <Link
                to={`${
                  isJobSeeker
                    ? "/jobseeker/registration"
                    : isAgency
                    ? "/agency/registration"
                    : ""
                }`}
                className="text-blue-500"
              >
                Create Account
              </Link>
            </h3>
          )}
          {formError && <p className="text-center text-red-500">{formError}</p>}
          <form>
            <Input
              label={"Email"}
              type="email"
              placeholder={"Enter Email"}
              value={email}
              onChange={emailHandler}
            />
            <Input
              label={"Password"}
              type="password"
              placeholder={"Enter Passsword"}
              value={password}
              onChange={passwordHandler}
            />
            <p className="text-blue-500 italic">Forgot Password?</p>
            <div className="flex items-center justify-center my-2">
              <Button title="Sign In" onClick={submitFunc} />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
export { Login };
