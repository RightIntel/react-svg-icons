import React from "react";
import PropTypes from "prop-types";

export default function LiniBubbles({
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
      className={`Component Lini LiniBubbles ${className}`}
      {...moreProps}
    >
      <g fill={color}>
        <path d="M19.501 18c-0-0-0-0-0.001 0-1.341 0-2.734-0.856-3.247-1.206-0.563 0.136-1.151 0.206-1.753 0.206-1.437 0-2.795-0.396-3.822-1.116-1.082-0.757-1.678-1.782-1.678-2.884s0.596-2.127 1.678-2.884c1.028-0.719 2.385-1.116 3.822-1.116s2.795 0.396 3.822 1.116c1.082 0.757 1.678 1.782 1.678 2.884 0 0.964-0.461 1.877-1.306 2.597 0.082 0.231 0.339 0.727 1.145 1.535 0.099 0.091 0.161 0.222 0.161 0.368 0 0.276-0.224 0.5-0.5 0.5zM16.353 15.752c0.108 0 0.214 0.035 0.302 0.101 0.010 0.007 0.675 0.504 1.503 0.842-0.544-0.795-0.53-1.248-0.481-1.438 0.029-0.109 0.093-0.205 0.183-0.273 0.735-0.552 1.139-1.256 1.139-1.984 0-0.767-0.444-1.5-1.251-2.065-0.861-0.603-2.015-0.935-3.249-0.935s-2.388 0.332-3.249 0.935c-0.807 0.565-1.251 1.298-1.251 2.065s0.444 1.5 1.251 2.065c0.861 0.603 2.015 0.935 3.249 0.935 0.595 0 1.173-0.077 1.718-0.23 0.044-0.012 0.090-0.018 0.135-0.018z" />
        <path d="M0.5 19c-0.225 0-0.422-0.15-0.482-0.367s0.032-0.447 0.225-0.562c1.691-1.014 2.392-2.489 2.641-3.179-1.838-1.407-2.884-3.354-2.884-5.392 0-1.029 0.258-2.026 0.768-2.964 0.486-0.894 1.18-1.695 2.061-2.381 1.787-1.39 4.156-2.156 6.671-2.156 2.278 0 4.481 0.644 6.202 1.814 1.735 1.179 2.871 2.811 3.199 4.595 0.050 0.272-0.13 0.532-0.401 0.582s-0.532-0.13-0.582-0.401c-0.279-1.519-1.266-2.921-2.778-3.949-1.557-1.058-3.56-1.641-5.64-1.641-4.687 0-8.5 2.916-8.5 6.5 0 1.815 1.005 3.562 2.756 4.792 0.172 0.121 0.25 0.336 0.196 0.539-0.117 0.436-0.515 1.633-1.58 2.788 1.302-0.456 2.704-1.247 3.739-1.959 0.123-0.085 0.277-0.11 0.421-0.069 0.948 0.271 1.947 0.409 2.968 0.409 0.276 0 0.5 0.224 0.5 0.5s-0.224 0.5-0.5 0.5c-1.033 0-2.047-0.129-3.016-0.385-0.429 0.286-1.231 0.793-2.189 1.27-1.488 0.74-2.764 1.115-3.794 1.115z" />
      </g>
    </svg>
  );
}

LiniBubbles.propTypes = {
  /** The height/width in pixels */
  size: PropTypes.number,
  /** The fill color */
  color: PropTypes.string,
  /** Additional CSS class names */
  className: PropTypes.string,
};
