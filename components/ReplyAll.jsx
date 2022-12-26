import React from "react";
import PropTypes from "prop-types";

export default function LiniReplyAll({
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
      className={`Component Lini LiniReplyAll ${className}`}
      {...moreProps}
    >
      <g fill={color}>
        <path d="M19.096 14.024c-0.579-1.369-1.408-2.599-2.464-3.655s-2.286-1.885-3.655-2.464c-1.418-0.6-2.924-0.904-4.476-0.904h-3.293l4.146-4.146c0.195-0.195 0.195-0.512 0-0.707s-0.512-0.195-0.707 0l-5 5c-0.195 0.195-0.195 0.512 0 0.707l5 5c0.098 0.098 0.226 0.146 0.354 0.146s0.256-0.049 0.354-0.146c0.195-0.195 0.195-0.512 0-0.707l-4.146-4.146h3.293c5.79 0 10.5 4.71 10.5 10.5 0 0.276 0.224 0.5 0.5 0.5s0.5-0.224 0.5-0.5c0-1.552-0.304-3.058-0.904-4.476z" />
        <path d="M6 13c-0.128 0-0.256-0.049-0.354-0.146l-5-5c-0.195-0.195-0.195-0.512 0-0.707l5-5c0.195-0.195 0.512-0.195 0.707 0s0.195 0.512 0 0.707l-4.646 4.646 4.646 4.646c0.195 0.195 0.195 0.512 0 0.707-0.098 0.098-0.226 0.146-0.354 0.146z" />
      </g>
    </svg>
  );
}

LiniReplyAll.propTypes = {
  /** The height/width in pixels */
  size: PropTypes.number,
  /** The fill color */
  color: PropTypes.string,
  /** Additional CSS class names */
  className: PropTypes.string,
};
