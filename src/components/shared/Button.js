import React from "react";
import PropTypes from "prop-types";

const Button = ({ onClick, label, className }) => (
  <button className={`button ${className}`} onClick={onClick} type="button">
    {label}
  </button>
);

Button.propTypes = {
  label: PropTypes.string.isRequired,
  className: PropTypes.string,
  onClick: PropTypes.func,
};

Button.defaultProps = {
  className: "",
  onClick: () => {},
};

export default Button;
