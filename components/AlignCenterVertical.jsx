import React from "react";
import PropTypes from "prop-types";

export default function LiniAlignCenterVertical({
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
      className={`Component Lini LiniAlignCenterVertical ${className}`}
      {...moreProps}
    >
      <g fill={color}>
        <path d="M16.5 11h-6.5v-2h3.5c0.827 0 1.5-0.673 1.5-1.5v-4c0-0.827-0.673-1.5-1.5-1.5h-3.5v-1.5c0-0.276-0.224-0.5-0.5-0.5s-0.5 0.224-0.5 0.5v1.5h-3.5c-0.827 0-1.5 0.673-1.5 1.5v4c0 0.827 0.673 1.5 1.5 1.5h3.5v2h-6.5c-0.827 0-1.5 0.673-1.5 1.5v4c0 0.827 0.673 1.5 1.5 1.5h6.5v1.5c0 0.276 0.224 0.5 0.5 0.5s0.5-0.224 0.5-0.5v-1.5h6.5c0.827 0 1.5-0.673 1.5-1.5v-4c0-0.827-0.673-1.5-1.5-1.5zM13.5 3c0.276 0 0.5 0.224 0.5 0.5v4c0 0.276-0.224 0.5-0.5 0.5h-3.5v-5h3.5zM5.5 8c-0.276 0-0.5-0.224-0.5-0.5v-4c0-0.276 0.224-0.5 0.5-0.5h3.5v5h-3.5zM2.5 17c-0.276 0-0.5-0.224-0.5-0.5v-4c0-0.276 0.224-0.5 0.5-0.5h6.5v5h-6.5zM17 16.5c0 0.276-0.224 0.5-0.5 0.5h-6.5v-5h6.5c0.276 0 0.5 0.224 0.5 0.5v4z" />
      </g>
    </svg>
  );
}

LiniAlignCenterVertical.propTypes = {
  /** The height/width in pixels */
  size: PropTypes.number,
  /** The fill color */
  color: PropTypes.string,
  /** Additional CSS class names */
  className: PropTypes.string,
};
