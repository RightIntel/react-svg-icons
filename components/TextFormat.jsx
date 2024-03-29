import React from "react";
import PropTypes from "prop-types";
import Lini from "../Lini.jsx";

export default function LiniTextFormat(props = {}) {
  props.name = "TextFormat";
  
  return (
    <Lini {...props}>
      <path d="M16.5 19h-14c-0.276 0-0.5-0.224-0.5-0.5s0.224-0.5 0.5-0.5h14c0.276 0 0.5 0.224 0.5 0.5s-0.224 0.5-0.5 0.5z" />
      <path d="M15.96 15.303l-2.57-5.996c-0.001-0.001-0.001-0.003-0.002-0.004l-3.428-8c-0.079-0.184-0.26-0.303-0.46-0.303s-0.381 0.119-0.46 0.303l-3.428 8c-0.001 0.002-0.001 0.003-0.002 0.005l-2.57 5.996c-0.109 0.254 0.009 0.548 0.263 0.657s0.548-0.009 0.657-0.263l2.442-5.697h6.198l2.442 5.697c0.081 0.19 0.266 0.303 0.46 0.303 0.066 0 0.133-0.013 0.197-0.041 0.254-0.109 0.371-0.403 0.263-0.657zM6.83 9l2.67-6.231 2.67 6.231h-5.341z" />
    </Lini>
  );
}

LiniTextFormat.propTypes = {
  /** The height/width in pixels */
  size: PropTypes.number,
  /** The fill color */
  color: PropTypes.string,
  /** Additional CSS class names */
  className: PropTypes.string,
};
