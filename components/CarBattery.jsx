import React from "react";
import PropTypes from "prop-types";
import Lini from "../Lini.jsx";

export default function LiniCarBattery(props = {}) {
  props.name = "CarBattery";
  
  return (
    <Lini {...props}>
      <path d="M19.5 5h-1.5v-1.5c0-0.276-0.224-0.5-0.5-0.5h-3c-0.276 0-0.5 0.224-0.5 0.5v1.5h-8v-1.5c0-0.276-0.224-0.5-0.5-0.5h-3c-0.276 0-0.5 0.224-0.5 0.5v1.5h-1.5c-0.276 0-0.5 0.224-0.5 0.5v11c0 0.276 0.224 0.5 0.5 0.5h19c0.276 0 0.5-0.224 0.5-0.5v-11c0-0.276-0.224-0.5-0.5-0.5zM15 4h2v1h-2v-1zM3 4h2v1h-2v-1zM19 16h-18v-10h18v10z" />
      <path d="M16.5 10h-1.5v-1.5c0-0.276-0.224-0.5-0.5-0.5s-0.5 0.224-0.5 0.5v1.5h-1.5c-0.276 0-0.5 0.224-0.5 0.5s0.224 0.5 0.5 0.5h1.5v1.5c0 0.276 0.224 0.5 0.5 0.5s0.5-0.224 0.5-0.5v-1.5h1.5c0.276 0 0.5-0.224 0.5-0.5s-0.224-0.5-0.5-0.5z" />
      <path d="M7.5 11h-4c-0.276 0-0.5-0.224-0.5-0.5s0.224-0.5 0.5-0.5h4c0.276 0 0.5 0.224 0.5 0.5s-0.224 0.5-0.5 0.5z" />
    </Lini>
  );
}

LiniCarBattery.propTypes = {
  /** The height/width in pixels */
  size: PropTypes.number,
  /** The fill color */
  color: PropTypes.string,
  /** Additional CSS class names */
  className: PropTypes.string,
};
