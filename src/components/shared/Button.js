import React from "react";
import PropTypes from "prop-types";

const Button = ({ className, onClick, label, disabled }) => (
  <button
    className={`button ${className} ${disabled ? "is-disabled" : ""}`}
    onClick={onClick}
    type="button"
  >
    {label}
  </button>
);

Button.propTypes = {
  className: PropTypes.string,
  disabled: PropTypes.bool,
  label: PropTypes.string.isRequired,
  onClick: PropTypes.func,
};

Button.defaultProps = {
  className: "",
  disabled: false,
  onClick: () => {},
};

export default Button;
