import React from "react";
import PropTypes from "prop-types";
import Lini from "../Lini.jsx";

export default function LiniRadioButton(props = {}) {
  props.name = "RadioButton";
  
  return (
    <Lini {...props}>
      <path d="M10 20c-2.671 0-5.182-1.040-7.071-2.929s-2.929-4.4-2.929-7.071c0-2.671 1.040-5.182 2.929-7.071s4.4-2.929 7.071-2.929c2.671 0 5.182 1.040 7.071 2.929s2.929 4.4 2.929 7.071c0 2.671-1.040 5.182-2.929 7.071s-4.4 2.929-7.071 2.929zM10 1c-4.963 0-9 4.037-9 9s4.037 9 9 9 9-4.037 9-9-4.037-9-9-9z" />
      <path d="M10 16c-3.308 0-6-2.692-6-6s2.692-6 6-6 6 2.692 6 6-2.692 6-6 6zM10 5c-2.757 0-5 2.243-5 5s2.243 5 5 5c2.757 0 5-2.243 5-5s-2.243-5-5-5z" />
    </Lini>
  );
}

LiniRadioButton.propTypes = {
  /** The height/width in pixels */
  size: PropTypes.number,
  /** The fill color */
  color: PropTypes.string,
  /** Additional CSS class names */
  className: PropTypes.string,
};
