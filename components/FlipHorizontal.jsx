import React from "react";
import PropTypes from "prop-types";

export default function LiniFlipHorizontal({
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
      className={`Component Lini LiniFlipHorizontal ${className}`}
      {...moreProps}
    >
      <g fill={color}>
        <path d="M8.5 20h-8c-0.167 0-0.324-0.084-0.417-0.223s-0.109-0.316-0.044-0.471l8-19c0.092-0.219 0.326-0.343 0.56-0.296s0.401 0.252 0.401 0.49v19c0 0.276-0.224 0.5-0.5 0.5zM1.253 19h6.747v-16.024l-6.747 16.024z" />
        <path d="M19.5 20h-8c-0.276 0-0.5-0.224-0.5-0.5v-19c0-0.238 0.168-0.443 0.401-0.49s0.467 0.077 0.56 0.296l8 19c0.065 0.154 0.048 0.331-0.044 0.471s-0.249 0.223-0.417 0.223zM12 19h6.747l-6.747-16.024v16.024z" />
      </g>
    </svg>
  );
}

LiniFlipHorizontal.propTypes = {
  /** The height/width in pixels */
  size: PropTypes.number,
  /** The fill color */
  color: PropTypes.string,
  /** Additional CSS class names */
  className: PropTypes.string,
};
