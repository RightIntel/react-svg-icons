import React from "react";
import PropTypes from "prop-types";
import Lini from "../Lini.jsx";

export default function LiniIndentDecrease(props = {}) {
  props.name = "IndentDecrease";
  
  return (
    <Lini {...props}>
      <path d="M17.5 5h-15c-0.276 0-0.5-0.224-0.5-0.5s0.224-0.5 0.5-0.5h15c0.276 0 0.5 0.224 0.5 0.5s-0.224 0.5-0.5 0.5z" />
      <path d="M17.5 8h-8c-0.276 0-0.5-0.224-0.5-0.5s0.224-0.5 0.5-0.5h8c0.276 0 0.5 0.224 0.5 0.5s-0.224 0.5-0.5 0.5z" />
      <path d="M17.5 11h-8c-0.276 0-0.5-0.224-0.5-0.5s0.224-0.5 0.5-0.5h8c0.276 0 0.5 0.224 0.5 0.5s-0.224 0.5-0.5 0.5z" />
      <path d="M17.5 14h-8c-0.276 0-0.5-0.224-0.5-0.5s0.224-0.5 0.5-0.5h8c0.276 0 0.5 0.224 0.5 0.5s-0.224 0.5-0.5 0.5z" />
      <path d="M17.5 17h-15c-0.276 0-0.5-0.224-0.5-0.5s0.224-0.5 0.5-0.5h15c0.276 0 0.5 0.224 0.5 0.5s-0.224 0.5-0.5 0.5z" />
      <path d="M6.5 14c-0.106 0-0.212-0.034-0.3-0.1l-4-3c-0.126-0.094-0.2-0.243-0.2-0.4s0.074-0.306 0.2-0.4l4-3c0.152-0.114 0.354-0.132 0.524-0.047s0.276 0.258 0.276 0.447v6c0 0.189-0.107 0.363-0.276 0.447-0.071 0.035-0.147 0.053-0.224 0.053zM3.333 10.5l2.667 2v-4l-2.667 2z" />
    </Lini>
  );
}

LiniIndentDecrease.propTypes = {
  /** The height/width in pixels */
  size: PropTypes.number,
  /** The fill color */
  color: PropTypes.string,
  /** Additional CSS class names */
  className: PropTypes.string,
};
