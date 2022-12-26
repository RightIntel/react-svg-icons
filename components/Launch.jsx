import React from "react";
import PropTypes from "prop-types";

export default function LiniLaunch({
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
      className={`Component Lini LiniLaunch ${className}`}
      {...moreProps}
    >
      <g fill={color}>
        <path d="M19.5 0h-5c-0.276 0-0.5 0.224-0.5 0.5s0.224 0.5 0.5 0.5h3.833l-11.186 11.146c-0.196 0.195-0.196 0.511-0.001 0.707 0.098 0.098 0.226 0.147 0.354 0.147s0.255-0.049 0.353-0.146l11.147-11.107v3.753c0 0.276 0.224 0.5 0.5 0.5s0.5-0.224 0.5-0.5v-5c0-0.276-0.224-0.5-0.5-0.5z" />
        <path d="M16.5 20h-15c-0.827 0-1.5-0.673-1.5-1.5v-15c0-0.827 0.673-1.5 1.5-1.5h10c0.276 0 0.5 0.224 0.5 0.5s-0.224 0.5-0.5 0.5h-10c-0.276 0-0.5 0.224-0.5 0.5v15c0 0.276 0.224 0.5 0.5 0.5h15c0.276 0 0.5-0.224 0.5-0.5v-10c0-0.276 0.224-0.5 0.5-0.5s0.5 0.224 0.5 0.5v10c0 0.827-0.673 1.5-1.5 1.5z" />
      </g>
    </svg>
  );
}

LiniLaunch.propTypes = {
  /** The height/width in pixels */
  size: PropTypes.number,
  /** The fill color */
  color: PropTypes.string,
  /** Additional CSS class names */
  className: PropTypes.string,
};
