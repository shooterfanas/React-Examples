import React from "react";
import "./Button.css";

const style = ["btn--primary", "btn--outline"];
const sizes = ["btn--medium", "btn--mobile", "btn-large", "btn-wide"];
const color = ["primary", "blue", "red", "green"];

export const Button = ({
  children,
  type,
  onClick,
  buttonStyle,
  buttonSize,
  buttonColor,
}) => {
  const checkButtonStyle = style.includes(buttonStyle) ? buttonStyle : style[0];
  const checkButtonSize = sizes.includes(buttonSize) ? buttonSize : sizes[0];
  const checkButtonColor = color.includes(buttonColor) ? buttonColor : null;

  return (
    <button
      onClick={onClick}
      type={type}
      className={`btn ${checkButtonStyle} ${checkButtonSize} ${checkButtonColor}`}
    >
      {children}
    </button>
  );
};
