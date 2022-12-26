import React from "react";
import PropTypes from "prop-types";

export default function LiniPaintRoller({
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
      className={`Component Lini LiniPaintRoller ${className}`}
      {...moreProps}
    >
      <g fill={color}>
        <path d="M17.5 4h-0.5v-0.5c0-0.827-0.673-1.5-1.5-1.5h-14c-0.827 0-1.5 0.673-1.5 1.5v2c0 0.827 0.673 1.5 1.5 1.5h14c0.827 0 1.5-0.673 1.5-1.5v-0.5h0.5c0.276 0 0.5 0.224 0.5 0.5v2c0 0.276-0.224 0.5-0.5 0.5h-8c-0.827 0-1.5 0.673-1.5 1.5v1.586c-0.582 0.206-1 0.762-1 1.414v5c0 0.827 0.673 1.5 1.5 1.5s1.5-0.673 1.5-1.5v-5c0-0.652-0.418-1.208-1-1.414v-1.586c0-0.276 0.224-0.5 0.5-0.5h8c0.827 0 1.5-0.673 1.5-1.5v-2c0-0.827-0.673-1.5-1.5-1.5zM16 5.5c0 0.276-0.224 0.5-0.5 0.5h-14c-0.276 0-0.5-0.224-0.5-0.5v-2c0-0.276 0.224-0.5 0.5-0.5h14c0.276 0 0.5 0.224 0.5 0.5v2zM9 17.5c0 0.276-0.224 0.5-0.5 0.5s-0.5-0.224-0.5-0.5v-5c0-0.276 0.224-0.5 0.5-0.5s0.5 0.224 0.5 0.5v5z" />
      </g>
    </svg>
  );
}

LiniPaintRoller.propTypes = {
  /** The height/width in pixels */
  size: PropTypes.number,
  /** The fill color */
  color: PropTypes.string,
  /** Additional CSS class names */
  className: PropTypes.string,
};
