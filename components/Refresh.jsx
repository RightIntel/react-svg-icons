import React from "react";
import PropTypes from "prop-types";

export default function LiniRefresh({
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
      className={`Component Lini LiniRefresh ${className}`}
      {...moreProps}
    >
      <g fill={color}>
        <path d="M19.854 8.646c-0.195-0.195-0.512-0.195-0.707 0l-1.149 1.149c-0.051-2.060-0.878-3.99-2.341-5.452-1.511-1.511-3.52-2.343-5.657-2.343s-4.146 0.832-5.657 2.343-2.343 3.52-2.343 5.657 0.832 4.146 2.343 5.657 3.52 2.343 5.657 2.343c2.974 0 5.686-1.635 7.077-4.266 0.129-0.244 0.036-0.547-0.208-0.676s-0.547-0.036-0.676 0.208c-1.217 2.303-3.59 3.734-6.193 3.734-3.86 0-7-3.14-7-7s3.14-7 7-7c3.789 0 6.885 3.027 6.997 6.789l-1.143-1.143c-0.195-0.195-0.512-0.195-0.707 0s-0.195 0.512 0 0.707l2 2c0.098 0.098 0.226 0.146 0.354 0.146s0.256-0.049 0.354-0.146l2-2c0.195-0.195 0.195-0.512 0-0.707z" />
      </g>
    </svg>
  );
}

LiniRefresh.propTypes = {
  /** The height/width in pixels */
  size: PropTypes.number,
  /** The fill color */
  color: PropTypes.string,
  /** Additional CSS class names */
  className: PropTypes.string,
};
