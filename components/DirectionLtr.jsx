import React from "react";
import PropTypes from "prop-types";
import Lini from "../Lini.jsx";

export default function LiniDirectionLtr(props = {}) {
  props.name = "DirectionLtr";
  
  return (
    <Lini {...props}>
      <path d="M15.354 17.146l-2-2c-0.195-0.195-0.512-0.195-0.707 0s-0.195 0.512 0 0.707l1.146 1.146h-9.293c-0.276 0-0.5 0.224-0.5 0.5s0.224 0.5 0.5 0.5h9.293l-1.146 1.146c-0.195 0.195-0.195 0.512 0 0.707 0.098 0.098 0.226 0.146 0.354 0.146s0.256-0.049 0.354-0.146l2-2c0.195-0.195 0.195-0.512 0-0.707z" />
      <path d="M15.5 1h-8.5c-2.206 0-4 1.794-4 4s1.794 4 4 4h1v4.5c0 0.276 0.224 0.5 0.5 0.5s0.5-0.224 0.5-0.5v-11.5h3v11.5c0 0.276 0.224 0.5 0.5 0.5s0.5-0.224 0.5-0.5v-11.5h2.5c0.276 0 0.5-0.224 0.5-0.5s-0.224-0.5-0.5-0.5zM8 8h-1c-1.654 0-3-1.346-3-3s1.346-3 3-3h1v6z" />
    </Lini>
  );
}

LiniDirectionLtr.propTypes = {
  /** The height/width in pixels */
  size: PropTypes.number,
  /** The fill color */
  color: PropTypes.string,
  /** Additional CSS class names */
  className: PropTypes.string,
};
