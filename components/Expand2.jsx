import React from "react";
import PropTypes from "prop-types";
import Lini from "../Lini.jsx";

export default function LiniExpand2(props = {}) {
  props.name = "Expand2";
  
  return (
    <Lini {...props}>
      <path d="M19.5 0h-5c-0.276 0-0.5 0.224-0.5 0.5s0.224 0.5 0.5 0.5h3.793l-6.146 6.146c-0.195 0.195-0.195 0.512 0 0.707 0.098 0.098 0.226 0.146 0.353 0.146s0.256-0.049 0.353-0.146l6.147-6.146v3.793c0 0.276 0.224 0.5 0.5 0.5s0.5-0.224 0.5-0.5v-5c0-0.276-0.224-0.5-0.5-0.5z" />
      <path d="M7.854 12.147c-0.195-0.195-0.512-0.195-0.707 0l-6.146 6.146v-3.793c0-0.276-0.224-0.5-0.5-0.5s-0.5 0.224-0.5 0.5v5c0 0.276 0.224 0.5 0.5 0.5h5c0.276 0 0.5-0.224 0.5-0.5s-0.224-0.5-0.5-0.5h-3.793l6.146-6.147c0.195-0.195 0.195-0.512 0-0.707z" />
    </Lini>
  );
}

LiniExpand2.propTypes = {
  /** The height/width in pixels */
  size: PropTypes.number,
  /** The fill color */
  color: PropTypes.string,
  /** Additional CSS class names */
  className: PropTypes.string,
};
