import React from "react";
import PropTypes from "prop-types";

export default function LiniEnterHorizontal({
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
      className={`Component Lini LiniEnterHorizontal ${className}`}
      {...moreProps}
    >
      <g fill={color}>
        <path d="M8 18.5v-5c0-0.276 0.224-0.5 0.5-0.5s0.5 0.224 0.5 0.5v5c0 0.276 0.224 0.5 0.5 0.5h1c0.276 0 0.5-0.224 0.5-0.5v-5c0-0.276 0.224-0.5 0.5-0.5s0.5 0.224 0.5 0.5v5c0 0.827-0.673 1.5-1.5 1.5h-1c-0.827 0-1.5-0.673-1.5-1.5z" />
        <path d="M8 7.5v-5c0-0.827 0.673-1.5 1.5-1.5h1c0.827 0 1.5 0.673 1.5 1.5v5c0 0.276-0.224 0.5-0.5 0.5s-0.5-0.224-0.5-0.5v-5c0-0.276-0.224-0.5-0.5-0.5h-1c-0.276 0-0.5 0.224-0.5 0.5v5c0 0.276-0.224 0.5-0.5 0.5s-0.5-0.224-0.5-0.5z" />
        <path d="M14.354 13.854c0.195-0.195 0.195-0.512 0-0.707l-2.146-2.146h7.293c0.276 0 0.5-0.224 0.5-0.5s-0.224-0.5-0.5-0.5h-7.293l2.146-2.146c0.195-0.195 0.195-0.512 0-0.707s-0.512-0.195-0.707 0l-3 3c-0.098 0.098-0.146 0.226-0.146 0.354s0.049 0.256 0.146 0.354l3 3c0.195 0.195 0.512 0.195 0.707 0z" />
        <path d="M6.354 13.854l3-3c0.195-0.195 0.195-0.512 0-0.707l-3-3c-0.195-0.195-0.512-0.195-0.707 0s-0.195 0.512 0 0.707l2.146 2.146h-7.293c-0.276 0-0.5 0.224-0.5 0.5s0.224 0.5 0.5 0.5h7.293l-2.146 2.146c-0.098 0.098-0.146 0.226-0.146 0.354s0.049 0.256 0.146 0.354c0.195 0.195 0.512 0.195 0.707 0z" />
      </g>
    </svg>
  );
}

LiniEnterHorizontal.propTypes = {
  /** The height/width in pixels */
  size: PropTypes.number,
  /** The fill color */
  color: PropTypes.string,
  /** Additional CSS class names */
  className: PropTypes.string,
};
