import React from "react";
import PropTypes from "prop-types";
import Lini from "../Lini.jsx";

export default function LiniAlignRight(props = {}) {
  props.name = "AlignRight";
  
  return (
    <Lini {...props}>
      <path d="M19.5 20c0.276 0 0.5-0.224 0.5-0.5v-19c0-0.276-0.224-0.5-0.5-0.5s-0.5 0.224-0.5 0.5v19c0 0.276 0.224 0.5 0.5 0.5z" />
      <path d="M7 7.5v-4c0-0.827 0.673-1.5 1.5-1.5h8c0.827 0 1.5 0.673 1.5 1.5v4c0 0.827-0.673 1.5-1.5 1.5h-8c-0.827 0-1.5-0.673-1.5-1.5zM8.5 3c-0.276 0-0.5 0.224-0.5 0.5v4c0 0.276 0.224 0.5 0.5 0.5h8c0.276 0 0.5-0.224 0.5-0.5v-4c0-0.276-0.224-0.5-0.5-0.5h-8z" />
      <path d="M1 16.5v-4c0-0.827 0.673-1.5 1.5-1.5h14c0.827 0 1.5 0.673 1.5 1.5v4c0 0.827-0.673 1.5-1.5 1.5h-14c-0.827 0-1.5-0.673-1.5-1.5zM2.5 12c-0.276 0-0.5 0.224-0.5 0.5v4c0 0.276 0.224 0.5 0.5 0.5h14c0.276 0 0.5-0.224 0.5-0.5v-4c0-0.276-0.224-0.5-0.5-0.5h-14z" />
    </Lini>
  );
}

LiniAlignRight.propTypes = {
  /** The height/width in pixels */
  size: PropTypes.number,
  /** The fill color */
  color: PropTypes.string,
  /** Additional CSS class names */
  className: PropTypes.string,
};
