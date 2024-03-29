import React from "react";
import PropTypes from "prop-types";
import Lini from "../Lini.jsx";

export default function LiniRedo2(props = {}) {
  props.name = "Redo2";
  
  return (
    <Lini {...props}>
      <path d="M2.49 4.49c1.605-1.605 3.74-2.49 6.010-2.49s4.405 0.884 6.010 2.49 2.49 3.74 2.49 6.010v1.293l2.146-2.146c0.195-0.195 0.512-0.195 0.707 0s0.195 0.512 0 0.707l-3 3c-0.098 0.098-0.226 0.146-0.354 0.146s-0.256-0.049-0.354-0.146l-3-3c-0.195-0.195-0.195-0.512 0-0.707s0.512-0.195 0.707 0l2.146 2.146v-1.293c0-4.136-3.364-7.5-7.5-7.5s-7.5 3.364-7.5 7.5c0 4.136 3.364 7.5 7.5 7.5 0.276 0 0.5 0.224 0.5 0.5s-0.224 0.5-0.5 0.5c-2.27 0-4.405-0.884-6.010-2.49s-2.49-3.74-2.49-6.010c0-2.27 0.884-4.405 2.49-6.010z" />
    </Lini>
  );
}

LiniRedo2.propTypes = {
  /** The height/width in pixels */
  size: PropTypes.number,
  /** The fill color */
  color: PropTypes.string,
  /** Additional CSS class names */
  className: PropTypes.string,
};
