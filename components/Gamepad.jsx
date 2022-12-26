import React from "react";
import PropTypes from "prop-types";

export default function LiniGamepad({
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
      className={`Component Lini LiniGamepad ${className}`}
      {...moreProps}
    >
      <g fill={color}>
        <path d="M15 15c-1.081 0-2.139-0.354-3-1l-4 0c-0.861 0.646-1.919 1-3 1-2.757 0-5-2.243-5-5s2.243-5 5-5h10c2.757 0 5 2.243 5 5s-2.243 5-5 5zM12.172 13c0.114 0 0.226 0.039 0.314 0.111 0.718 0.581 1.588 0.888 2.514 0.888 2.206 0 4-1.794 4-4s-1.794-4-4-4h-10c-2.206 0-4 1.794-4 4s1.794 4 4 4c0.926 0 1.795-0.307 2.514-0.888 0.089-0.072 0.2-0.111 0.314-0.111h4.343z" />
        <path d="M7.5 9h-1.5v-1.5c0-0.276-0.224-0.5-0.5-0.5s-0.5 0.224-0.5 0.5v1.5h-1.5c-0.276 0-0.5 0.224-0.5 0.5s0.224 0.5 0.5 0.5h1.5v1.5c0 0.276 0.224 0.5 0.5 0.5s0.5-0.224 0.5-0.5v-1.5h1.5c0.276 0 0.5-0.224 0.5-0.5s-0.224-0.5-0.5-0.5z" />
        <path d="M13.5 10c-0.827 0-1.5-0.673-1.5-1.5s0.673-1.5 1.5-1.5 1.5 0.673 1.5 1.5-0.673 1.5-1.5 1.5zM13.5 8c-0.276 0-0.5 0.224-0.5 0.5s0.224 0.5 0.5 0.5 0.5-0.224 0.5-0.5-0.224-0.5-0.5-0.5z" />
        <path d="M16.5 12c-0.827 0-1.5-0.673-1.5-1.5s0.673-1.5 1.5-1.5 1.5 0.673 1.5 1.5-0.673 1.5-1.5 1.5zM16.5 10c-0.276 0-0.5 0.224-0.5 0.5s0.224 0.5 0.5 0.5 0.5-0.224 0.5-0.5-0.224-0.5-0.5-0.5z" />
      </g>
    </svg>
  );
}

LiniGamepad.propTypes = {
  /** The height/width in pixels */
  size: PropTypes.number,
  /** The fill color */
  color: PropTypes.string,
  /** Additional CSS class names */
  className: PropTypes.string,
};
