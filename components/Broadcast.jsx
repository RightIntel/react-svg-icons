import React from "react";
import PropTypes from "prop-types";

export default function LiniBroadcast({
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
      className={`Component Lini LiniBroadcast ${className}`}
      {...moreProps}
    >
      <g fill={color}>
        <path d="M9.5 12c-0.827 0-1.5-0.673-1.5-1.5s0.673-1.5 1.5-1.5c0.827 0 1.5 0.673 1.5 1.5s-0.673 1.5-1.5 1.5zM9.5 10c-0.276 0-0.5 0.224-0.5 0.5s0.224 0.5 0.5 0.5 0.5-0.224 0.5-0.5-0.224-0.5-0.5-0.5z" />
        <path d="M12.328 13.828c-0.128 0-0.256-0.049-0.354-0.146-0.195-0.195-0.195-0.512 0-0.707 0.661-0.661 1.025-1.54 1.025-2.475s-0.364-1.814-1.025-2.475c-0.195-0.195-0.195-0.512-0-0.707s0.512-0.195 0.707 0c0.85 0.85 1.318 1.98 1.318 3.182s-0.468 2.332-1.318 3.182c-0.098 0.098-0.226 0.146-0.354 0.146z" />
        <path d="M14.45 15.95c-0.128 0-0.256-0.049-0.354-0.146-0.195-0.195-0.195-0.512 0-0.707 1.228-1.228 1.904-2.86 1.904-4.596s-0.676-3.369-1.904-4.596c-0.195-0.195-0.195-0.512 0-0.707s0.512-0.195 0.707 0c1.417 1.417 2.197 3.3 2.197 5.303s-0.78 3.887-2.197 5.303c-0.098 0.098-0.226 0.146-0.354 0.146z" />
        <path d="M6.672 13.828c-0.128 0-0.256-0.049-0.354-0.146-0.85-0.85-1.318-1.98-1.318-3.182s0.468-2.332 1.318-3.182c0.195-0.195 0.512-0.195 0.707 0s0.195 0.512 0 0.707c-0.661 0.661-1.025 1.54-1.025 2.475s0.364 1.814 1.025 2.475c0.195 0.195 0.195 0.512 0 0.707-0.098 0.098-0.226 0.146-0.354 0.146z" />
        <path d="M4.55 15.95c-0.128 0-0.256-0.049-0.354-0.146-1.417-1.417-2.197-3.3-2.197-5.303s0.78-3.887 2.197-5.303c0.195-0.195 0.512-0.195 0.707 0s0.195 0.512 0 0.707c-1.228 1.228-1.904 2.86-1.904 4.596s0.676 3.368 1.904 4.596c0.195 0.195 0.195 0.512 0 0.707-0.098 0.098-0.226 0.146-0.354 0.146z" />
      </g>
    </svg>
  );
}

LiniBroadcast.propTypes = {
  /** The height/width in pixels */
  size: PropTypes.number,
  /** The fill color */
  color: PropTypes.string,
  /** Additional CSS class names */
  className: PropTypes.string,
};
