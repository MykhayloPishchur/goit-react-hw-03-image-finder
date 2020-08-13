import React from "react";
import PropTypes from "prop-types";

const Button = ({ onClick }) => {
  return (
    <div className="LoadMoreButton">
      <button type="submit" className="Button" onClick={onClick}>
        Load more
      </button>
    </div>
  );
};

export default Button;

Button.propTypes = {
  onClick: PropTypes.func.isRequired,
};
