import React from "react";
import PropTypes from "prop-types";
import Lini from "../Lini.jsx";

export default function LiniPortrait(props = {}) {
  props.name = "Portrait";
  
  return (
    <Lini {...props}>
      <path d="M18.5 20h-17c-0.827 0-1.5-0.673-1.5-1.5v-17c0-0.827 0.673-1.5 1.5-1.5h17c0.827 0 1.5 0.673 1.5 1.5v17c0 0.827-0.673 1.5-1.5 1.5zM1.5 1c-0.276 0-0.5 0.224-0.5 0.5v17c0 0.276 0.224 0.5 0.5 0.5h17c0.276 0 0.5-0.224 0.5-0.5v-17c0-0.276-0.224-0.5-0.5-0.5h-17z" />
      <path d="M17.5 2h-15c-0.276 0-0.5 0.224-0.5 0.5v12c0 0.276 0.224 0.5 0.5 0.5h10.794c0.001 0 0.002 0 0.003 0s0.002-0 0.003-0h4.2c0.276 0 0.5-0.224 0.5-0.5v-12c0-0.276-0.224-0.5-0.5-0.5zM7.536 14c0.506-0.664 1.331-1 2.464-1s1.959 0.336 2.464 1h-4.928zM17 14h-3.373c-0.418-0.864-1.393-2-3.627-2s-3.209 1.136-3.627 2h-3.373v-11h14v11z" />
      <path d="M10 11c-1.654 0-3-1.346-3-3s1.346-3 3-3 3 1.346 3 3-1.346 3-3 3zM10 6c-1.103 0-2 0.897-2 2s0.897 2 2 2c1.103 0 2-0.897 2-2s-0.897-2-2-2z" />
    </Lini>
  );
}

LiniPortrait.propTypes = {
  /** The height/width in pixels */
  size: PropTypes.number,
  /** The fill color */
  color: PropTypes.string,
  /** Additional CSS class names */
  className: PropTypes.string,
};
