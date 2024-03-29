import React from "react";
import PropTypes from "prop-types";
import Lini from "../Lini.jsx";

export default function LiniCamera2(props = {}) {
  props.name = "Camera2";
  
  return (
    <Lini {...props}>
      <path d="M9.5 15c-2.481 0-4.5-2.019-4.5-4.5s2.019-4.5 4.5-4.5c2.481 0 4.5 2.019 4.5 4.5s-2.019 4.5-4.5 4.5zM9.5 7c-1.93 0-3.5 1.57-3.5 3.5s1.57 3.5 3.5 3.5 3.5-1.57 3.5-3.5-1.57-3.5-3.5-3.5z" />
      <path d="M17.5 18h-16c-0.827 0-1.5-0.673-1.5-1.5v-10c0-0.827 0.673-1.5 1.5-1.5h1.5c0.415 0 1.060-0.267 1.354-0.561l0.586-0.586c0.487-0.487 1.373-0.854 2.061-0.854h5c0.688 0 1.574 0.367 2.061 0.854l0.586 0.586c0.293 0.293 0.939 0.561 1.354 0.561h1.5c0.827 0 1.5 0.673 1.5 1.5v10c0 0.827-0.673 1.5-1.5 1.5zM1.5 6c-0.276 0-0.5 0.224-0.5 0.5v10c0 0.276 0.224 0.5 0.5 0.5h16c0.276 0 0.5-0.224 0.5-0.5v-10c0-0.276-0.224-0.5-0.5-0.5h-1.5c-0.688 0-1.574-0.367-2.061-0.854l-0.586-0.586c-0.293-0.293-0.939-0.561-1.354-0.561h-5c-0.415 0-1.060 0.267-1.354 0.561l-0.586 0.586c-0.487 0.487-1.372 0.854-2.061 0.854h-1.5z" />
    </Lini>
  );
}

LiniCamera2.propTypes = {
  /** The height/width in pixels */
  size: PropTypes.number,
  /** The fill color */
  color: PropTypes.string,
  /** Additional CSS class names */
  className: PropTypes.string,
};
