import React from "react";
import PropTypes from "prop-types";
import Lini from "../Lini.jsx";

export default function LiniGrid(props = {}) {
  props.name = "Grid";
  
  return (
    <Lini {...props}>
      <path d="M16.5 2h-13c-0.827 0-1.5 0.673-1.5 1.5v13c0 0.827 0.673 1.5 1.5 1.5h13c0.827 0 1.5-0.673 1.5-1.5v-13c0-0.827-0.673-1.5-1.5-1.5zM17 3.5v3.5h-4v-4h3.5c0.276 0 0.5 0.224 0.5 0.5zM8 12v-4h4v4h-4zM12 13v4h-4v-4h4zM7 12h-4v-4h4v4zM8 7v-4h4v4h-4zM13 8h4v4h-4v-4zM3.5 3h3.5v4h-4v-3.5c0-0.276 0.224-0.5 0.5-0.5zM3 16.5v-3.5h4v4h-3.5c-0.276 0-0.5-0.224-0.5-0.5zM16.5 17h-3.5v-4h4v3.5c0 0.276-0.224 0.5-0.5 0.5z" />
    </Lini>
  );
}

LiniGrid.propTypes = {
  /** The height/width in pixels */
  size: PropTypes.number,
  /** The fill color */
  color: PropTypes.string,
  /** Additional CSS class names */
  className: PropTypes.string,
};
