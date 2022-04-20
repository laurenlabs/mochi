import React from "react";

const TextField = ({ value, onChange, placeholder, icon }) => {
  return (
    <input
      value={value}
      // onChange={({ target: { value } }) => onChange(value)}
      icon={icon}
      placeholder={placeholder}
      onChange={onChange}
    />
  );
};

export default TextField;
