import React from "react";
import PropTypes from "prop-types";
import Lini from "../Lini.jsx";

export default function LiniCashYen(props = {}) {
  props.name = "CashYen";
  
  return (
    <Lini {...props}>
      <path d="M18.5 18h-18c-0.276 0-0.5-0.224-0.5-0.5v-10c0-0.276 0.224-0.5 0.5-0.5h18c0.276 0 0.5 0.224 0.5 0.5v10c0 0.276-0.224 0.5-0.5 0.5zM1 17h17v-9h-17v9z" />
      <path d="M17.5 6h-16c-0.276 0-0.5-0.224-0.5-0.5s0.224-0.5 0.5-0.5h16c0.276 0 0.5 0.224 0.5 0.5s-0.224 0.5-0.5 0.5z" />
      <path d="M16.5 4h-14c-0.276 0-0.5-0.224-0.5-0.5s0.224-0.5 0.5-0.5h14c0.276 0 0.5 0.224 0.5 0.5s-0.224 0.5-0.5 0.5z" />
      <path d="M11.5 13c0.276 0 0.5-0.224 0.5-0.5s-0.224-0.5-0.5-0.5h-1.066l1.482-2.223c0.153-0.23 0.091-0.54-0.139-0.693s-0.54-0.091-0.693 0.139l-1.584 2.376-1.584-2.376c-0.153-0.23-0.464-0.292-0.693-0.139s-0.292 0.464-0.139 0.693l1.482 2.223h-1.066c-0.276 0-0.5 0.224-0.5 0.5s0.224 0.5 0.5 0.5h1.5v1h-1.5c-0.276 0-0.5 0.224-0.5 0.5s0.224 0.5 0.5 0.5h1.5v0.5c0 0.276 0.224 0.5 0.5 0.5s0.5-0.224 0.5-0.5v-0.5h1.5c0.276 0 0.5-0.224 0.5-0.5s-0.224-0.5-0.5-0.5h-1.5v-1h1.5z" />
    </Lini>
  );
}

LiniCashYen.propTypes = {
  /** The height/width in pixels */
  size: PropTypes.number,
  /** The fill color */
  color: PropTypes.string,
  /** Additional CSS class names */
  className: PropTypes.string,
};
