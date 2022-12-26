import React from "react";
import PropTypes from "prop-types";

export default function LiniAlignBottom({
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
      className={`Component Lini LiniAlignBottom ${className}`}
      {...moreProps}
    >
      <g fill={color}>
        <path d="M0 19.5c0 0.276 0.224 0.5 0.5 0.5h19c0.276 0 0.5-0.224 0.5-0.5s-0.224-0.5-0.5-0.5h-19c-0.276 0-0.5 0.224-0.5 0.5z" />
        <path d="M12.5 7h4c0.827 0 1.5 0.673 1.5 1.5v8c0 0.827-0.673 1.5-1.5 1.5h-4c-0.827 0-1.5-0.673-1.5-1.5v-8c0-0.827 0.673-1.5 1.5-1.5zM17 8.5c0-0.276-0.224-0.5-0.5-0.5h-4c-0.276 0-0.5 0.224-0.5 0.5v8c0 0.276 0.224 0.5 0.5 0.5h4c0.276 0 0.5-0.224 0.5-0.5v-8z" />
        <path d="M3.5 1h4c0.827 0 1.5 0.673 1.5 1.5v14c0 0.827-0.673 1.5-1.5 1.5h-4c-0.827 0-1.5-0.673-1.5-1.5v-14c0-0.827 0.673-1.5 1.5-1.5zM8 2.5c0-0.276-0.224-0.5-0.5-0.5h-4c-0.276 0-0.5 0.224-0.5 0.5v14c0 0.276 0.224 0.5 0.5 0.5h4c0.276 0 0.5-0.224 0.5-0.5v-14z" />
      </g>
    </svg>
  );
}

LiniAlignBottom.propTypes = {
  /** The height/width in pixels */
  size: PropTypes.number,
  /** The fill color */
  color: PropTypes.string,
  /** Additional CSS class names */
  className: PropTypes.string,
};
