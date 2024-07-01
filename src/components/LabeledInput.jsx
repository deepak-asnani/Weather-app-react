import React from "react";

const LabeledInput = ({
  label = "Name",
  inputId = "name",
  inputType = "text",
  placeholder = "Enter your name",
  register,
  getValues,
  errors,
}) => {
  return (
    <div className="my-3">
      <label
        htmlFor={inputId}
        className="block text-white text-sm font-bold mb-2"
      >
        {label}
      </label>
      <input
        {...register(
          inputId,
          getValues
            ? {
                validate: (match) => {
                  const password = getValues("password");
                  return match === password || "Passwords should match!";
                },
              }
            : {}
        )}
        id={inputId}
        type={inputType}
        placeholder={placeholder}
        className="shadow appearance-none bg-transparent border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline"
      />
      {errors?.[inputId] && (
        <p className="text-red-600 m-1">{errors[inputId].message}</p>
      )}
    </div>
  );
};

export default LabeledInput;
