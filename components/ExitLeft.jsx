import React from "react";
import PropTypes from "prop-types";

export default function LiniExitLeft({
  size = 20,
  color = "#333",
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
      className={`Component Lini LiniExitLeft ${className}`}
      {...moreProps}
    >
      <g fill={color}>
        <path d="M20 4.5v12c0 0.827-0.673 1.5-1.5 1.5h-10c-0.827 0-1.5-0.673-1.5-1.5v-4c0-0.276 0.224-0.5 0.5-0.5s0.5 0.224 0.5 0.5v4c0 0.276 0.224 0.5 0.5 0.5h10c0.276 0 0.5-0.224 0.5-0.5v-12c0-0.276-0.224-0.5-0.5-0.5h-10c-0.276 0-0.5 0.224-0.5 0.5v4c0 0.276-0.224 0.5-0.5 0.5s-0.5-0.224-0.5-0.5v-4c0-0.827 0.673-1.5 1.5-1.5h10c0.827 0 1.5 0.673 1.5 1.5z" />
        <path d="M3.646 7.147l-3 3c-0.195 0.195-0.195 0.512 0 0.707l3 3c0.195 0.195 0.512 0.195 0.707 0s0.195-0.512 0-0.707l-2.146-2.147h11.293c0.276 0 0.5-0.224 0.5-0.5s-0.224-0.5-0.5-0.5h-11.293l2.146-2.147c0.098-0.098 0.146-0.226 0.146-0.353s-0.049-0.256-0.146-0.353c-0.195-0.195-0.512-0.195-0.707 0z" />
      </g>
    </svg>
  );
}

LiniExitLeft.propTypes = {
  /** The height/width in pixels */
  size: PropTypes.number,
  /** The fill color */
  color: PropTypes.string,
  /** Additional CSS class names */
  className: PropTypes.string,
};
