import React from "react";
import PropTypes from "prop-types";
import Lini from "../Lini.jsx";

export default function LiniExitUp2(props = {}) {
  props.name = "ExitUp2";
  
  return (
    <Lini {...props}>
      <path d="M17.5 19h-16c-0.827 0-1.5-0.673-1.5-1.5v-1c0-0.827 0.673-1.5 1.5-1.5h6c0.276 0 0.5 0.224 0.5 0.5s-0.224 0.5-0.5 0.5h-6c-0.276 0-0.5 0.224-0.5 0.5v1c0 0.276 0.224 0.5 0.5 0.5h16c0.276 0 0.5-0.224 0.5-0.5v-1c0-0.276-0.224-0.5-0.5-0.5h-6c-0.276 0-0.5-0.224-0.5-0.5s0.224-0.5 0.5-0.5h6c0.827 0 1.5 0.673 1.5 1.5v1c0 0.827-0.673 1.5-1.5 1.5z" />
      <path d="M14.854 6.354c-0.195 0.195-0.512 0.195-0.707 0l-4.146-4.146v14.293c0 0.276-0.224 0.5-0.5 0.5s-0.5-0.224-0.5-0.5v-14.293l-4.146 4.146c-0.195 0.195-0.512 0.195-0.707 0s-0.195-0.512 0-0.707l5-5c0.098-0.098 0.226-0.146 0.354-0.146s0.256 0.049 0.354 0.146l5 5c0.195 0.195 0.195 0.512-0 0.707z" />
    </Lini>
  );
}

LiniExitUp2.propTypes = {
  /** The height/width in pixels */
  size: PropTypes.number,
  /** The fill color */
  color: PropTypes.string,
  /** Additional CSS class names */
  className: PropTypes.string,
};
