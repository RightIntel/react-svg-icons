import React from "react";
import PropTypes from "prop-types";
import Lini from "../Lini.jsx";

export default function LiniAlignCenterHorizontal(props = {}) {
  props.name = "AlignCenterHorizontal";
  
  return (
    <Lini {...props}>
      <path d="M19.5 10h-1.5v-3.5c0-0.827-0.673-1.5-1.5-1.5h-4c-0.827 0-1.5 0.673-1.5 1.5v3.5h-2v-6.5c0-0.827-0.673-1.5-1.5-1.5h-4c-0.827 0-1.5 0.673-1.5 1.5v6.5h-1.5c-0.276 0-0.5 0.224-0.5 0.5s0.224 0.5 0.5 0.5h1.5v6.5c0 0.827 0.673 1.5 1.5 1.5h4c0.827 0 1.5-0.673 1.5-1.5v-6.5h2v3.5c0 0.827 0.673 1.5 1.5 1.5h4c0.827 0 1.5-0.673 1.5-1.5v-3.5h1.5c0.276 0 0.5-0.224 0.5-0.5s-0.224-0.5-0.5-0.5zM12 6.5c0-0.276 0.224-0.5 0.5-0.5h4c0.276 0 0.5 0.224 0.5 0.5v3.5h-5v-3.5zM3 3.5c0-0.276 0.224-0.5 0.5-0.5h4c0.276 0 0.5 0.224 0.5 0.5v6.5h-5v-6.5zM8 17.5c0 0.276-0.224 0.5-0.5 0.5h-4c-0.276 0-0.5-0.224-0.5-0.5v-6.5h5v6.5zM17 14.5c0 0.276-0.224 0.5-0.5 0.5h-4c-0.276 0-0.5-0.224-0.5-0.5v-3.5h5v3.5z" />
    </Lini>
  );
}

LiniAlignCenterHorizontal.propTypes = {
  /** The height/width in pixels */
  size: PropTypes.number,
  /** The fill color */
  color: PropTypes.string,
  /** Additional CSS class names */
  className: PropTypes.string,
};
