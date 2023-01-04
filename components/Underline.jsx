import React from "react";
import PropTypes from "prop-types";
import Lini from "../Lini.jsx";

export default function LiniUnderline(props = {}) {
  props.name = "Underline";
  
  return (
    <Lini {...props}>
      <path d="M14.5 18h-9c-0.276 0-0.5-0.224-0.5-0.5s0.224-0.5 0.5-0.5h9c0.276 0 0.5 0.224 0.5 0.5s-0.224 0.5-0.5 0.5z" />
      <path d="M10 15c-2.757 0-5-2.243-5-5v-7.5c0-0.276 0.224-0.5 0.5-0.5s0.5 0.224 0.5 0.5v7.5c0 2.206 1.794 4 4 4s4-1.794 4-4v-7.5c0-0.276 0.224-0.5 0.5-0.5s0.5 0.224 0.5 0.5v7.5c0 2.757-2.243 5-5 5z" />
    </Lini>
  );
}

LiniUnderline.propTypes = {
  /** The height/width in pixels */
  size: PropTypes.number,
  /** The fill color */
  color: PropTypes.string,
  /** Additional CSS class names */
  className: PropTypes.string,
};
