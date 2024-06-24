/* Sign up and Login Page */

import React, { useState, useEffect } from "react";
import LabeledInput from "../../components/LabeledInput";
import { useForm } from "react-hook-form";
import { loginUser, registerUser } from "../../apiUtils";
import { useMutation } from "@tanstack/react-query";
import { useNavigate, Navigate } from "react-router-dom";
import { Button } from "../../components/Button";
import { getJSONParsedData } from "../../helpers.js";
import { store } from "../../store/store.js";

const UserAuthentication = () => {
  const [isExistingUser, setIsExistingUser] = useState(false);
  const navigate = useNavigate();
  const { register, handleSubmit, reset, watch } = useForm();
  const authenticateUser = store((state) => {
    return state.authenticateUser;
  });

  const [isValidUser, setIsValidUser] = useState(false);

  let submitBtn = "Sign up";

  const emailInput = watch("email");
  const passwordInput = watch("password");
  const isSubmitBtnDisabled = !emailInput || !passwordInput;

  useEffect(() => {
    const isValid = getJSONParsedData("userAuth", "token");
    setIsValidUser(isValid);
  }, []);

  const { mutate, isPending, isError, error } = useMutation({
    mutationFn: isExistingUser ? loginUser : registerUser,
    onSuccess: (data) => {
      authenticateUser({ isValidUser: true, id: data.id, token: data.token });
      navigate("/weather");
    },
  });

  if (isValidUser) {
    return <Navigate to="/weather" />;
  }

  if (isPending) {
    submitBtn = "Loading...";
  } else if (isExistingUser) {
    submitBtn = "Log in";
  }

  const onSignUp = (data) => {
    mutate(data);
  };

  const toggleAuthenticationMode = () => {
    setIsExistingUser(!isExistingUser);
    reset();
  };

  return (
    <div className="w-full h-[100%] bg-gray-800 flex justify-center items-center">
      <div className="bg-gray-400 p-2 min-w-[300px] w-[60%] max-w-[500px] h-auto rounded">
        <div>
          <form onSubmit={handleSubmit(onSignUp)}>
            <h6 className="text-white font-bold text-lg text-center">
              {isExistingUser ? "Login" : "Sign up"}
            </h6>
            <LabeledInput
              register={register}
              label="Email"
              inputId="email"
              inputType="email"
              placeholder="Enter Your Email Address"
            />
            <LabeledInput
              register={register}
              label="Password"
              inputId="password"
              inputType="password"
              placeholder="Enter your password"
            />
            <Button
              backgroundColor={isPending ? "bg-gray-300" : "bg-yellow-300"}
              textColor="text-white"
              buttonType="submit"
              style={`w-full py-2 rounded `}
              label={submitBtn}
              disabled={isSubmitBtnDisabled}
            />
            {isError && (
              <p className="text-red-600">{error.response.data.error}</p>
            )}
          </form>
          <hr className="h-px my-2 bg-gray-200 border-0 dark:bg-gray-700" />
          <div className="text-center mt-4">
            <p className="text-white">
              {isExistingUser
                ? "Don't have an account ?"
                : "Already have an account ?"}
            </p>
            <Button
              textColor="text-yellow-300"
              label={isExistingUser ? "Sign up" : "Log in"}
              onClick={toggleAuthenticationMode}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserAuthentication;
