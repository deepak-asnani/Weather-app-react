import React from "react";

const Card = ({ children, customStyles }) => {
  return (
    <div
      className={`bg-blue-200 dark:bg-gray-800 rounded-lg shadow-[0_10px_10px_4px_rgba(0,0,0,0.5)] w-full h-auto ${customStyles}`}
    >
      {children}
    </div>
  );
};

export default Card;
