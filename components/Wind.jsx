import React from "react";
import PropTypes from "prop-types";

export default function LiniWind({
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
      className={`Component Lini LiniWind ${className}`}
      {...moreProps}
    >
      <g fill={color}>
        <path d="M19.5 15h-8c-0.276 0-0.5-0.224-0.5-0.5s0.224-0.5 0.5-0.5h8c0.276 0 0.5 0.224 0.5 0.5s-0.224 0.5-0.5 0.5z" />
        <path d="M18.5 10h-8.5c-1.654 0-3-1.346-3-3s1.346-3 3-3c1.483 0 2.76 1.105 2.97 2.571 0.039 0.273 0.293 0.463 0.566 0.424s0.463-0.292 0.424-0.566c-0.135-0.944-0.607-1.811-1.328-2.442-0.728-0.637-1.663-0.987-2.632-0.987-2.206 0-4 1.794-4 4 0 1.194 0.526 2.266 1.357 3h-4.857c-0.827 0-1.5-0.673-1.5-1.5s0.673-1.5 1.5-1.5c0.534 0 1.032 0.287 1.3 0.75 0.138 0.239 0.444 0.321 0.683 0.182s0.321-0.444 0.182-0.683c-0.446-0.771-1.276-1.25-2.165-1.25-1.378 0-2.5 1.122-2.5 2.5s1.122 2.5 2.5 2.5h16c0.276 0 0.5-0.224 0.5-0.5s-0.224-0.5-0.5-0.5z" />
        <path d="M4.5 17c-1.378 0-2.5-1.122-2.5-2.5s1.122-2.5 2.5-2.5h11c0.276 0 0.5 0.224 0.5 0.5s-0.224 0.5-0.5 0.5h-11c-0.827 0-1.5 0.673-1.5 1.5s0.673 1.5 1.5 1.5c0.534 0 1.032-0.287 1.3-0.75 0.138-0.239 0.444-0.321 0.683-0.182s0.321 0.444 0.182 0.683c-0.446 0.771-1.276 1.25-2.165 1.25z" />
      </g>
    </svg>
  );
}

LiniWind.propTypes = {
  /** The height/width in pixels */
  size: PropTypes.number,
  /** The fill color */
  color: PropTypes.string,
  /** Additional CSS class names */
  className: PropTypes.string,
};
