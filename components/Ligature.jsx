import React from "react";
import PropTypes from "prop-types";
import Lini from "../Lini.jsx";

export default function LiniLigature(props = {}) {
  props.name = "Ligature";
  
  return (
    <Lini {...props}>
      <path d="M18 20c-1.103 0-2-0.897-2-2v-6.501c-0.418 0.315-0.938 0.501-1.5 0.501h-5.5v3.5c0 2.481-2.019 4.5-4.5 4.5s-4.5-2.019-4.5-4.5 2.019-4.5 4.5-4.5h3.5v-5c0-2.757 2.243-5 5-5 2.415 0 4.435 1.721 4.9 4h1.6c0.276 0 0.5 0.224 0.5 0.5s-0.224 0.5-0.5 0.5h-1.5v0.5c0 0.827-0.673 1.5-1.5 1.5s-1.5-0.673-1.5-1.5 0.673-1.5 1.5-1.5h0.373c-0.445-1.723-2.013-3-3.873-3-2.206 0-4 1.794-4 4v5h5.5c0.827 0 1.5-0.673 1.5-1.5 0-0.276 0.224-0.5 0.5-0.5s0.5 0.224 0.5 0.5v8.5c0 0.551 0.449 1 1 1s1-0.449 1-1v-0.5c0-0.276 0.224-0.5 0.5-0.5s0.5 0.224 0.5 0.5v0.5c0 1.103-0.897 2-2 2zM4.5 12c-1.93 0-3.5 1.57-3.5 3.5s1.57 3.5 3.5 3.5 3.5-1.57 3.5-3.5v-3.5h-3.5zM16.5 6c-0.276 0-0.5 0.224-0.5 0.5s0.224 0.5 0.5 0.5 0.5-0.224 0.5-0.5v-0.5h-0.5z" />
    </Lini>
  );
}

LiniLigature.propTypes = {
  /** The height/width in pixels */
  size: PropTypes.number,
  /** The fill color */
  color: PropTypes.string,
  /** Additional CSS class names */
  className: PropTypes.string,
};
