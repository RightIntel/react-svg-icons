import React from "react";
import PropTypes from "prop-types";

export default function LiniGlassCocktail({
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
      className={`Component Lini LiniGlassCocktail ${className}`}
      {...moreProps}
    >
      <g fill={color}>
        <path d="M16.957 3.517c-0.076-0.193-0.302-0.517-0.957-0.517h-13c-0.655 0-0.881 0.324-0.957 0.517s-0.132 0.584 0.347 1.031l6.61 6.169v6.783c0 0.813-0.458 1.5-1 1.5h-1.5c-0.276 0-0.5 0.224-0.5 0.5s0.224 0.5 0.5 0.5h6c0.276 0 0.5-0.224 0.5-0.5s-0.224-0.5-0.5-0.5h-1.5c-0.542 0-1-0.687-1-1.5v-6.783l6.61-6.169c0.479-0.447 0.423-0.838 0.347-1.031zM9.5 9.816l-6.232-5.816h12.463l-6.231 5.816z" />
      </g>
    </svg>
  );
}

LiniGlassCocktail.propTypes = {
  /** The height/width in pixels */
  size: PropTypes.number,
  /** The fill color */
  color: PropTypes.string,
  /** Additional CSS class names */
  className: PropTypes.string,
};
