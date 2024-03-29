import React from "react";
import PropTypes from "prop-types";
import Lini from "../Lini.jsx";

export default function LiniFirstAid(props = {}) {
  props.name = "FirstAid";
  
  return (
    <Lini {...props}>
      <path d="M11.5 16h-3c-0.276 0-0.5-0.224-0.5-0.5v-1.5h-1.5c-0.276 0-0.5-0.224-0.5-0.5v-3c0-0.276 0.224-0.5 0.5-0.5h1.5v-1.5c0-0.276 0.224-0.5 0.5-0.5h3c0.276 0 0.5 0.224 0.5 0.5v1.5h1.5c0.276 0 0.5 0.224 0.5 0.5v3c0 0.276-0.224 0.5-0.5 0.5h-1.5v1.5c0 0.276-0.224 0.5-0.5 0.5zM9 15h2v-1.5c0-0.276 0.224-0.5 0.5-0.5h1.5v-2h-1.5c-0.276 0-0.5-0.224-0.5-0.5v-1.5h-2v1.5c0 0.276-0.224 0.5-0.5 0.5h-1.5v2h1.5c0.276 0 0.5 0.224 0.5 0.5v1.5z" />
      <path d="M18.5 5h-4.5v-1.5c0-0.827-0.673-1.5-1.5-1.5h-5c-0.827 0-1.5 0.673-1.5 1.5v1.5h-4.5c-0.827 0-1.5 0.673-1.5 1.5v11c0 0.827 0.673 1.5 1.5 1.5h17c0.827 0 1.5-0.673 1.5-1.5v-11c0-0.827-0.673-1.5-1.5-1.5zM7 3.5c0-0.276 0.224-0.5 0.5-0.5h5c0.276 0 0.5 0.224 0.5 0.5v1.5h-6v-1.5zM19 17.5c0 0.276-0.224 0.5-0.5 0.5h-17c-0.276 0-0.5-0.224-0.5-0.5v-11c0-0.276 0.224-0.5 0.5-0.5h17c0.276 0 0.5 0.224 0.5 0.5v11z" />
    </Lini>
  );
}

LiniFirstAid.propTypes = {
  /** The height/width in pixels */
  size: PropTypes.number,
  /** The fill color */
  color: PropTypes.string,
  /** Additional CSS class names */
  className: PropTypes.string,
};
