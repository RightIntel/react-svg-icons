import React from "react";
import PropTypes from "prop-types";
import Lini from "../Lini.jsx";

export default function LiniCompass2(props = {}) {
  props.name = "Compass2";
  
  return (
    <Lini {...props}>
      <path d="M10 20c-2.671 0-5.182-1.040-7.071-2.929s-2.929-4.4-2.929-7.071c0-2.671 1.040-5.182 2.929-7.071s4.4-2.929 7.071-2.929c2.671 0 5.182 1.040 7.071 2.929s2.929 4.4 2.929 7.071c0 2.671-1.040 5.182-2.929 7.071s-4.4 2.929-7.071 2.929zM10 1c-4.963 0-9 4.037-9 9s4.037 9 9 9 9-4.037 9-9-4.037-9-9-9z" />
      <path d="M4.941 17.225l2.995-8.67 7.123-5.779-2.995 8.67-7.123 5.779zM8.788 9.151l-1.759 5.092 4.183-3.394 1.759-5.092-4.183 3.394z" />
    </Lini>
  );
}

LiniCompass2.propTypes = {
  /** The height/width in pixels */
  size: PropTypes.number,
  /** The fill color */
  color: PropTypes.string,
  /** Additional CSS class names */
  className: PropTypes.string,
};
