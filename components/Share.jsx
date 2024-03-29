import React from "react";
import PropTypes from "prop-types";
import Lini from "../Lini.jsx";

export default function LiniShare(props = {}) {
  props.name = "Share";
  
  return (
    <Lini {...props}>
      <path d="M18.5 18h-17c-0.827 0-1.5-0.673-1.5-1.5v-13c0-0.827 0.673-1.5 1.5-1.5h11c0.276 0 0.5 0.224 0.5 0.5s-0.224 0.5-0.5 0.5h-11c-0.276 0-0.5 0.224-0.5 0.5v13c0 0.276 0.224 0.5 0.5 0.5h17c0.276 0 0.5-0.224 0.5-0.5v-7c0-0.276 0.224-0.5 0.5-0.5s0.5 0.224 0.5 0.5v7c0 0.827-0.673 1.5-1.5 1.5z" />
      <path d="M19.354 6.146l-4-4c-0.195-0.195-0.512-0.195-0.707 0s-0.195 0.512 0 0.707l3.146 3.146h-6.293c-1.721 0-3.346 0.62-4.575 1.747-1.241 1.138-1.925 2.648-1.925 4.253v0.5c0 0.276 0.224 0.5 0.5 0.5s0.5-0.224 0.5-0.5v-0.5c0-2.757 2.467-5 5.5-5h6.293l-3.146 3.146c-0.195 0.195-0.195 0.512 0 0.707 0.098 0.098 0.226 0.146 0.354 0.146s0.256-0.049 0.354-0.146l4-4c0.195-0.195 0.195-0.512 0-0.707z" />
    </Lini>
  );
}

LiniShare.propTypes = {
  /** The height/width in pixels */
  size: PropTypes.number,
  /** The fill color */
  color: PropTypes.string,
  /** Additional CSS class names */
  className: PropTypes.string,
};
