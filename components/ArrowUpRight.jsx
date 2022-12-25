import React from "react";
import PropTypes from "prop-types";

export default function LiniArrowUpRight({
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
      className={`Component Lini LiniArrowUpRight ${className}`}
      {...moreProps}
    >
      <g fill={color}>
        <path d="M17.5 2h-8c-0.276 0-0.5 0.224-0.5 0.5s0.224 0.5 0.5 0.5h6.793l-14.146 14.146c-0.195 0.195-0.195 0.512 0 0.707 0.098 0.098 0.226 0.146 0.354 0.146s0.256-0.049 0.354-0.146l14.146-14.146v6.793c0 0.276 0.224 0.5 0.5 0.5s0.5-0.224 0.5-0.5v-8c0-0.276-0.224-0.5-0.5-0.5z" />
      </g>
    </svg>
  );
}

LiniArrowUpRight.propTypes = {
  /** The height/width in pixels */
  size: PropTypes.number,
  /** The fill color */
  color: PropTypes.string,
  /** Additional CSS class names */
  className: PropTypes.string,
};
