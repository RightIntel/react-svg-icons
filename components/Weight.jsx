import React from "react";
import PropTypes from "prop-types";
import Lini from "../Lini.jsx";

export default function LiniWeight(props = {}) {
  props.name = "Weight";
  
  return (
    <Lini {...props}>
      <path d="M10 3.086v-1.586c0-0.276-0.224-0.5-0.5-0.5s-0.5 0.224-0.5 0.5v1.586c-0.582 0.206-1 0.762-1 1.414 0 0.827 0.673 1.5 1.5 1.5s1.5-0.673 1.5-1.5c0-0.652-0.418-1.208-1-1.414zM9.5 5c-0.276 0-0.5-0.224-0.5-0.5s0.224-0.5 0.5-0.5 0.5 0.224 0.5 0.5-0.224 0.5-0.5 0.5z" />
      <path d="M16.5 1h-4.175c-0.773-0.625-1.756-1-2.825-1s-2.052 0.375-2.825 1h-4.175c-1.378 0-2.5 1.122-2.5 2.5v14c0 1.378 1.122 2.5 2.5 2.5h14c1.378 0 2.5-1.122 2.5-2.5v-14c0-1.378-1.122-2.5-2.5-2.5zM9.5 1c1.76 0 3.221 1.306 3.464 3h-0.464c-0.276 0-0.5 0.224-0.5 0.5s0.224 0.5 0.5 0.5h0.464c-0.22 1.531-1.434 2.744-2.964 2.964v-0.464c0-0.276-0.224-0.5-0.5-0.5s-0.5 0.224-0.5 0.5v0.464c-1.531-0.22-2.744-1.434-2.964-2.964h0.464c0.276 0 0.5-0.224 0.5-0.5s-0.224-0.5-0.5-0.5h-0.464c0.243-1.694 1.704-3 3.464-3zM18 17.5c0 0.827-0.673 1.5-1.5 1.5h-14c-0.827 0-1.5-0.673-1.5-1.5v-14c0-0.827 0.673-1.5 1.5-1.5h3.26c-0.48 0.716-0.76 1.576-0.76 2.5 0 2.481 2.019 4.5 4.5 4.5s4.5-2.019 4.5-4.5c0-0.924-0.28-1.784-0.76-2.5h3.26c0.827 0 1.5 0.673 1.5 1.5v14z" />
      <path d="M15.5 13h-4c-0.276 0-0.5-0.224-0.5-0.5s0.224-0.5 0.5-0.5h4c0.276 0 0.5 0.224 0.5 0.5s-0.224 0.5-0.5 0.5z" />
      <path d="M15.5 15h-4c-0.276 0-0.5-0.224-0.5-0.5s0.224-0.5 0.5-0.5h4c0.276 0 0.5 0.224 0.5 0.5s-0.224 0.5-0.5 0.5z" />
      <path d="M15.5 17h-4c-0.276 0-0.5-0.224-0.5-0.5s0.224-0.5 0.5-0.5h4c0.276 0 0.5 0.224 0.5 0.5s-0.224 0.5-0.5 0.5z" />
      <path d="M7.5 13h-4c-0.276 0-0.5-0.224-0.5-0.5s0.224-0.5 0.5-0.5h4c0.276 0 0.5 0.224 0.5 0.5s-0.224 0.5-0.5 0.5z" />
      <path d="M15.5 11h-3c-0.276 0-0.5-0.224-0.5-0.5s0.224-0.5 0.5-0.5h3c0.276 0 0.5 0.224 0.5 0.5s-0.224 0.5-0.5 0.5z" />
      <path d="M6.5 11h-3c-0.276 0-0.5-0.224-0.5-0.5s0.224-0.5 0.5-0.5h3c0.276 0 0.5 0.224 0.5 0.5s-0.224 0.5-0.5 0.5z" />
      <path d="M7.5 15h-4c-0.276 0-0.5-0.224-0.5-0.5s0.224-0.5 0.5-0.5h4c0.276 0 0.5 0.224 0.5 0.5s-0.224 0.5-0.5 0.5z" />
      <path d="M7.5 17h-4c-0.276 0-0.5-0.224-0.5-0.5s0.224-0.5 0.5-0.5h4c0.276 0 0.5 0.224 0.5 0.5s-0.224 0.5-0.5 0.5z" />
    </Lini>
  );
}

LiniWeight.propTypes = {
  /** The height/width in pixels */
  size: PropTypes.number,
  /** The fill color */
  color: PropTypes.string,
  /** Additional CSS class names */
  className: PropTypes.string,
};
