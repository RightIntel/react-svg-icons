import React from "react";
import PropTypes from "prop-types";
import Lini from "../Lini.jsx";

export default function LiniArrowsSplit(props = {}) {
  props.name = "ArrowsSplit";
  
  return (
    <Lini {...props}>
      <path d="M18.5 1h-5c-0.276 0-0.5 0.224-0.5 0.5s0.224 0.5 0.5 0.5h3.793l-8.146 8.146c-0.094 0.094-0.146 0.221-0.146 0.354v9c0 0.276 0.224 0.5 0.5 0.5s0.5-0.224 0.5-0.5v-8.793l8-8v3.793c0 0.276 0.224 0.5 0.5 0.5s0.5-0.224 0.5-0.5v-5c0-0.276-0.224-0.5-0.5-0.5z" />
      <path d="M7.854 8.146l-6.146-6.146h3.793c0.276 0 0.5-0.224 0.5-0.5s-0.224-0.5-0.5-0.5h-5c-0.276 0-0.5 0.224-0.5 0.5v5c0 0.276 0.224 0.5 0.5 0.5s0.5-0.224 0.5-0.5v-3.793l6.146 6.146c0.098 0.098 0.226 0.146 0.354 0.146s0.256-0.049 0.354-0.146c0.195-0.195 0.195-0.512 0-0.707z" />
    </Lini>
  );
}

LiniArrowsSplit.propTypes = {
  /** The height/width in pixels */
  size: PropTypes.number,
  /** The fill color */
  color: PropTypes.string,
  /** Additional CSS class names */
  className: PropTypes.string,
};
