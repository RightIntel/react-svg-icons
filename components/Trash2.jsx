import React from "react";
import PropTypes from "prop-types";
import Lini from "../Lini.jsx";

export default function LiniTrash2(props = {}) {
  props.name = "Trash2";
  
  return (
    <Lini {...props}>
      <path d="M15.5 2h-3.5v-0.5c0-0.827-0.673-1.5-1.5-1.5h-2c-0.827 0-1.5 0.673-1.5 1.5v0.5h-3.5c-0.827 0-1.5 0.673-1.5 1.5v1c0 0.652 0.418 1.208 1 1.414v12.586c0 0.827 0.673 1.5 1.5 1.5h10c0.827 0 1.5-0.673 1.5-1.5v-12.586c0.582-0.206 1-0.762 1-1.414v-1c0-0.827-0.673-1.5-1.5-1.5zM8 1.5c0-0.276 0.224-0.5 0.5-0.5h2c0.276 0 0.5 0.224 0.5 0.5v0.5h-3v-0.5zM14.5 19h-10c-0.276 0-0.5-0.224-0.5-0.5v-12.5h11v12.5c0 0.276-0.224 0.5-0.5 0.5zM16 4.5c0 0.276-0.224 0.5-0.5 0.5h-12c-0.276 0-0.5-0.224-0.5-0.5v-1c0-0.276 0.224-0.5 0.5-0.5h12c0.276 0 0.5 0.224 0.5 0.5v1z" />
      <path d="M12.5 7c-0.276 0-0.5 0.224-0.5 0.5v10c0 0.276 0.224 0.5 0.5 0.5s0.5-0.224 0.5-0.5v-10c0-0.276-0.224-0.5-0.5-0.5z" />
      <path d="M9.5 7c-0.276 0-0.5 0.224-0.5 0.5v10c0 0.276 0.224 0.5 0.5 0.5s0.5-0.224 0.5-0.5v-10c0-0.276-0.224-0.5-0.5-0.5z" />
      <path d="M6.5 7c-0.276 0-0.5 0.224-0.5 0.5v10c0 0.276 0.224 0.5 0.5 0.5s0.5-0.224 0.5-0.5v-10c0-0.276-0.224-0.5-0.5-0.5z" />
    </Lini>
  );
}

LiniTrash2.propTypes = {
  /** The height/width in pixels */
  size: PropTypes.number,
  /** The fill color */
  color: PropTypes.string,
  /** Additional CSS class names */
  className: PropTypes.string,
};
