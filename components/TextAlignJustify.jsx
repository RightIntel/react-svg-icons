import React from "react";
import PropTypes from "prop-types";
import Lini from "../Lini.jsx";

export default function LiniTextAlignJustify(props = {}) {
  props.name = "TextAlignJustify";
  
  return (
    <Lini {...props}>
      <path d="M17.5 5h-15c-0.276 0-0.5-0.224-0.5-0.5s0.224-0.5 0.5-0.5h15c0.276 0 0.5 0.224 0.5 0.5s-0.224 0.5-0.5 0.5z" />
      <path d="M17.5 8h-15c-0.276 0-0.5-0.224-0.5-0.5s0.224-0.5 0.5-0.5h15c0.276 0 0.5 0.224 0.5 0.5s-0.224 0.5-0.5 0.5z" />
      <path d="M17.5 11h-15c-0.276 0-0.5-0.224-0.5-0.5s0.224-0.5 0.5-0.5h15c0.276 0 0.5 0.224 0.5 0.5s-0.224 0.5-0.5 0.5z" />
      <path d="M17.5 14h-15c-0.276 0-0.5-0.224-0.5-0.5s0.224-0.5 0.5-0.5h15c0.276 0 0.5 0.224 0.5 0.5s-0.224 0.5-0.5 0.5z" />
      <path d="M17.5 17h-15c-0.276 0-0.5-0.224-0.5-0.5s0.224-0.5 0.5-0.5h15c0.276 0 0.5 0.224 0.5 0.5s-0.224 0.5-0.5 0.5z" />
    </Lini>
  );
}

LiniTextAlignJustify.propTypes = {
  /** The height/width in pixels */
  size: PropTypes.number,
  /** The fill color */
  color: PropTypes.string,
  /** Additional CSS class names */
  className: PropTypes.string,
};
