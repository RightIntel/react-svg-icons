import React from "react";
import PropTypes from "prop-types";
import Lini from "../Lini.jsx";

export default function LiniRedo(props = {}) {
  props.name = "Redo";
  
  return (
    <Lini {...props}>
      <path d="M17.5 8c-0.276 0-0.5 0.224-0.5 0.5v2.652c-1.97-2.011-4.666-3.152-7.5-3.152-1.679 0-3.284 0.385-4.77 1.144-1.417 0.724-2.672 1.78-3.63 3.055-0.166 0.221-0.121 0.534 0.099 0.7 0.090 0.068 0.195 0.1 0.3 0.1 0.152 0 0.302-0.069 0.4-0.2 1.814-2.415 4.584-3.799 7.6-3.799 2.633 0 5.134 1.088 6.928 3h-2.928c-0.276 0-0.5 0.224-0.5 0.5s0.224 0.5 0.5 0.5h4c0.276 0 0.5-0.224 0.5-0.5v-4c0-0.276-0.224-0.5-0.5-0.5z" />
    </Lini>
  );
}

LiniRedo.propTypes = {
  /** The height/width in pixels */
  size: PropTypes.number,
  /** The fill color */
  color: PropTypes.string,
  /** Additional CSS class names */
  className: PropTypes.string,
};
