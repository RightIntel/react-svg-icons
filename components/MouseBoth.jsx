import React from "react";
import PropTypes from "prop-types";
import Lini from "../Lini.jsx";

export default function LiniMouseBoth(props = {}) {
  props.name = "MouseBoth";
  
  return (
    <Lini {...props}>
      <path d="M9.5 4c-3.033 0-5.5 2.467-5.5 5.5v5c0 3.033 2.467 5.5 5.5 5.5s5.5-2.467 5.5-5.5v-5c0-3.033-2.467-5.5-5.5-5.5zM13.972 9h-3.972v-3.972c2.083 0.231 3.741 1.889 3.972 3.972zM9 5.028v3.972h-3.972c0.231-2.083 1.889-3.741 3.972-3.972zM9.5 19c-2.481 0-4.5-2.019-4.5-4.5v-4.5h9v4.5c0 2.481-2.019 4.5-4.5 4.5z" />
      <path d="M5.5 3c-0.276 0-0.5-0.224-0.5-0.5v-2c0-0.276 0.224-0.5 0.5-0.5s0.5 0.224 0.5 0.5v2c0 0.276-0.224 0.5-0.5 0.5z" />
      <path d="M2.5 6h-2c-0.276 0-0.5-0.224-0.5-0.5s0.224-0.5 0.5-0.5h2c0.276 0 0.5 0.224 0.5 0.5s-0.224 0.5-0.5 0.5z" />
      <path d="M3.5 4c-0.128 0-0.256-0.049-0.354-0.146l-2-2c-0.195-0.195-0.195-0.512 0-0.707s0.512-0.195 0.707 0l2 2c0.195 0.195 0.195 0.512 0 0.707-0.098 0.098-0.226 0.146-0.354 0.146z" />
      <path d="M13.5 3c-0.276 0-0.5-0.224-0.5-0.5v-2c0-0.276 0.224-0.5 0.5-0.5s0.5 0.224 0.5 0.5v2c0 0.276-0.224 0.5-0.5 0.5z" />
      <path d="M18.5 6h-2c-0.276 0-0.5-0.224-0.5-0.5s0.224-0.5 0.5-0.5h2c0.276 0 0.5 0.224 0.5 0.5s-0.224 0.5-0.5 0.5z" />
      <path d="M15.5 4c-0.128 0-0.256-0.049-0.354-0.146-0.195-0.195-0.195-0.512 0-0.707l2-2c0.195-0.195 0.512-0.195 0.707 0s0.195 0.512 0 0.707l-2 2c-0.098 0.098-0.226 0.146-0.354 0.146z" />
    </Lini>
  );
}

LiniMouseBoth.propTypes = {
  /** The height/width in pixels */
  size: PropTypes.number,
  /** The fill color */
  color: PropTypes.string,
  /** Additional CSS class names */
  className: PropTypes.string,
};
