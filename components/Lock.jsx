import React from "react";
import PropTypes from "prop-types";
import Lini from "../Lini.jsx";

export default function LiniLock(props = {}) {
  props.name = "Lock";
  
  return (
    <Lini {...props}>
      <path d="M14.5 8h-0.5v-1.5c0-2.481-2.019-4.5-4.5-4.5s-4.5 2.019-4.5 4.5v1.5h-0.5c-0.827 0-1.5 0.673-1.5 1.5v8c0 0.827 0.673 1.5 1.5 1.5h10c0.827 0 1.5-0.673 1.5-1.5v-8c0-0.827-0.673-1.5-1.5-1.5zM6 6.5c0-1.93 1.57-3.5 3.5-3.5s3.5 1.57 3.5 3.5v1.5h-7v-1.5zM15 17.5c0 0.276-0.224 0.5-0.5 0.5h-10c-0.276 0-0.5-0.224-0.5-0.5v-8c0-0.276 0.224-0.5 0.5-0.5h10c0.276 0 0.5 0.224 0.5 0.5v8z" />
    </Lini>
  );
}

LiniLock.propTypes = {
  /** The height/width in pixels */
  size: PropTypes.number,
  /** The fill color */
  color: PropTypes.string,
  /** Additional CSS class names */
  className: PropTypes.string,
};
