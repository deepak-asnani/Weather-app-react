import React from "react";

export const Button = ({
  buttonType,
  backgroundColor,
  textColor,
  label,
  style,
  onClick,
  disabled,
}) => {
  return (
    <button
      type={buttonType ?? "button"}
      className={`font-bold ${disabled ? "cursor-not-allowed" : "cursor-pointer"} ${backgroundColor ? (!disabled ? backgroundColor : "bg-gray-300") : ""} ${textColor && textColor} ${style && style}`}
      onClick={onClick}
      disabled={disabled}
    >
      {label}
    </button>
  );
};

// Button.propTypes = {
//   /**
//    * Is this the principal call to action on the page?
//    */
//   primary: PropTypes.bool,
//   /**
//    * What background color to use
//    */
//   backgroundColor: PropTypes.string,
//   /**
//    * How large should the button be?
//    */
//   size: PropTypes.oneOf(['small', 'medium', 'large']),
//   /**
//    * Button contents
//    */
//   label: PropTypes.string.isRequired,
//   /**
//    * Optional click handler
//    */
//   onClick: PropTypes.func,
// };

// Button.defaultProps = {
//   backgroundColor: null,
//   primary: false,
//   size: 'medium',
//   onClick: undefined,
// };
