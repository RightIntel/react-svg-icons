import React from "react";
import PropTypes from "prop-types";

export default function LiniBone({
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
      className={`Component Lini LiniBone ${className}`}
      {...moreProps}
    >
      <g fill={color}>
        <path d="M14.5 20c-1.378 0-2.5-1.122-2.5-2.5v-1.5c0-0.415-0.267-1.060-0.561-1.354l-6.086-6.086c-0.293-0.293-0.939-0.561-1.354-0.561h-1.5c-1.378 0-2.5-1.122-2.5-2.5s1.122-2.5 2.5-2.5c0.276 0 0.5-0.224 0.5-0.5 0-1.378 1.122-2.5 2.5-2.5s2.5 1.122 2.5 2.5v1.5c0 0.415 0.267 1.060 0.561 1.354l6.086 6.086c0.293 0.293 0.939 0.561 1.354 0.561h1.5c1.378 0 2.5 1.122 2.5 2.5s-1.122 2.5-2.5 2.5c-0.276 0-0.5 0.224-0.5 0.5 0 1.378-1.122 2.5-2.5 2.5zM5.5 1c-0.827 0-1.5 0.673-1.5 1.5s-0.673 1.5-1.5 1.5-1.5 0.673-1.5 1.5 0.673 1.5 1.5 1.5h1.5c0.688 0 1.574 0.367 2.061 0.854l6.086 6.086c0.487 0.487 0.854 1.372 0.854 2.061v1.5c0 0.827 0.673 1.5 1.5 1.5s1.5-0.673 1.5-1.5 0.673-1.5 1.5-1.5 1.5-0.673 1.5-1.5-0.673-1.5-1.5-1.5h-1.5c-0.688 0-1.574-0.367-2.061-0.854l-6.086-6.086c-0.487-0.487-0.854-1.372-0.854-2.061v-1.5c0-0.827-0.673-1.5-1.5-1.5z" />
      </g>
    </svg>
  );
}

LiniBone.propTypes = {
  /** The height/width in pixels */
  size: PropTypes.number,
  /** The fill color */
  color: PropTypes.string,
  /** Additional CSS class names */
  className: PropTypes.string,
};
