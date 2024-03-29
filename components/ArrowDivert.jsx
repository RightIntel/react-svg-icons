import React from "react";
import PropTypes from "prop-types";
import Lini from "../Lini.jsx";

export default function LiniArrowDivert(props = {}) {
  props.name = "ArrowDivert";
  
  return (
    <Lini {...props}>
      <path d="M19.5 4h-6c-0.276 0-0.5 0.224-0.5 0.5s0.224 0.5 0.5 0.5h4.793l-9.793 9.793-7.646-7.646c-0.195-0.195-0.512-0.195-0.707 0s-0.195 0.512 0 0.707l8 8c0.098 0.098 0.226 0.146 0.354 0.146s0.256-0.049 0.354-0.146l10.146-10.146v4.793c0 0.276 0.224 0.5 0.5 0.5s0.5-0.224 0.5-0.5v-6c0-0.276-0.224-0.5-0.5-0.5z" />
    </Lini>
  );
}

LiniArrowDivert.propTypes = {
  /** The height/width in pixels */
  size: PropTypes.number,
  /** The fill color */
  color: PropTypes.string,
  /** Additional CSS class names */
  className: PropTypes.string,
};
