import React from "react";
import PropTypes from "prop-types";
import Lini from "../Lini.jsx";

export default function LiniPilcrow(props = {}) {
  props.name = "Pilcrow";
  
  return (
    <Lini {...props}>
      <path d="M15.5 2h-8.5c-2.206 0-4 1.794-4 4s1.794 4 4 4h1v7.5c0 0.276 0.224 0.5 0.5 0.5s0.5-0.224 0.5-0.5v-14.5h3v14.5c0 0.276 0.224 0.5 0.5 0.5s0.5-0.224 0.5-0.5v-14.5h2.5c0.276 0 0.5-0.224 0.5-0.5s-0.224-0.5-0.5-0.5zM8 9h-1c-1.654 0-3-1.346-3-3s1.346-3 3-3h1v6z" />
    </Lini>
  );
}

LiniPilcrow.propTypes = {
  /** The height/width in pixels */
  size: PropTypes.number,
  /** The fill color */
  color: PropTypes.string,
  /** Additional CSS class names */
  className: PropTypes.string,
};
