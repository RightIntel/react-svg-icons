import React from "react";
import PropTypes from "prop-types";
import Lini from "../Lini.jsx";

export default function LiniArrowsMerge(props = {}) {
  props.name = "ArrowsMerge";
  
  return (
    <Lini {...props}>
      <path d="M15.854 18.646l-5.293-5.293c-0.293-0.293-0.561-0.939-0.561-1.354v-9.793l3.146 3.146c0.098 0.098 0.226 0.146 0.354 0.146s0.256-0.049 0.354-0.146c0.195-0.195 0.195-0.512 0-0.707l-4-4c-0.195-0.195-0.512-0.195-0.707 0l-4 4c-0.195 0.195-0.195 0.512 0 0.707s0.512 0.195 0.707 0l3.146-3.146v9.793c0 0.688 0.367 1.574 0.854 2.061l5.293 5.293c0.098 0.098 0.226 0.146 0.354 0.146s0.256-0.049 0.354-0.146c0.195-0.195 0.195-0.512 0-0.707z" />
      <path d="M3.5 19.5c-0.128 0-0.256-0.049-0.354-0.146-0.195-0.195-0.195-0.512 0-0.707l4-4c0.195-0.195 0.512-0.195 0.707 0s0.195 0.512 0 0.707l-4 4c-0.098 0.098-0.226 0.146-0.354 0.146z" />
    </Lini>
  );
}

LiniArrowsMerge.propTypes = {
  /** The height/width in pixels */
  size: PropTypes.number,
  /** The fill color */
  color: PropTypes.string,
  /** Additional CSS class names */
  className: PropTypes.string,
};
