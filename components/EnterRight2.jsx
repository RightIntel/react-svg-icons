import React from "react";
import PropTypes from "prop-types";
import Lini from "../Lini.jsx";

export default function LiniEnterRight2(props = {}) {
  props.name = "EnterRight2";
  
  return (
    <Lini {...props}>
      <path d="M20 2.5v16c0 0.827-0.673 1.5-1.5 1.5h-1c-0.827 0-1.5-0.673-1.5-1.5v-5c0-0.276 0.224-0.5 0.5-0.5s0.5 0.224 0.5 0.5v5c0 0.276 0.224 0.5 0.5 0.5h1c0.276 0 0.5-0.224 0.5-0.5v-16c0-0.276-0.224-0.5-0.5-0.5h-1c-0.276 0-0.5 0.224-0.5 0.5v5c0 0.276-0.224 0.5-0.5 0.5s-0.5-0.224-0.5-0.5v-5c0-0.827 0.673-1.5 1.5-1.5h1c0.827 0 1.5 0.673 1.5 1.5z" />
      <path d="M11.647 5.147c-0.195 0.195-0.195 0.512 0 0.707l4.146 4.146h-14.293c-0.276 0-0.5 0.224-0.5 0.5s0.224 0.5 0.5 0.5h14.293l-4.146 4.146c-0.195 0.195-0.195 0.512 0 0.707s0.512 0.195 0.707 0l5-5c0.098-0.098 0.146-0.226 0.146-0.354s-0.049-0.256-0.147-0.354l-5-5c-0.195-0.195-0.512-0.195-0.707 0z" />
    </Lini>
  );
}

LiniEnterRight2.propTypes = {
  /** The height/width in pixels */
  size: PropTypes.number,
  /** The fill color */
  color: PropTypes.string,
  /** Additional CSS class names */
  className: PropTypes.string,
};
