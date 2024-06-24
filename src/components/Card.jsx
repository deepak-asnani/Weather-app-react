import React from "react";

const Card = ({ children }) => {
  return (
    <div className="bg-gray-800 rounded-lg shadow-[0_10px_10px_4px_rgba(0,0,0,0.5)] p-4">
      {children}
    </div>
  );
};

export default Card;
