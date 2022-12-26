import React from "react";
import PropTypes from "prop-types";

export default function LiniExitRight({
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
      className={`Component Lini LiniExitRight ${className}`}
      {...moreProps}
    >
      <g fill={color}>
        <path d="M0 16.5v-12c0-0.827 0.673-1.5 1.5-1.5h10c0.827 0 1.5 0.673 1.5 1.5v4c0 0.276-0.224 0.5-0.5 0.5s-0.5-0.224-0.5-0.5v-4c0-0.276-0.224-0.5-0.5-0.5h-10c-0.276 0-0.5 0.224-0.5 0.5v12c0 0.276 0.224 0.5 0.5 0.5h10c0.276 0 0.5-0.224 0.5-0.5v-4c0-0.276 0.224-0.5 0.5-0.5s0.5 0.224 0.5 0.5v4c0 0.827-0.673 1.5-1.5 1.5h-10c-0.827 0-1.5-0.673-1.5-1.5z" />
        <path d="M16.354 13.853l3-3c0.195-0.195 0.195-0.512 0-0.707l-3-3c-0.195-0.195-0.512-0.195-0.707 0s-0.195 0.512 0 0.707l2.146 2.147h-11.293c-0.276 0-0.5 0.224-0.5 0.5s0.224 0.5 0.5 0.5h11.293l-2.146 2.147c-0.098 0.098-0.146 0.226-0.146 0.353s0.049 0.256 0.146 0.353c0.195 0.195 0.512 0.195 0.707 0z" />
      </g>
    </svg>
  );
}

LiniExitRight.propTypes = {
  /** The height/width in pixels */
  size: PropTypes.number,
  /** The fill color */
  color: PropTypes.string,
  /** Additional CSS class names */
  className: PropTypes.string,
};
