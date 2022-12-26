import React from "react";
import PropTypes from "prop-types";

export default function LiniSim({
  size = 20,
  color = "",
  className = "",
  ...moreProps
}) {
  return (
    <svg
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 20 20"
      width={size}
      height={size}
      className={`Component Lini LiniSim ${className}`}
      {...moreProps}
    >
      <g fill={color}>
        <path d="M15.5 20h-11c-0.827 0-1.5-0.673-1.5-1.5v-11.5c0-0.688 0.367-1.574 0.854-2.061l3.086-3.086c0.487-0.487 1.373-0.854 2.061-0.854h6.5c0.827 0 1.5 0.673 1.5 1.5v16c0 0.827-0.673 1.5-1.5 1.5zM9 2c-0.415 0-1.060 0.267-1.354 0.561l-3.086 3.086c-0.293 0.293-0.561 0.939-0.561 1.354v11.5c0 0.276 0.224 0.5 0.5 0.5h11c0.276 0 0.5-0.224 0.5-0.5v-16c0-0.276-0.224-0.5-0.5-0.5h-6.5z" />
        <path d="M13 9h-6c-1.103 0-2 0.897-2 2v5c0 1.103 0.897 2 2 2h6c1.103 0 2-0.897 2-2v-5c0-1.103-0.897-2-2-2zM14 11v2h-2v-3h1c0.551 0 1 0.449 1 1zM9 13v-3h2v3h-2zM11 14v3h-2v-3h2zM7 10h1v3h-2v-2c0-0.551 0.449-1 1-1zM6 16v-2h2v3h-1c-0.551 0-1-0.449-1-1zM13 17h-1v-3h2v2c0 0.551-0.449 1-1 1z" />
      </g>
    </svg>
  );
}

LiniSim.propTypes = {
  /** The height/width in pixels */
  size: PropTypes.number,
  /** The fill color */
  color: PropTypes.string,
  /** Additional CSS class names */
  className: PropTypes.string,
};
