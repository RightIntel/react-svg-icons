import React from "react";
import PropTypes from "prop-types";
import Lini from "../Lini.jsx";

export default function LiniCrop(props = {}) {
  props.name = "Crop";
  
  return (
    <Lini {...props}>
      <path d="M19.5 15h-3c-0.276 0-0.5-0.224-0.5-0.5s0.224-0.5 0.5-0.5h3c0.276 0 0.5 0.224 0.5 0.5s-0.224 0.5-0.5 0.5z" />
      <path d="M12.5 15h-7c-0.276 0-0.5-0.224-0.5-0.5v-7c0-0.276 0.224-0.5 0.5-0.5s0.5 0.224 0.5 0.5v6.5h6.5c0.276 0 0.5 0.224 0.5 0.5s-0.224 0.5-0.5 0.5z" />
      <path d="M5.5 4c-0.276 0-0.5-0.224-0.5-0.5v-3c0-0.276 0.224-0.5 0.5-0.5s0.5 0.224 0.5 0.5v3c0 0.276-0.224 0.5-0.5 0.5z" />
      <path d="M14.5 20c-0.276 0-0.5-0.224-0.5-0.5v-13.5h-13.5c-0.276 0-0.5-0.224-0.5-0.5s0.224-0.5 0.5-0.5h14c0.276 0 0.5 0.224 0.5 0.5v14c0 0.276-0.224 0.5-0.5 0.5z" />
    </Lini>
  );
}

LiniCrop.propTypes = {
  /** The height/width in pixels */
  size: PropTypes.number,
  /** The fill color */
  color: PropTypes.string,
  /** Additional CSS class names */
  className: PropTypes.string,
};
