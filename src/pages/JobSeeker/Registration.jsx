import { useState } from "react";
import { Link } from "react-router-dom";
import { Button, Input } from "../../components/UI";
import Logo from "../../assets/logo.png";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { jobSeekerCreation } from "../../redux/slices";

const Register = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { jobSeekerCreationStatus } = useSelector((state) => state?.user);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [formError, setFormError] = useState("");

  const firstNameHandler = (e) => {
    setFirstName(e.target.value);
  };

  const lastNameHandler = (e) => {
    setLastName(e.target.value);
  };

  const emailHandler = (e) => {
    setEmail(e.target.value);
  };

  const phoneHandler = (e) => {
    setPhone(e.target.value);
  };
  const pwdHandler = (e) => {
    setPassword(e.target.value);
  };
  const cpwdHandler = (e) => {
    setConfirmPassword(e.target.value);
  };
  const submitFunc = (e) => {
    e.preventDefault();
    if (
      !firstName ||
      !lastName ||
      !email ||
      !phone ||
      !password ||
      !confirmPassword
    ) {
      setFormError("Ensure all form fields are filled");
      return;
    }

    if (password !== confirmPassword) {
      setFormError(
        "Ensure your password and Confirm password inputs are the same"
      );
      return;
    }

    setFormError("");
    const data = {
      firstName,
      lastName,
      email,
      phoneNumber: phone,
      password,
    };
    console.log(data);
    dispatch(jobSeekerCreation(data))
      .unwrap()
      .then((response) => {
        setFirstName("");
        setLastName("");
        setEmail("");
        setPassword("");
        setConfirmPassword("");
        navigate("/login");
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
          <h2 className="text-center font-bold mb-6">
            Create your Job Seeker Account
          </h2>
          <div className="flex justify-center my-3">
            <Button
              title={"Agency Registration"}
              onClick={() => {
                navigate("/agency/registration");
              }}
            />
          </div>
          <h3 className="text-center">
            Already have an account?
            <Link to="/login" className="text-blue-500">
              {" "}
              Login{" "}
            </Link>
          </h3>
          {formError && <p className="text-center text-red-500">{formError}</p>}
          <form>
            <div className=" grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-2">
              <Input
                label={"First Name"}
                type="text"
                placeholder={"Enter Firstname"}
                value={firstName}
                onChange={firstNameHandler}
              />
              <Input
                label={"Last Name"}
                type="text"
                placeholder={"Enter Lastname"}
                value={lastName}
                onChange={lastNameHandler}
              />
              <Input
                label={"Phone Number"}
                type="number"
                placeholder={"Enter Phone Number"}
                value={phone}
                onChange={phoneHandler}
              />
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
                onChange={pwdHandler}
              />
              <Input
                label={"Confirm Password"}
                type="password"
                placeholder={"Retype Passsword"}
                value={confirmPassword}
                onChange={cpwdHandler}
              />
            </div>

            <div className="flex items-center justify-center my-2">
              <Button
                title="Sign Up"
                onClick={submitFunc}
                status={jobSeekerCreationStatus}
              />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
export { Register };
