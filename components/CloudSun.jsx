import React from "react";
import PropTypes from "prop-types";

export default function LiniCloudSun({
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
      className={`Component Lini LiniCloudSun ${className}`}
      {...moreProps}
    >
      <g fill={color}>
        <path d="M16 12c-0.058 0-0.115 0.001-0.172 0.004 0.113-0.319 0.172-0.658 0.172-1.004 0-1.308-0.842-2.423-2.012-2.833-0.171-2.327-2.118-4.167-4.488-4.167-2.34 0-4.268 1.795-4.48 4.081-2.844 0.469-5.020 2.945-5.020 5.919 0 3.308 2.692 6 6 6h10c2.206 0 4-1.794 4-4s-1.794-4-4-4zM9.5 5c1.76 0 3.221 1.306 3.464 3.001-1.198 0.014-2.238 0.736-2.704 1.775-1.109-1.118-2.627-1.766-4.225-1.776 0.243-1.694 1.704-3 3.464-3zM16 19h-10c-2.757 0-5-2.243-5-5s2.243-5 5-5c1.628 0 3.159 0.797 4.096 2.131 0.122 0.174 0.341 0.252 0.545 0.194s0.35-0.238 0.363-0.45c0.065-1.051 0.941-1.875 1.996-1.875 1.103 0 2 0.897 2 2 0 0.506-0.189 0.988-0.533 1.359-0.156 0.169-0.177 0.422-0.051 0.615s0.368 0.273 0.584 0.197c0.32-0.113 0.656-0.17 1-0.17 1.654 0 3 1.346 3 3s-1.346 3-3 3z" />
        <path d="M9.5 3c-0.276 0-0.5-0.224-0.5-0.5v-1c0-0.276 0.224-0.5 0.5-0.5s0.5 0.224 0.5 0.5v1c0 0.276-0.224 0.5-0.5 0.5z" />
        <path d="M13.5 4c-0.128 0-0.256-0.049-0.354-0.146-0.195-0.195-0.195-0.512 0-0.707l1-1c0.195-0.195 0.512-0.195 0.707 0s0.195 0.512 0 0.707l-1 1c-0.098 0.098-0.226 0.146-0.354 0.146z" />
        <path d="M16.5 7h-1c-0.276 0-0.5-0.224-0.5-0.5s0.224-0.5 0.5-0.5h1c0.276 0 0.5 0.224 0.5 0.5s-0.224 0.5-0.5 0.5z" />
        <path d="M3.5 7h-1c-0.276 0-0.5-0.224-0.5-0.5s0.224-0.5 0.5-0.5h1c0.276 0 0.5 0.224 0.5 0.5s-0.224 0.5-0.5 0.5z" />
        <path d="M5.5 4c-0.128 0-0.256-0.049-0.354-0.146l-1-1c-0.195-0.195-0.195-0.512 0-0.707s0.512-0.195 0.707 0l1 1c0.195 0.195 0.195 0.512 0 0.707-0.098 0.098-0.226 0.146-0.354 0.146z" />
      </g>
    </svg>
  );
}

LiniCloudSun.propTypes = {
  /** The height/width in pixels */
  size: PropTypes.number,
  /** The fill color */
  color: PropTypes.string,
  /** Additional CSS class names */
  className: PropTypes.string,
};
