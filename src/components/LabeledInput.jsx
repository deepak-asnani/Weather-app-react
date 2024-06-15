import React from "react";

const LabeledInput = ({ label, inputId, inputType, placeholder, register }) => {
  return (
    <div className="my-3">
      <label
        htmlFor={inputId}
        className="block text-white text-sm font-bold mb-2"
      >
        {label}
      </label>
      <input
        {...register(inputId)}
        id={inputId}
        type={inputType}
        placeholder={placeholder}
        className="shadow appearance-none bg-transparent border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline"
      />
    </div>
  );
};

export default LabeledInput;
