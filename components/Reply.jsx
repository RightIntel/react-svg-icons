import React from "react";
import PropTypes from "prop-types";
import Lini from "../Lini.jsx";

export default function LiniReply(props = {}) {
  props.name = "Reply";
  
  return (
    <Lini {...props}>
      <path d="M17.096 14.024c-0.579-1.369-1.408-2.599-2.464-3.655s-2.286-1.885-3.655-2.464c-1.418-0.6-2.924-0.904-4.476-0.904h-3.293l4.146-4.146c0.195-0.195 0.195-0.512 0-0.707s-0.512-0.195-0.707 0l-5 5c-0.195 0.195-0.195 0.512 0 0.707l5 5c0.098 0.098 0.226 0.146 0.354 0.146s0.256-0.049 0.354-0.146c0.195-0.195 0.195-0.512 0-0.707l-4.146-4.146h3.293c5.79 0 10.5 4.71 10.5 10.5 0 0.276 0.224 0.5 0.5 0.5s0.5-0.224 0.5-0.5c0-1.552-0.304-3.058-0.904-4.476z" />
    </Lini>
  );
}

LiniReply.propTypes = {
  /** The height/width in pixels */
  size: PropTypes.number,
  /** The fill color */
  color: PropTypes.string,
  /** Additional CSS class names */
  className: PropTypes.string,
};
