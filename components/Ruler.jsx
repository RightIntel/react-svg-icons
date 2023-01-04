import React from "react";
import PropTypes from "prop-types";
import Lini from "../Lini.jsx";

export default function LiniRuler(props = {}) {
  props.name = "Ruler";
  
  return (
    <Lini {...props}>
      <path d="M17.5 7h-16c-0.827 0-1.5 0.673-1.5 1.5v3c0 0.827 0.673 1.5 1.5 1.5h16c0.827 0 1.5-0.673 1.5-1.5v-3c0-0.827-0.673-1.5-1.5-1.5zM18 11.5c0 0.276-0.224 0.5-0.5 0.5h-1.5v-1.5c0-0.276-0.224-0.5-0.5-0.5s-0.5 0.224-0.5 0.5v1.5h-2v-2.5c0-0.276-0.224-0.5-0.5-0.5s-0.5 0.224-0.5 0.5v2.5h-2v-1.5c0-0.276-0.224-0.5-0.5-0.5s-0.5 0.224-0.5 0.5v1.5h-2v-2.5c0-0.276-0.224-0.5-0.5-0.5s-0.5 0.224-0.5 0.5v2.5h-2v-1.5c0-0.276-0.224-0.5-0.5-0.5s-0.5 0.224-0.5 0.5v1.5h-1.5c-0.276 0-0.5-0.224-0.5-0.5v-3c0-0.276 0.224-0.5 0.5-0.5h16c0.276 0 0.5 0.224 0.5 0.5v3z" />
    </Lini>
  );
}

LiniRuler.propTypes = {
  /** The height/width in pixels */
  size: PropTypes.number,
  /** The fill color */
  color: PropTypes.string,
  /** Additional CSS class names */
  className: PropTypes.string,
};
