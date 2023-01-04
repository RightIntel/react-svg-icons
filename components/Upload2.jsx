import React from "react";
import PropTypes from "prop-types";
import Lini from "../Lini.jsx";

export default function LiniUpload2(props = {}) {
  props.name = "Upload2";
  
  return (
    <Lini {...props}>
      <path d="M17.5 19h-16c-0.827 0-1.5-0.673-1.5-1.5v-2c0-0.276 0.224-0.5 0.5-0.5s0.5 0.224 0.5 0.5v2c0 0.276 0.224 0.5 0.5 0.5h16c0.276 0 0.5-0.224 0.5-0.5v-2c0-0.276 0.224-0.5 0.5-0.5s0.5 0.224 0.5 0.5v2c0 0.827-0.673 1.5-1.5 1.5z" />
      <path d="M14.854 8.646l-5-5c-0.195-0.195-0.512-0.195-0.707 0l-5 5c-0.195 0.195-0.195 0.512 0 0.707s0.512 0.195 0.707 0l4.146-4.146v10.293c0 0.276 0.224 0.5 0.5 0.5s0.5-0.224 0.5-0.5v-10.293l4.146 4.146c0.098 0.098 0.226 0.146 0.354 0.146s0.256-0.049 0.354-0.146c0.195-0.195 0.195-0.512 0-0.707z" />
    </Lini>
  );
}

LiniUpload2.propTypes = {
  /** The height/width in pixels */
  size: PropTypes.number,
  /** The fill color */
  color: PropTypes.string,
  /** Additional CSS class names */
  className: PropTypes.string,
};
