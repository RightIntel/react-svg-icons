import React from "react";
import PropTypes from "prop-types";
import Lini from "../Lini.jsx";

export default function LiniLoudspeaker(props = {}) {
  props.name = "Loudspeaker";
  
  return (
    <Lini {...props}>
      <path d="M15.5 20h-11c-0.827 0-1.5-0.673-1.5-1.5v-16c0-0.827 0.673-1.5 1.5-1.5h11c0.827 0 1.5 0.673 1.5 1.5v16c0 0.827-0.673 1.5-1.5 1.5zM4.5 2c-0.276 0-0.5 0.224-0.5 0.5v16c0 0.276 0.224 0.5 0.5 0.5h11c0.276 0 0.5-0.224 0.5-0.5v-16c0-0.276-0.224-0.5-0.5-0.5h-11z" />
      <path d="M10 7c-1.103 0-2-0.897-2-2s0.897-2 2-2c1.103 0 2 0.897 2 2s-0.897 2-2 2zM10 4c-0.551 0-1 0.449-1 1s0.449 1 1 1c0.551 0 1-0.449 1-1s-0.449-1-1-1z" />
      <path d="M10 18c-2.757 0-5-2.243-5-5s2.243-5 5-5c2.757 0 5 2.243 5 5s-2.243 5-5 5zM10 9c-2.206 0-4 1.794-4 4s1.794 4 4 4c2.206 0 4-1.794 4-4s-1.794-4-4-4z" />
      <path d="M10 15c-1.103 0-2-0.897-2-2s0.897-2 2-2c1.103 0 2 0.897 2 2s-0.897 2-2 2zM10 12c-0.551 0-1 0.449-1 1s0.449 1 1 1c0.551 0 1-0.449 1-1s-0.449-1-1-1z" />
    </Lini>
  );
}

LiniLoudspeaker.propTypes = {
  /** The height/width in pixels */
  size: PropTypes.number,
  /** The fill color */
  color: PropTypes.string,
  /** Additional CSS class names */
  className: PropTypes.string,
};
