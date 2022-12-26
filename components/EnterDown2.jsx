import React from "react";
import PropTypes from "prop-types";

export default function LiniEnterDown2({
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
      className={`Component Lini LiniEnterDown2 ${className}`}
      {...moreProps}
    >
      <g fill={color}>
        <path d="M17.5 20h-16c-0.827 0-1.5-0.673-1.5-1.5v-1c0-0.827 0.673-1.5 1.5-1.5h5c0.276 0 0.5 0.224 0.5 0.5s-0.224 0.5-0.5 0.5h-5c-0.276 0-0.5 0.224-0.5 0.5v1c0 0.276 0.224 0.5 0.5 0.5h16c0.276 0 0.5-0.224 0.5-0.5v-1c0-0.276-0.224-0.5-0.5-0.5h-5c-0.276 0-0.5-0.224-0.5-0.5s0.224-0.5 0.5-0.5h5c0.827 0 1.5 0.673 1.5 1.5v1c0 0.827-0.673 1.5-1.5 1.5z" />
        <path d="M14.853 11.647c-0.195-0.195-0.512-0.195-0.707 0l-4.146 4.146v-14.293c0-0.276-0.224-0.5-0.5-0.5s-0.5 0.224-0.5 0.5v14.293l-4.146-4.146c-0.195-0.195-0.512-0.195-0.707 0s-0.195 0.512 0 0.707l5 5c0.098 0.098 0.226 0.146 0.354 0.146s0.256-0.049 0.354-0.147l5-5c0.195-0.195 0.195-0.512-0-0.707z" />
      </g>
    </svg>
  );
}

LiniEnterDown2.propTypes = {
  /** The height/width in pixels */
  size: PropTypes.number,
  /** The fill color */
  color: PropTypes.string,
  /** Additional CSS class names */
  className: PropTypes.string,
};
