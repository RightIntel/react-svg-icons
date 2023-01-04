import React from "react";
import PropTypes from "prop-types";
import Lini from "../Lini.jsx";

export default function LiniExclamation(props = {}) {
  props.name = "Exclamation";
  
  return (
    <Lini {...props}>
      <path d="M9.5 17c-0.276 0-0.5-0.224-0.5-0.5v-15c0-0.276 0.224-0.5 0.5-0.5s0.5 0.224 0.5 0.5v15c0 0.276-0.224 0.5-0.5 0.5z" />
      <path d="M9.5 20c-0.276 0-0.5-0.224-0.5-0.5v-1c0-0.276 0.224-0.5 0.5-0.5s0.5 0.224 0.5 0.5v1c0 0.276-0.224 0.5-0.5 0.5z" />
    </Lini>
  );
}

LiniExclamation.propTypes = {
  /** The height/width in pixels */
  size: PropTypes.number,
  /** The fill color */
  color: PropTypes.string,
  /** Additional CSS class names */
  className: PropTypes.string,
};
