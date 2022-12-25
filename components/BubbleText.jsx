import React from "react";
import PropTypes from "prop-types";

export default function LiniBubbleText({
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
      className={`Component Lini LiniBubbleText ${className}`}
      {...moreProps}
    >
      <g fill={color}>
        <path d="M0.5 19c-0.225 0-0.422-0.15-0.482-0.367s0.032-0.447 0.225-0.562c1.691-1.014 2.392-2.489 2.641-3.179-1.838-1.407-2.884-3.354-2.884-5.392 0-1.029 0.258-2.026 0.768-2.964 0.486-0.894 1.18-1.695 2.061-2.381 1.787-1.39 4.156-2.156 6.671-2.156s4.884 0.766 6.671 2.156c0.881 0.685 1.575 1.486 2.061 2.381 0.51 0.937 0.768 1.934 0.768 2.964s-0.258 2.026-0.768 2.964c-0.486 0.894-1.18 1.695-2.061 2.381-1.787 1.39-4.156 2.156-6.671 2.156-1.033 0-2.047-0.129-3.016-0.385-0.429 0.286-1.231 0.793-2.189 1.27-1.488 0.74-2.764 1.115-3.794 1.115zM9.5 3c-4.687 0-8.5 2.916-8.5 6.5 0 1.815 1.005 3.562 2.756 4.792 0.172 0.121 0.25 0.336 0.196 0.539-0.117 0.436-0.515 1.633-1.58 2.788 1.302-0.456 2.704-1.247 3.739-1.959 0.123-0.085 0.277-0.11 0.421-0.069 0.948 0.271 1.947 0.409 2.968 0.409 4.687 0 8.5-2.916 8.5-6.5s-3.813-6.5-8.5-6.5z" />
        <path d="M13.5 7h-8c-0.276 0-0.5-0.224-0.5-0.5s0.224-0.5 0.5-0.5h8c0.276 0 0.5 0.224 0.5 0.5s-0.224 0.5-0.5 0.5z" />
        <path d="M13.5 9h-8c-0.276 0-0.5-0.224-0.5-0.5s0.224-0.5 0.5-0.5h8c0.276 0 0.5 0.224 0.5 0.5s-0.224 0.5-0.5 0.5z" />
        <path d="M13.5 11h-8c-0.276 0-0.5-0.224-0.5-0.5s0.224-0.5 0.5-0.5h8c0.276 0 0.5 0.224 0.5 0.5s-0.224 0.5-0.5 0.5z" />
        <path d="M11.5 13h-6c-0.276 0-0.5-0.224-0.5-0.5s0.224-0.5 0.5-0.5h6c0.276 0 0.5 0.224 0.5 0.5s-0.224 0.5-0.5 0.5z" />
      </g>
    </svg>
  );
}

LiniBubbleText.propTypes = {
  /** The height/width in pixels */
  size: PropTypes.number,
  /** The fill color */
  color: PropTypes.string,
  /** Additional CSS class names */
  className: PropTypes.string,
};
