import React from "react";
import PropTypes from "prop-types";
import Lini from "../Lini.jsx";

export default function LiniUndo2(props = {}) {
  props.name = "Undo2";
  
  return (
    <Lini {...props}>
      <path d="M17.51 4.49c-1.605-1.605-3.74-2.49-6.010-2.49s-4.405 0.884-6.010 2.49-2.49 3.74-2.49 6.010v1.293l-2.146-2.146c-0.195-0.195-0.512-0.195-0.707 0s-0.195 0.512 0 0.707l3 3c0.098 0.098 0.226 0.146 0.354 0.146s0.256-0.049 0.354-0.146l3-3c0.195-0.195 0.195-0.512 0-0.707s-0.512-0.195-0.707 0l-2.146 2.146v-1.293c0-4.136 3.364-7.5 7.5-7.5s7.5 3.364 7.5 7.5-3.364 7.5-7.5 7.5c-0.276 0-0.5 0.224-0.5 0.5s0.224 0.5 0.5 0.5c2.27 0 4.405-0.884 6.010-2.49s2.49-3.74 2.49-6.010c0-2.27-0.884-4.405-2.49-6.010z" />
    </Lini>
  );
}

LiniUndo2.propTypes = {
  /** The height/width in pixels */
  size: PropTypes.number,
  /** The fill color */
  color: PropTypes.string,
  /** Additional CSS class names */
  className: PropTypes.string,
};
