import React from "react";
import PropTypes from "prop-types";

export default function LiniShirt({
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
      className={`Component Lini LiniShirt ${className}`}
      {...moreProps}
    >
      <g fill={color}>
        <path d="M13.5 19h-8c-0.827 0-1.5-0.673-1.5-1.5v-9.306l-2.342 0.781c-0.262 0.087-0.545-0.054-0.632-0.316l-1-3c-0.079-0.236 0.028-0.494 0.251-0.605l6-3c0.155-0.077 0.339-0.069 0.486 0.022s0.237 0.252 0.237 0.425c0 1.378 1.122 2.5 2.5 2.5s2.5-1.122 2.5-2.5c0-0.173 0.090-0.334 0.237-0.425s0.331-0.099 0.486-0.022l6 3c0.223 0.111 0.329 0.369 0.251 0.605l-1 3c-0.087 0.262-0.37 0.404-0.632 0.316l-2.342-0.781v9.306c0 0.827-0.673 1.5-1.5 1.5zM4.5 7c0.104 0 0.206 0.032 0.292 0.094 0.13 0.094 0.208 0.245 0.208 0.406v10c0 0.276 0.224 0.5 0.5 0.5h8c0.276 0 0.5-0.224 0.5-0.5v-10c0-0.161 0.077-0.312 0.208-0.406s0.298-0.12 0.45-0.069l2.526 0.842 0.705-2.114-4.973-2.487c-0.351 1.562-1.749 2.733-3.415 2.733s-3.065-1.171-3.415-2.733l-4.973 2.487 0.705 2.114 2.526-0.842c0.052-0.017 0.105-0.026 0.158-0.026z" />
      </g>
    </svg>
  );
}

LiniShirt.propTypes = {
  /** The height/width in pixels */
  size: PropTypes.number,
  /** The fill color */
  color: PropTypes.string,
  /** Additional CSS class names */
  className: PropTypes.string,
};
