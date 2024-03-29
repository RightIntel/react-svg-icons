import React from "react";
import PropTypes from "prop-types";
import Lini from "../Lini.jsx";

export default function LiniEnterLeft2(props = {}) {
  props.name = "EnterLeft2";
  
  return (
    <Lini {...props}>
      <path d="M0 18.5v-16c0-0.827 0.673-1.5 1.5-1.5h1c0.827 0 1.5 0.673 1.5 1.5v5c0 0.276-0.224 0.5-0.5 0.5s-0.5-0.224-0.5-0.5v-5c0-0.276-0.224-0.5-0.5-0.5h-1c-0.276 0-0.5 0.224-0.5 0.5v16c0 0.276 0.224 0.5 0.5 0.5h1c0.276 0 0.5-0.224 0.5-0.5v-5c0-0.276 0.224-0.5 0.5-0.5s0.5 0.224 0.5 0.5v5c0 0.827-0.673 1.5-1.5 1.5h-1c-0.827 0-1.5-0.673-1.5-1.5z" />
      <path d="M8.353 15.853c0.195-0.195 0.195-0.512 0-0.707l-4.146-4.146h14.293c0.276 0 0.5-0.224 0.5-0.5s-0.224-0.5-0.5-0.5h-14.293l4.146-4.146c0.195-0.195 0.195-0.512 0-0.707s-0.512-0.195-0.707 0l-5 5c-0.098 0.098-0.146 0.226-0.146 0.354s0.049 0.256 0.147 0.354l5 5c0.195 0.195 0.512 0.195 0.707-0z" />
    </Lini>
  );
}

LiniEnterLeft2.propTypes = {
  /** The height/width in pixels */
  size: PropTypes.number,
  /** The fill color */
  color: PropTypes.string,
  /** Additional CSS class names */
  className: PropTypes.string,
};
