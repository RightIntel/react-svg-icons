import React from "react";
import PropTypes from "prop-types";
import Lini from "../Lini.jsx";

export default function LiniHdd(props = {}) {
  props.name = "Hdd";
  
  return (
    <Lini {...props}>
      <path d="M17.5 20h-16c-0.827 0-1.5-0.673-1.5-1.5v-3c0-0.627 0.22-1.557 0.5-2.118l2.106-4.211c0.328-0.657 1.16-1.171 1.894-1.171h10c0.734 0 1.566 0.514 1.894 1.171l2.106 4.211c0.28 0.561 0.5 1.491 0.5 2.118v3c0 0.827-0.673 1.5-1.5 1.5zM4.5 9c-0.362 0-0.838 0.295-1 0.618l-2.106 4.211c-0.21 0.42-0.394 1.201-0.394 1.671v3c0 0.276 0.224 0.5 0.5 0.5h16c0.276 0 0.5-0.224 0.5-0.5v-3c0-0.47-0.184-1.251-0.394-1.671l-2.106-4.211c-0.162-0.323-0.638-0.618-1-0.618h-10z" />
      <path d="M16.5 18h-1c-0.276 0-0.5-0.224-0.5-0.5s0.224-0.5 0.5-0.5h1c0.276 0 0.5 0.224 0.5 0.5s-0.224 0.5-0.5 0.5z" />
      <path d="M16.5 16h-14c-0.276 0-0.5-0.224-0.5-0.5s0.224-0.5 0.5-0.5h14c0.276 0 0.5 0.224 0.5 0.5s-0.224 0.5-0.5 0.5z" />
    </Lini>
  );
}

LiniHdd.propTypes = {
  /** The height/width in pixels */
  size: PropTypes.number,
  /** The fill color */
  color: PropTypes.string,
  /** Additional CSS class names */
  className: PropTypes.string,
};
