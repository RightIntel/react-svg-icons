import React from "react";
import PropTypes from "prop-types";
import Lini from "../Lini.jsx";

export default function LiniSurveillance2(props = {}) {
  props.name = "Surveillance2";
  
  return (
    <Lini {...props}>
      <path d="M9.5 16c-0.827 0-1.5-0.673-1.5-1.5s0.673-1.5 1.5-1.5c0.827 0 1.5 0.673 1.5 1.5s-0.673 1.5-1.5 1.5zM9.5 14c-0.276 0-0.5 0.224-0.5 0.5s0.224 0.5 0.5 0.5 0.5-0.224 0.5-0.5-0.224-0.5-0.5-0.5z" />
      <path d="M17.5 3h-16c-0.827 0-1.5 0.673-1.5 1.5v3c0 0.652 0.418 1.208 1 1.414v0.586c0 2.27 0.884 4.405 2.49 6.010s3.74 2.49 6.010 2.49c2.27 0 4.405-0.884 6.010-2.49s2.49-3.74 2.49-6.010v-0.586c0.582-0.206 1-0.762 1-1.414v-3c0-0.827-0.673-1.5-1.5-1.5zM7 16.571v-2.071c0-1.378 1.122-2.5 2.5-2.5s2.5 1.122 2.5 2.5l-0 2.071c-0.782 0.277-1.624 0.429-2.5 0.429s-1.718-0.152-2.5-0.429zM13 16.132l0-1.632c0-1.93-1.57-3.5-3.5-3.5s-3.5 1.57-3.5 3.5v1.632c-2.377-1.26-4-3.759-4-6.632v-0.5h15v0.5c0 2.872-1.623 5.372-4 6.632zM18 7.5c0 0.276-0.224 0.5-0.5 0.5h-16c-0.276 0-0.5-0.224-0.5-0.5v-3c0-0.276 0.224-0.5 0.5-0.5h16c0.276 0 0.5 0.224 0.5 0.5v3z" />
    </Lini>
  );
}

LiniSurveillance2.propTypes = {
  /** The height/width in pixels */
  size: PropTypes.number,
  /** The fill color */
  color: PropTypes.string,
  /** Additional CSS class names */
  className: PropTypes.string,
};
