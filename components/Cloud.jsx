import React from "react";
import PropTypes from "prop-types";

export default function LiniCloud({
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
      className={`Component Lini LiniCloud ${className}`}
      {...moreProps}
    >
      <g fill={color}>
        <path d="M16.006 16h-10.006c-3.308 0-6-2.692-6-6s2.692-6 6-6c1.602 0 3.137 0.643 4.26 1.775 0.088-0.194 0.196-0.38 0.325-0.555 0.564-0.764 1.467-1.22 2.415-1.22 1.654 0 3 1.346 3 3 0 0.351-0.061 0.694-0.178 1.017 0.061-0.003 0.122-0.004 0.184-0.004 2.202 0 3.994 1.792 3.994 3.994s-1.792 3.994-3.994 3.994zM6 5c-2.757 0-5 2.243-5 5s2.243 5 5 5h10.006c1.651 0 2.994-1.343 2.994-2.994s-1.343-2.994-2.994-2.994c-0.354 0-0.699 0.061-1.026 0.18-0.218 0.080-0.462-0.001-0.59-0.195s-0.104-0.45 0.056-0.619c0.357-0.376 0.554-0.865 0.554-1.379 0-1.103-0.897-2-2-2-0.642 0-1.229 0.297-1.61 0.814-0.23 0.312-0.365 0.678-0.388 1.057-0.013 0.212-0.159 0.393-0.363 0.45s-0.423-0.020-0.545-0.193c-0.11-0.156-0.229-0.307-0.354-0.447-0.949-1.068-2.312-1.681-3.74-1.681z" />
      </g>
    </svg>
  );
}

LiniCloud.propTypes = {
  /** The height/width in pixels */
  size: PropTypes.number,
  /** The fill color */
  color: PropTypes.string,
  /** Additional CSS class names */
  className: PropTypes.string,
};
