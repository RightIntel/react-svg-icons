import React from "react";
import PropTypes from "prop-types";

export default function LiniContract2({
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
      className={`Component Lini LiniContract2 ${className}`}
      {...moreProps}
    >
      <g fill={color}>
        <path d="M19.853 0.146c-0.195-0.195-0.512-0.195-0.707 0l-6.146 6.146v-2.793c0-0.276-0.224-0.5-0.5-0.5s-0.5 0.224-0.5 0.5v4c0 0.276 0.224 0.5 0.5 0.5h4c0.276 0 0.5-0.224 0.5-0.5s-0.224-0.5-0.5-0.5h-2.793l6.146-6.146c0.195-0.195 0.195-0.512 0-0.707z" />
        <path d="M7.5 12h-4c-0.276 0-0.5 0.224-0.5 0.5s0.224 0.5 0.5 0.5h2.793l-6.146 6.147c-0.195 0.195-0.195 0.512 0 0.707 0.098 0.098 0.226 0.146 0.354 0.146s0.256-0.049 0.354-0.147l6.146-6.146v2.793c0 0.276 0.224 0.5 0.5 0.5s0.5-0.224 0.5-0.5v-4c0-0.276-0.224-0.5-0.5-0.5z" />
      </g>
    </svg>
  );
}

LiniContract2.propTypes = {
  /** The height/width in pixels */
  size: PropTypes.number,
  /** The fill color */
  color: PropTypes.string,
  /** Additional CSS class names */
  className: PropTypes.string,
};
