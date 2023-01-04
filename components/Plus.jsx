import React from "react";
import PropTypes from "prop-types";
import Lini from "../Lini.jsx";

export default function LiniPlus(props = {}) {
  props.name = "Plus";
  
  return (
    <Lini {...props}>
      <path d="M18.5 10h-8.5v-8.5c0-0.276-0.224-0.5-0.5-0.5s-0.5 0.224-0.5 0.5v8.5h-8.5c-0.276 0-0.5 0.224-0.5 0.5s0.224 0.5 0.5 0.5h8.5v8.5c0 0.276 0.224 0.5 0.5 0.5s0.5-0.224 0.5-0.5v-8.5h8.5c0.276 0 0.5-0.224 0.5-0.5s-0.224-0.5-0.5-0.5z" />
    </Lini>
  );
}

LiniPlus.propTypes = {
  /** The height/width in pixels */
  size: PropTypes.number,
  /** The fill color */
  color: PropTypes.string,
  /** Additional CSS class names */
  className: PropTypes.string,
};
