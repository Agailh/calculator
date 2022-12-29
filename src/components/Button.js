import "./Button.css";
import React, { useState } from "react";

const Button = ({ className, Value, onClick }) => {
  return (
    <button className={className} onClick={onClick}>
      {Value}
    </button>
  );
};

export default Button;
