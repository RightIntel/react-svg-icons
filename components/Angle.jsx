import React from "react";
import PropTypes from "prop-types";
import Lini from "../Lini.jsx";

export default function LiniAngle(props = {}) {
  props.name = "Angle";
  
  return (
    <Lini {...props}>
      <path d="M19.5 18h-8.512c-0.126-2.65-1.247-5.146-3.139-7h1.652c0.276 0 0.5-0.224 0.5-0.5s-0.224-0.5-0.5-0.5h-3c-0.036 0-0.071 0.004-0.105 0.011l4.529-7.246c0.146-0.234 0.075-0.543-0.159-0.689s-0.543-0.075-0.689 0.159l-10 16c-0.096 0.154-0.101 0.348-0.013 0.507s0.256 0.258 0.437 0.258h19c0.276 0 0.5-0.224 0.5-0.5s-0.224-0.5-0.5-0.5zM6 10.643v2.857c0 0.276 0.224 0.5 0.5 0.5s0.5-0.224 0.5-0.5v-1.928c1.79 1.68 2.858 3.98 2.987 6.428h-8.585l4.598-7.357z" />
    </Lini>
  );
}

LiniAngle.propTypes = {
  /** The height/width in pixels */
  size: PropTypes.number,
  /** The fill color */
  color: PropTypes.string,
  /** Additional CSS class names */
  className: PropTypes.string,
};
