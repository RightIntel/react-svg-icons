import React from "react";
import PropTypes from "prop-types";
import Lini from "../Lini.jsx";

export default function LiniRoad(props = {}) {
  props.name = "Road";
  
  return (
    <Lini {...props}>
      <path d="M0.501 20c-0.034 0-0.069-0.003-0.103-0.011-0.27-0.057-0.443-0.322-0.386-0.592l4-19c0.057-0.27 0.322-0.443 0.592-0.386s0.443 0.322 0.386 0.592l-4 19c-0.050 0.236-0.257 0.397-0.489 0.397z" />
      <path d="M18.499 20c-0.231 0-0.439-0.162-0.489-0.397l-4-19c-0.057-0.27 0.116-0.535 0.386-0.592s0.535 0.116 0.592 0.386l4 19c0.057 0.27-0.116 0.535-0.386 0.592-0.035 0.007-0.069 0.011-0.103 0.011z" />
      <path d="M9.5 3c-0.276 0-0.5-0.224-0.5-0.5v-2c0-0.276 0.224-0.5 0.5-0.5s0.5 0.224 0.5 0.5v2c0 0.276-0.224 0.5-0.5 0.5z" />
      <path d="M9.5 10c-0.276 0-0.5-0.224-0.5-0.5v-4c0-0.276 0.224-0.5 0.5-0.5s0.5 0.224 0.5 0.5v4c0 0.276-0.224 0.5-0.5 0.5z" />
      <path d="M9.5 20c-0.276 0-0.5-0.224-0.5-0.5v-6c0-0.276 0.224-0.5 0.5-0.5s0.5 0.224 0.5 0.5v6c0 0.276-0.224 0.5-0.5 0.5z" />
    </Lini>
  );
}

LiniRoad.propTypes = {
  /** The height/width in pixels */
  size: PropTypes.number,
  /** The fill color */
  color: PropTypes.string,
  /** Additional CSS class names */
  className: PropTypes.string,
};
