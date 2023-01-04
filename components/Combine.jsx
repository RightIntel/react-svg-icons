import React from "react";
import PropTypes from "prop-types";
import Lini from "../Lini.jsx";

export default function LiniCombine(props = {}) {
  props.name = "Combine";
  
  return (
    <Lini {...props}>
      <path d="M17.5 7h-4.5v-4.5c0-0.827-0.673-1.5-1.5-1.5h-10c-0.827 0-1.5 0.673-1.5 1.5v10c0 0.827 0.673 1.5 1.5 1.5h4.5v4.5c0 0.827 0.673 1.5 1.5 1.5h10c0.827 0 1.5-0.673 1.5-1.5v-10c0-0.827-0.673-1.5-1.5-1.5zM18 18.5c0 0.276-0.224 0.5-0.5 0.5h-10c-0.276 0-0.5-0.224-0.5-0.5v-5.5h-5.5c-0.276 0-0.5-0.224-0.5-0.5v-10c0-0.276 0.224-0.5 0.5-0.5h10c0.276 0 0.5 0.224 0.5 0.5v5.5h5.5c0.276 0 0.5 0.224 0.5 0.5v10z" />
    </Lini>
  );
}

LiniCombine.propTypes = {
  /** The height/width in pixels */
  size: PropTypes.number,
  /** The fill color */
  color: PropTypes.string,
  /** Additional CSS class names */
  className: PropTypes.string,
};
