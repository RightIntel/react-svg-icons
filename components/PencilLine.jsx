import React from "react";
import PropTypes from "prop-types";
import Lini from "../Lini.jsx";

export default function LiniPencilLine(props = {}) {
  props.name = "PencilLine";
  
  return (
    <Lini {...props}>
      <path d="M2.5 17c-0.131 0-0.258-0.051-0.354-0.146-0.128-0.128-0.177-0.316-0.127-0.491l1-3.5c0.023-0.082 0.067-0.156 0.127-0.216l11-11c0.195-0.195 0.512-0.195 0.707 0l2.5 2.5c0.195 0.195 0.195 0.512 0 0.707l-11 11c-0.060 0.060-0.134 0.104-0.216 0.127l-3.5 1c-0.045 0.013-0.092 0.019-0.137 0.019zM3.945 13.262l-0.717 2.51 2.51-0.717 10.555-10.555-1.793-1.793-10.555 10.555z" />
      <path d="M17.5 19h-15c-0.276 0-0.5-0.224-0.5-0.5s0.224-0.5 0.5-0.5h15c0.276 0 0.5 0.224 0.5 0.5s-0.224 0.5-0.5 0.5z" />
    </Lini>
  );
}

LiniPencilLine.propTypes = {
  /** The height/width in pixels */
  size: PropTypes.number,
  /** The fill color */
  color: PropTypes.string,
  /** Additional CSS class names */
  className: PropTypes.string,
};
