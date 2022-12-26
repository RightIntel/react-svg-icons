import React from "react";
import PropTypes from "prop-types";

export default function LiniAlbum({
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
      className={`Component Lini LiniAlbum ${className}`}
      {...moreProps}
    >
      <g fill={color}>
        <path d="M16.5 20h-14c-0.827 0-1.5-0.673-1.5-1.5v-13c0-0.827 0.673-1.5 1.5-1.5h14c0.827 0 1.5 0.673 1.5 1.5v13c0 0.827-0.673 1.5-1.5 1.5zM2.5 5c-0.276 0-0.5 0.224-0.5 0.5v13c0 0.276 0.224 0.5 0.5 0.5h14c0.276 0 0.5-0.224 0.5-0.5v-13c0-0.276-0.224-0.5-0.5-0.5h-14z" />
        <path d="M16.5 3h-14c-0.276 0-0.5-0.224-0.5-0.5s0.224-0.5 0.5-0.5h14c0.276 0 0.5 0.224 0.5 0.5s-0.224 0.5-0.5 0.5z" />
        <path d="M15.5 1h-12c-0.276 0-0.5-0.224-0.5-0.5s0.224-0.5 0.5-0.5h12c0.276 0 0.5 0.224 0.5 0.5s-0.224 0.5-0.5 0.5z" />
        <path d="M13.817 9.113c-0.116-0.095-0.268-0.133-0.415-0.104l-5 1c-0.234 0.047-0.402 0.252-0.402 0.49v2.695c-0.293-0.124-0.633-0.195-1-0.195-1.122 0-2 0.659-2 1.5s0.878 1.5 2 1.5 2-0.659 2-1.5v-3.59l4-0.8v2.085c-0.293-0.124-0.633-0.195-1-0.195-1.122 0-2 0.659-2 1.5s0.878 1.5 2 1.5 2-0.659 2-1.5v-4c0-0.15-0.067-0.292-0.183-0.387zM7 15c-0.61 0-1-0.296-1-0.5s0.39-0.5 1-0.5 1 0.296 1 0.5-0.39 0.5-1 0.5zM12 14c-0.61 0-1-0.296-1-0.5s0.39-0.5 1-0.5 1 0.296 1 0.5-0.39 0.5-1 0.5z" />
      </g>
    </svg>
  );
}

LiniAlbum.propTypes = {
  /** The height/width in pixels */
  size: PropTypes.number,
  /** The fill color */
  color: PropTypes.string,
  /** Additional CSS class names */
  className: PropTypes.string,
};
