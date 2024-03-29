import React from "react";
import PropTypes from "prop-types";
import Lini from "../Lini.jsx";

export default function LiniIndentIncrease(props = {}) {
  props.name = "IndentIncrease";
  
  return (
    <Lini {...props}>
      <path d="M17.5 5h-15c-0.276 0-0.5-0.224-0.5-0.5s0.224-0.5 0.5-0.5h15c0.276 0 0.5 0.224 0.5 0.5s-0.224 0.5-0.5 0.5z" />
      <path d="M17.5 8h-8c-0.276 0-0.5-0.224-0.5-0.5s0.224-0.5 0.5-0.5h8c0.276 0 0.5 0.224 0.5 0.5s-0.224 0.5-0.5 0.5z" />
      <path d="M17.5 11h-8c-0.276 0-0.5-0.224-0.5-0.5s0.224-0.5 0.5-0.5h8c0.276 0 0.5 0.224 0.5 0.5s-0.224 0.5-0.5 0.5z" />
      <path d="M17.5 14h-8c-0.276 0-0.5-0.224-0.5-0.5s0.224-0.5 0.5-0.5h8c0.276 0 0.5 0.224 0.5 0.5s-0.224 0.5-0.5 0.5z" />
      <path d="M17.5 17h-15c-0.276 0-0.5-0.224-0.5-0.5s0.224-0.5 0.5-0.5h15c0.276 0 0.5 0.224 0.5 0.5s-0.224 0.5-0.5 0.5z" />
      <path d="M2.5 14c-0.076 0-0.153-0.017-0.224-0.053-0.169-0.085-0.276-0.258-0.276-0.447v-6c0-0.189 0.107-0.363 0.276-0.447s0.372-0.066 0.524 0.047l4 3c0.126 0.094 0.2 0.243 0.2 0.4s-0.074 0.306-0.2 0.4l-4 3c-0.088 0.066-0.194 0.1-0.3 0.1zM3 8.5v4l2.667-2-2.667-2z" />
    </Lini>
  );
}

LiniIndentIncrease.propTypes = {
  /** The height/width in pixels */
  size: PropTypes.number,
  /** The fill color */
  color: PropTypes.string,
  /** Additional CSS class names */
  className: PropTypes.string,
};
