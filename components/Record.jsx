import React from "react";
import PropTypes from "prop-types";
import Lini from "../Lini.jsx";

export default function LiniRecord(props = {}) {
  props.name = "Record";
  
  return (
    <Lini {...props}>
      <path d="M11.5 17c0.276 0 0.5-0.224 0.5-0.5s-0.224-0.5-0.5-0.5h-3.5v-1.5c0-0.276 0.224-0.5 0.5-0.5h3c0.276 0 0.5-0.224 0.5-0.5s-0.224-0.5-0.5-0.5h-3c-0.827 0-1.5 0.673-1.5 1.5v4c0 0.827 0.673 1.5 1.5 1.5h3c0.276 0 0.5-0.224 0.5-0.5s-0.224-0.5-0.5-0.5h-3c-0.276 0-0.5-0.224-0.5-0.5v-1.5h3.5z" />
      <path d="M18.5 20h-3c-0.827 0-1.5-0.673-1.5-1.5v-4c0-0.827 0.673-1.5 1.5-1.5h3c0.276 0 0.5 0.224 0.5 0.5s-0.224 0.5-0.5 0.5h-3c-0.276 0-0.5 0.224-0.5 0.5v4c0 0.276 0.224 0.5 0.5 0.5h3c0.276 0 0.5 0.224 0.5 0.5s-0.224 0.5-0.5 0.5z" />
      <path d="M4.884 19.18l-1.817-2.18h0.432c0.827 0 1.5-0.673 1.5-1.5v-1c0-0.827-0.673-1.5-1.5-1.5h-2c-0.827 0-1.5 0.673-1.5 1.5v5c0 0.276 0.224 0.5 0.5 0.5s0.5-0.224 0.5-0.5v-2.5h0.766l2.35 2.82c0.099 0.119 0.241 0.18 0.384 0.18 0.113 0 0.226-0.038 0.32-0.116 0.212-0.177 0.241-0.492 0.064-0.704zM1 14.5c0-0.276 0.224-0.5 0.5-0.5h2c0.276 0 0.5 0.224 0.5 0.5v1c0 0.276-0.224 0.5-0.5 0.5h-1.502c-0 0-0.001 0-0.001 0h-0.997v-1.5z" />
      <path d="M9.5 10c-2.481 0-4.5-2.019-4.5-4.5s2.019-4.5 4.5-4.5c2.481 0 4.5 2.019 4.5 4.5s-2.019 4.5-4.5 4.5zM9.5 2c-1.93 0-3.5 1.57-3.5 3.5s1.57 3.5 3.5 3.5 3.5-1.57 3.5-3.5-1.57-3.5-3.5-3.5z" />
    </Lini>
  );
}

LiniRecord.propTypes = {
  /** The height/width in pixels */
  size: PropTypes.number,
  /** The fill color */
  color: PropTypes.string,
  /** Additional CSS class names */
  className: PropTypes.string,
};
