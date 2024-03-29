import React from "react";
import PropTypes from "prop-types";
import Lini from "../Lini.jsx";

export default function LiniIntersect(props = {}) {
  props.name = "Intersect";
  
  return (
    <Lini {...props}>
      <path d="M16 7h1v1h-1v-1z" />
      <path d="M16 19h1v1h-1v-1z" />
      <path d="M14 19h1v1h-1v-1z" />
      <path d="M12 19h1v1h-1v-1z" />
      <path d="M10 19h1v1h-1v-1z" />
      <path d="M8 19h1v1h-1v-1z" />
      <path d="M18 15h1v1h-1v-1z" />
      <path d="M18 13h1v1h-1v-1z" />
      <path d="M18 17h1v1h-1v-1z" />
      <path d="M18 9h1v1h-1v-1z" />
      <path d="M18 11h1v1h-1v-1z" />
      <path d="M6 17h1v1h-1v-1z" />
      <path d="M14 7h1v1h-1v-1z" />
      <path d="M0 9h1v1h-1v-1z" />
      <path d="M0 5h1v1h-1v-1z" />
      <path d="M0 3h1v1h-1v-1z" />
      <path d="M0 11h1v1h-1v-1z" />
      <path d="M0 7h1v1h-1v-1z" />
      <path d="M12 3h1v1h-1v-1z" />
      <path d="M12 5h1v1h-1v-1z" />
      <path d="M4 1h1v1h-1v-1z" />
      <path d="M2 1h1v1h-1v-1z" />
      <path d="M6 1h1v1h-1v-1z" />
      <path d="M10 1h1v1h-1v-1z" />
      <path d="M8 1h1v1h-1v-1z" />
      <path d="M4 13h1v1h-1v-1z" />
      <path d="M2 13h1v1h-1v-1z" />
      <path d="M7.5 7c-0.827 0-1.5 0.673-1.5 1.5v5.5h5.5c0.827 0 1.5-0.673 1.5-1.5v-5.5h-5.5zM12 12.5c0 0.276-0.224 0.5-0.5 0.5h-4.5v-4.5c0-0.276 0.224-0.5 0.5-0.5h4.5v4.5z" />
      <path d="M6 15h1v1h-1v-1z" />
      <path d="M18 7h1v1h-1v-1z" />
      <path d="M18 19h1v1h-1v-1z" />
      <path d="M0 13h1v1h-1v-1z" />
      <path d="M0 1h1v1h-1v-1z" />
      <path d="M12 1h1v1h-1v-1z" />
      <path d="M6 19h1v1h-1v-1z" />
    </Lini>
  );
}

LiniIntersect.propTypes = {
  /** The height/width in pixels */
  size: PropTypes.number,
  /** The fill color */
  color: PropTypes.string,
  /** Additional CSS class names */
  className: PropTypes.string,
};
