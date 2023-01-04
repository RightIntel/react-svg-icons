import React from "react";
import PropTypes from "prop-types";
import Lini from "../Lini.jsx";

export default function LiniProhibited(props = {}) {
  props.name = "Prohibited";
  
  return (
    <Lini {...props}>
      <path d="M17.071 2.929c-1.889-1.889-4.4-2.929-7.071-2.929s-5.182 1.040-7.071 2.929-2.929 4.4-2.929 7.071c0 2.671 1.040 5.182 2.929 7.071s4.4 2.929 7.071 2.929c2.671 0 5.182-1.040 7.071-2.929s2.929-4.4 2.929-7.071c0-2.671-1.040-5.182-2.929-7.071zM10 1c2.532 0 4.823 1.051 6.46 2.74l-13.575 11.765c-1.181-1.523-1.885-3.433-1.885-5.505 0-4.963 4.037-9 9-9zM10 19c-2.532 0-4.823-1.051-6.46-2.74l13.575-11.765c1.181 1.523 1.885 3.433 1.885 5.505 0 4.963-4.037 9-9 9z" />
    </Lini>
  );
}

LiniProhibited.propTypes = {
  /** The height/width in pixels */
  size: PropTypes.number,
  /** The fill color */
  color: PropTypes.string,
  /** Additional CSS class names */
  className: PropTypes.string,
};
