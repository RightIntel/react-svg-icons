import React from "react";
import PropTypes from "prop-types";
import Lini from "../Lini.jsx";

export default function LiniReturn(props = {}) {
  props.name = "Return";
  
  return (
    <Lini {...props}>
      <path d="M10 20c-3.67 0-7.039-2.005-8.793-5.233-0.132-0.243-0.042-0.546 0.201-0.678s0.546-0.042 0.678 0.201c1.578 2.905 4.611 4.71 7.914 4.71 4.963 0 9-4.037 9-9s-4.037-9-9-9c-3.316 0-6.354 1.815-7.928 4.737-0.118 0.219-0.38 0.318-0.614 0.232s-0.368-0.332-0.315-0.575l0.869-4c0.059-0.27 0.325-0.441 0.595-0.383s0.441 0.325 0.382 0.595l-0.353 1.627c1.869-2.035 4.525-3.233 7.365-3.233 2.671 0 5.182 1.040 7.071 2.929s2.929 4.4 2.929 7.071c0 2.671-1.040 5.182-2.929 7.071s-4.4 2.929-7.071 2.929z" />
    </Lini>
  );
}

LiniReturn.propTypes = {
  /** The height/width in pixels */
  size: PropTypes.number,
  /** The fill color */
  color: PropTypes.string,
  /** Additional CSS class names */
  className: PropTypes.string,
};
