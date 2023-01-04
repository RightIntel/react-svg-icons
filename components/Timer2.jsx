import React from "react";
import PropTypes from "prop-types";
import Lini from "../Lini.jsx";

export default function LiniTimer2(props = {}) {
  props.name = "Timer2";
  
  return (
    <Lini {...props}>
      <path d="M15.51 5.49c-1.487-1.487-3.428-2.355-5.51-2.475v-1.015h0.5c0.276 0 0.5-0.224 0.5-0.5s-0.224-0.5-0.5-0.5h-2c-0.276 0-0.5 0.224-0.5 0.5s0.224 0.5 0.5 0.5h0.5v1.015c-2.082 0.12-4.023 0.988-5.51 2.475-1.605 1.605-2.49 3.74-2.49 6.010s0.884 4.405 2.49 6.010c1.605 1.605 3.74 2.49 6.010 2.49s4.405-0.884 6.010-2.49c1.605-1.605 2.49-3.74 2.49-6.010s-0.884-4.405-2.49-6.010zM9.5 19c-4.136 0-7.5-3.364-7.5-7.5s3.364-7.5 7.5-7.5c4.136 0 7.5 3.364 7.5 7.5s-3.364 7.5-7.5 7.5z" />
      <path d="M9.5 12c-0.276 0-0.5-0.224-0.5-0.5v-6c0-0.276 0.224-0.5 0.5-0.5s0.5 0.224 0.5 0.5v6c0 0.276-0.224 0.5-0.5 0.5z" />
    </Lini>
  );
}

LiniTimer2.propTypes = {
  /** The height/width in pixels */
  size: PropTypes.number,
  /** The fill color */
  color: PropTypes.string,
  /** Additional CSS class names */
  className: PropTypes.string,
};
