import React from "react";
import PropTypes from "prop-types";
import Lini from "../Lini.jsx";

export default function LiniFileLock(props = {}) {
  props.name = "FileLock";
  
  return (
    <Lini {...props}>
      <path d="M17.854 5.646l-4.5-4.5c-0.094-0.094-0.221-0.146-0.354-0.146h-9.5c-0.827 0-1.5 0.673-1.5 1.5v16c0 0.827 0.673 1.5 1.5 1.5h13c0.827 0 1.5-0.673 1.5-1.5v-12.5c0-0.133-0.053-0.26-0.146-0.354zM16.793 6h-3.293c-0.276 0-0.5-0.224-0.5-0.5v-3.293l3.793 3.793zM16.5 19h-13c-0.276 0-0.5-0.224-0.5-0.5v-16c0-0.276 0.224-0.5 0.5-0.5h8.5v3.5c0 0.827 0.673 1.5 1.5 1.5h3.5v11.5c0 0.276-0.224 0.5-0.5 0.5z" />
      <path d="M12 12.086v-1.086c0-1.103-0.897-2-2-2s-2 0.897-2 2v1.086c-0.582 0.206-1 0.762-1 1.414v2c0 0.827 0.673 1.5 1.5 1.5h3c0.827 0 1.5-0.673 1.5-1.5v-2c0-0.652-0.418-1.208-1-1.414zM10 10c0.551 0 1 0.449 1 1v1h-2v-1c0-0.551 0.449-1 1-1zM12 15.5c0 0.276-0.224 0.5-0.5 0.5h-3c-0.276 0-0.5-0.224-0.5-0.5v-2c0-0.276 0.224-0.5 0.5-0.5h3c0.276 0 0.5 0.224 0.5 0.5v2z" />
    </Lini>
  );
}

LiniFileLock.propTypes = {
  /** The height/width in pixels */
  size: PropTypes.number,
  /** The fill color */
  color: PropTypes.string,
  /** Additional CSS class names */
  className: PropTypes.string,
};
