import React from "react";
import PropTypes from "prop-types";
import Lini from "../Lini.jsx";

export default function LiniSmartphoneNotification(props = {}) {
  props.name = "SmartphoneNotification";
  
  return (
    <Lini {...props}>
      <path d="M14.5 20h-9c-0.827 0-1.5-0.673-1.5-1.5v-6c0-0.276 0.224-0.5 0.5-0.5s0.5 0.224 0.5 0.5v6c0 0.276 0.224 0.5 0.5 0.5h9c0.276 0 0.5-0.224 0.5-0.5v-17c0-0.276-0.224-0.5-0.5-0.5h-4c-0.276 0-0.5-0.224-0.5-0.5s0.224-0.5 0.5-0.5h4c0.827 0 1.5 0.673 1.5 1.5v17c0 0.827-0.673 1.5-1.5 1.5z" />
      <path d="M13.5 16h-7c-0.276 0-0.5-0.224-0.5-0.5v-3c0-0.276 0.224-0.5 0.5-0.5s0.5 0.224 0.5 0.5v2.5h6v-12h-0.5c-0.276 0-0.5-0.224-0.5-0.5s0.224-0.5 0.5-0.5h1c0.276 0 0.5 0.224 0.5 0.5v13c0 0.276-0.224 0.5-0.5 0.5z" />
      <path d="M10.5 18h-1c-0.276 0-0.5-0.224-0.5-0.5s0.224-0.5 0.5-0.5h1c0.276 0 0.5 0.224 0.5 0.5s-0.224 0.5-0.5 0.5z" />
      <path d="M5.5 11c-3.033 0-5.5-2.467-5.5-5.5s2.467-5.5 5.5-5.5 5.5 2.467 5.5 5.5-2.467 5.5-5.5 5.5zM5.5 1c-2.481 0-4.5 2.019-4.5 4.5s2.019 4.5 4.5 4.5 4.5-2.019 4.5-4.5-2.019-4.5-4.5-4.5z" />
      <path d="M5.5 4c-0.276 0-0.5-0.224-0.5-0.5v-1c0-0.276 0.224-0.5 0.5-0.5s0.5 0.224 0.5 0.5v1c0 0.276-0.224 0.5-0.5 0.5z" />
      <path d="M5.5 9c-0.276 0-0.5-0.224-0.5-0.5v-3c0-0.276 0.224-0.5 0.5-0.5s0.5 0.224 0.5 0.5v3c0 0.276-0.224 0.5-0.5 0.5z" />
    </Lini>
  );
}

LiniSmartphoneNotification.propTypes = {
  /** The height/width in pixels */
  size: PropTypes.number,
  /** The fill color */
  color: PropTypes.string,
  /** Additional CSS class names */
  className: PropTypes.string,
};
