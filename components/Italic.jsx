import React from "react";
import PropTypes from "prop-types";

export default function LiniItalic({
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
      className={`Component Lini LiniItalic ${className}`}
      {...moreProps}
    >
      <g fill={color}>
        <path d="M15.5 2h-4.001c-0.001 0-0.003 0-0.004 0h-3.995c-0.276 0-0.5 0.224-0.5 0.5s0.224 0.5 0.5 0.5h3.39l-2.8 14h-3.59c-0.276 0-0.5 0.224-0.5 0.5s0.224 0.5 0.5 0.5h3.999c0.001 0 0.001 0 0.002 0s0.001-0 0.002-0h3.997c0.276 0 0.5-0.224 0.5-0.5s-0.224-0.5-0.5-0.5h-3.39l2.8-14h3.59c0.276 0 0.5-0.224 0.5-0.5s-0.224-0.5-0.5-0.5z" />
      </g>
    </svg>
  );
}

LiniItalic.propTypes = {
  /** The height/width in pixels */
  size: PropTypes.number,
  /** The fill color */
  color: PropTypes.string,
  /** Additional CSS class names */
  className: PropTypes.string,
};
