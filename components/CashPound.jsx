import React from "react";
import PropTypes from "prop-types";
import Lini from "../Lini.jsx";

export default function LiniCashPound(props = {}) {
  props.name = "CashPound";
  
  return (
    <Lini {...props}>
      <path d="M18.5 18h-18c-0.276 0-0.5-0.224-0.5-0.5v-10c0-0.276 0.224-0.5 0.5-0.5h18c0.276 0 0.5 0.224 0.5 0.5v10c0 0.276-0.224 0.5-0.5 0.5zM1 17h17v-9h-17v9z" />
      <path d="M17.5 6h-16c-0.276 0-0.5-0.224-0.5-0.5s0.224-0.5 0.5-0.5h16c0.276 0 0.5 0.224 0.5 0.5s-0.224 0.5-0.5 0.5z" />
      <path d="M16.5 4h-14c-0.276 0-0.5-0.224-0.5-0.5s0.224-0.5 0.5-0.5h14c0.276 0 0.5 0.224 0.5 0.5s-0.224 0.5-0.5 0.5z" />
      <path d="M11.5 15h-3.5v-2h1.5c0.276 0 0.5-0.224 0.5-0.5s-0.224-0.5-0.5-0.5h-1.5v-0.5c0-0.799 0.763-1.5 1.634-1.5 0.579 0 1.182 0.316 1.433 0.75 0.138 0.239 0.444 0.321 0.683 0.182s0.321-0.444 0.182-0.683c-0.426-0.736-1.371-1.249-2.299-1.249-0.658 0-1.321 0.261-1.819 0.717-0.526 0.481-0.815 1.114-0.815 1.783v0.5h-0.5c-0.276 0-0.5 0.224-0.5 0.5s0.224 0.5 0.5 0.5h0.5v2.5c0 0.276 0.224 0.5 0.5 0.5h4c0.276 0 0.5-0.224 0.5-0.5s-0.224-0.5-0.5-0.5z" />
    </Lini>
  );
}

LiniCashPound.propTypes = {
  /** The height/width in pixels */
  size: PropTypes.number,
  /** The fill color */
  color: PropTypes.string,
  /** Additional CSS class names */
  className: PropTypes.string,
};
