import React from "react";
import PropTypes from "prop-types";
import Lini from "../Lini.jsx";

export default function LiniSigma(props = {}) {
  props.name = "Sigma";
  
  return (
    <Lini {...props}>
      <path d="M14.5 18h-10c-0.187 0-0.359-0.105-0.445-0.271s-0.071-0.367 0.038-0.519l4.792-6.709-4.792-6.709c-0.109-0.152-0.123-0.353-0.038-0.519s0.257-0.271 0.445-0.271h10c0.276 0 0.5 0.224 0.5 0.5s-0.224 0.5-0.5 0.5h-9.028l4.435 6.209c0.124 0.174 0.124 0.407 0 0.581l-4.435 6.209h9.028c0.276 0 0.5 0.224 0.5 0.5s-0.224 0.5-0.5 0.5z" />
    </Lini>
  );
}

LiniSigma.propTypes = {
  /** The height/width in pixels */
  size: PropTypes.number,
  /** The fill color */
  color: PropTypes.string,
  /** Additional CSS class names */
  className: PropTypes.string,
};
