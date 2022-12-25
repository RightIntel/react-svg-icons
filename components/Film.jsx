import React from "react";
import PropTypes from "prop-types";

export default function LiniFilm({
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
      className={`Component Lini LiniFilm ${className}`}
      {...moreProps}
    >
      <g fill={color}>
        <path d="M18.5 1h-17c-0.276 0-0.5 0.224-0.5 0.5v18c0 0.276 0.224 0.5 0.5 0.5h17c0.276 0 0.5-0.224 0.5-0.5v-18c0-0.276-0.224-0.5-0.5-0.5zM4 7h-2v-2h2v2zM4 8v2h-2v-2h2zM4 11v2h-2v-2h2zM2 14h2v2h-2v-2zM5 2h10v17h-10v-17zM16 11h2v2h-2v-2zM16 10v-2h2v2h-2zM16 7v-2h2v2h-2zM16 14h2v2h-2v-2zM18 4h-2v-2h2v2zM4 2v2h-2v-2h2zM2 17h2v2h-2v-2zM16 19v-2h2v2h-2z" />
      </g>
    </svg>
  );
}

LiniFilm.propTypes = {
  /** The height/width in pixels */
  size: PropTypes.number,
  /** The fill color */
  color: PropTypes.string,
  /** Additional CSS class names */
  className: PropTypes.string,
};
