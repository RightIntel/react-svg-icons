import React from "react";
import PropTypes from "prop-types";
import Lini from "../Lini.jsx";

export default function LiniDiamonds(props = {}) {
  props.name = "Diamonds";
  
  return (
    <Lini {...props}>
      <path d="M9.5 20c-0.154 0-0.3-0.071-0.395-0.193l-7-9c-0.14-0.181-0.14-0.433 0-0.614l7-9c0.095-0.122 0.24-0.193 0.395-0.193s0.3 0.071 0.395 0.193l7 9c0.14 0.181 0.14 0.433 0 0.614l-7 9c-0.095 0.122-0.24 0.193-0.395 0.193zM3.133 10.5l6.367 8.186 6.367-8.186-6.367-8.186-6.367 8.186z" />
    </Lini>
  );
}

LiniDiamonds.propTypes = {
  /** The height/width in pixels */
  size: PropTypes.number,
  /** The fill color */
  color: PropTypes.string,
  /** Additional CSS class names */
  className: PropTypes.string,
};
