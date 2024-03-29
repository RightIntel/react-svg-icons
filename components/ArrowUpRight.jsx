import React from "react";
import PropTypes from "prop-types";
import Lini from "../Lini.jsx";

export default function LiniArrowUpRight(props = {}) {
  props.name = "ArrowUpRight";
  
  return (
    <Lini {...props}>
      <path d="M17.5 2h-8c-0.276 0-0.5 0.224-0.5 0.5s0.224 0.5 0.5 0.5h6.793l-14.146 14.146c-0.195 0.195-0.195 0.512 0 0.707 0.098 0.098 0.226 0.146 0.354 0.146s0.256-0.049 0.354-0.146l14.146-14.146v6.793c0 0.276 0.224 0.5 0.5 0.5s0.5-0.224 0.5-0.5v-8c0-0.276-0.224-0.5-0.5-0.5z" />
    </Lini>
  );
}

LiniArrowUpRight.propTypes = {
  /** The height/width in pixels */
  size: PropTypes.number,
  /** The fill color */
  color: PropTypes.string,
  /** Additional CSS class names */
  className: PropTypes.string,
};
