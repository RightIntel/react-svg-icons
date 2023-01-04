import React from "react";
import PropTypes from "prop-types";
import Lini from "../Lini.jsx";

export default function LiniAlignTop(props = {}) {
  props.name = "AlignTop";
  
  return (
    <Lini {...props}>
      <path d="M0 0.5c0-0.276 0.224-0.5 0.5-0.5h19c0.276 0 0.5 0.224 0.5 0.5s-0.224 0.5-0.5 0.5h-19c-0.276 0-0.5-0.224-0.5-0.5z" />
      <path d="M11 11.5v-8c0-0.827 0.673-1.5 1.5-1.5h4c0.827 0 1.5 0.673 1.5 1.5v8c0 0.827-0.673 1.5-1.5 1.5h-4c-0.827 0-1.5-0.673-1.5-1.5zM17 3.5c0-0.276-0.224-0.5-0.5-0.5h-4c-0.276 0-0.5 0.224-0.5 0.5v8c0 0.276 0.224 0.5 0.5 0.5h4c0.276 0 0.5-0.224 0.5-0.5v-8z" />
      <path d="M2 17.5v-14c0-0.827 0.673-1.5 1.5-1.5h4c0.827 0 1.5 0.673 1.5 1.5v14c0 0.827-0.673 1.5-1.5 1.5h-4c-0.827 0-1.5-0.673-1.5-1.5zM8 3.5c0-0.276-0.224-0.5-0.5-0.5h-4c-0.276 0-0.5 0.224-0.5 0.5v14c0 0.276 0.224 0.5 0.5 0.5h4c0.276 0 0.5-0.224 0.5-0.5v-14z" />
    </Lini>
  );
}

LiniAlignTop.propTypes = {
  /** The height/width in pixels */
  size: PropTypes.number,
  /** The fill color */
  color: PropTypes.string,
  /** Additional CSS class names */
  className: PropTypes.string,
};
