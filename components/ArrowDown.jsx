import React from "react";
import PropTypes from "prop-types";
import Lini from "../Lini.jsx";

export default function LiniArrowDown(props = {}) {
  props.name = "ArrowDown";
  
  return (
    <Lini {...props}>
      <path d="M9.854 19.354l6-6c0.195-0.195 0.195-0.512 0-0.707s-0.512-0.195-0.707 0l-5.146 5.146v-16.293c0-0.276-0.224-0.5-0.5-0.5s-0.5 0.224-0.5 0.5v16.293l-5.146-5.146c-0.195-0.195-0.512-0.195-0.707 0-0.098 0.098-0.146 0.226-0.146 0.354s0.049 0.256 0.146 0.354l6 6c0.195 0.195 0.512 0.195 0.707 0z" />
    </Lini>
  );
}

LiniArrowDown.propTypes = {
  /** The height/width in pixels */
  size: PropTypes.number,
  /** The fill color */
  color: PropTypes.string,
  /** Additional CSS class names */
  className: PropTypes.string,
};
