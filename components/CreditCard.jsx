import React from "react";
import PropTypes from "prop-types";
import Lini from "../Lini.jsx";

export default function LiniCreditCard(props = {}) {
  props.name = "CreditCard";
  
  return (
    <Lini {...props}>
      <path d="M18.5 3h-17c-0.827 0-1.5 0.673-1.5 1.5v11c0 0.827 0.673 1.5 1.5 1.5h17c0.827 0 1.5-0.673 1.5-1.5v-11c0-0.827-0.673-1.5-1.5-1.5zM1.5 4h17c0.276 0 0.5 0.224 0.5 0.5v0.5h-18v-0.5c0-0.276 0.224-0.5 0.5-0.5zM19 6v3h-18v-3h18zM18.5 16h-17c-0.276 0-0.5-0.224-0.5-0.5v-5.5h18v5.5c0 0.276-0.224 0.5-0.5 0.5z" />
      <path d="M17 14h1v1h-1v-1z" />
      <path d="M13 14h3v1h-3v-1z" />
      <path d="M10 14h2v1h-2v-1z" />
    </Lini>
  );
}

LiniCreditCard.propTypes = {
  /** The height/width in pixels */
  size: PropTypes.number,
  /** The fill color */
  color: PropTypes.string,
  /** Additional CSS class names */
  className: PropTypes.string,
};
