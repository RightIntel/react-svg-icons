import React from "react";
import PropTypes from "prop-types";

export default function LiniUnlink2({
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
      className={`Component Lini LiniUnlink2 ${className}`}
      {...moreProps}
    >
      <g fill={color}>
        <path d="M13.5 11.5c-0.128 0-0.256-0.049-0.354-0.146-0.195-0.195-0.195-0.512 0-0.707l3.068-3.068c0.507-0.507 0.786-1.18 0.786-1.896s-0.279-1.39-0.786-1.896c-1.046-1.046-2.747-1.046-3.793 0l-3.068 3.068c-0.195 0.195-0.512 0.195-0.707 0s-0.195-0.512 0-0.707l3.068-3.068c1.436-1.436 3.772-1.436 5.207 0 0.695 0.695 1.078 1.62 1.078 2.604s-0.383 1.908-1.078 2.604l-3.068 3.068c-0.098 0.098-0.226 0.147-0.354 0.147z" />
        <path d="M4.682 19c-0.983 0-1.908-0.383-2.604-1.078-1.436-1.436-1.436-3.772 0-5.207l3.068-3.068c0.195-0.195 0.512-0.195 0.707 0s0.195 0.512 0 0.707l-3.068 3.068c-1.046 1.046-1.046 2.747 0 3.793 0.507 0.507 1.18 0.786 1.896 0.786s1.39-0.279 1.896-0.786l3.068-3.068c0.195-0.195 0.512-0.195 0.707 0s0.195 0.512 0 0.707l-3.068 3.068c-0.695 0.695-1.62 1.078-2.604 1.078z" />
        <path d="M5.5 7c-0.128 0-0.256-0.049-0.354-0.146l-2-2c-0.195-0.195-0.195-0.512 0-0.707s0.512-0.195 0.707 0l2 2c0.195 0.195 0.195 0.512 0 0.707-0.098 0.098-0.226 0.146-0.354 0.146z" />
        <path d="M7.5 6c-0.276 0-0.5-0.224-0.5-0.5v-3c0-0.276 0.224-0.5 0.5-0.5s0.5 0.224 0.5 0.5v3c0 0.276-0.224 0.5-0.5 0.5z" />
        <path d="M4.5 9h-3c-0.276 0-0.5-0.224-0.5-0.5s0.224-0.5 0.5-0.5h3c0.276 0 0.5 0.224 0.5 0.5s-0.224 0.5-0.5 0.5z" />
        <path d="M15.5 17c-0.128 0-0.256-0.049-0.354-0.146l-2-2c-0.195-0.195-0.195-0.512 0-0.707s0.512-0.195 0.707 0l2 2c0.195 0.195 0.195 0.512 0 0.707-0.098 0.098-0.226 0.146-0.354 0.146z" />
        <path d="M17.5 13h-3c-0.276 0-0.5-0.224-0.5-0.5s0.224-0.5 0.5-0.5h3c0.276 0 0.5 0.224 0.5 0.5s-0.224 0.5-0.5 0.5z" />
        <path d="M11.5 19c-0.276 0-0.5-0.224-0.5-0.5v-3c0-0.276 0.224-0.5 0.5-0.5s0.5 0.224 0.5 0.5v3c0 0.276-0.224 0.5-0.5 0.5z" />
      </g>
    </svg>
  );
}

LiniUnlink2.propTypes = {
  /** The height/width in pixels */
  size: PropTypes.number,
  /** The fill color */
  color: PropTypes.string,
  /** Additional CSS class names */
  className: PropTypes.string,
};
