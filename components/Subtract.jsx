import React from "react";
import PropTypes from "prop-types";
import Lini from "../Lini.jsx";

export default function LiniSubtract(props = {}) {
  props.name = "Subtract";
  
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
      <path d="M11.5 1h-10c-0.827 0-1.5 0.673-1.5 1.5v10c0 0.827 0.673 1.5 1.5 1.5h5.5v-5.5c0-0.276 0.224-0.5 0.5-0.5h5.5v-5.5c0-0.827-0.673-1.5-1.5-1.5zM7.5 7c-0.827 0-1.5 0.673-1.5 1.5v4.5h-4.5c-0.276 0-0.5-0.224-0.5-0.5v-10c0-0.276 0.224-0.5 0.5-0.5h10c0.276 0 0.5 0.224 0.5 0.5v4.5h-4.5z" />
      <path d="M6 15h1v1h-1v-1z" />
      <path d="M18 7h1v1h-1v-1z" />
      <path d="M18 19h1v1h-1v-1z" />
      <path d="M6 19h1v1h-1v-1z" />
    </Lini>
  );
}

LiniSubtract.propTypes = {
  /** The height/width in pixels */
  size: PropTypes.number,
  /** The fill color */
  color: PropTypes.string,
  /** Additional CSS class names */
  className: PropTypes.string,
};
