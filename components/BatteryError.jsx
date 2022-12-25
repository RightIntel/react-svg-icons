import React from "react";
import PropTypes from "prop-types";

export default function LiniBatteryError({
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
      className={`Component Lini LiniBatteryError ${className}`}
      {...moreProps}
    >
      <g fill={color}>
        <path d="M17.5 8h-0.5v-1.5c0-0.827-0.673-1.5-1.5-1.5h-14c-0.827 0-1.5 0.673-1.5 1.5v8c0 0.827 0.673 1.5 1.5 1.5h14c0.827 0 1.5-0.673 1.5-1.5v-1.5h0.5c0.827 0 1.5-0.673 1.5-1.5v-2c0-0.827-0.673-1.5-1.5-1.5zM16 14.5c0 0.276-0.224 0.5-0.5 0.5h-14c-0.276 0-0.5-0.224-0.5-0.5v-8c0-0.276 0.224-0.5 0.5-0.5h14c0.276 0 0.5 0.224 0.5 0.5v8zM18 11.5c0 0.276-0.224 0.5-0.5 0.5h-0.5v-3h0.5c0.276 0 0.5 0.224 0.5 0.5v2z" />
        <path d="M11.777 12.084l-2.376-1.584 2.376-1.584c0.23-0.153 0.292-0.464 0.139-0.693s-0.464-0.292-0.693-0.139l-2.723 1.815-2.723-1.815c-0.23-0.153-0.54-0.091-0.693 0.139s-0.091 0.54 0.139 0.693l2.376 1.584-2.376 1.584c-0.23 0.153-0.292 0.464-0.139 0.693 0.096 0.145 0.255 0.223 0.417 0.223 0.095 0 0.192-0.027 0.277-0.084l2.723-1.815 2.723 1.815c0.085 0.057 0.182 0.084 0.277 0.084 0.162 0 0.32-0.078 0.416-0.223 0.153-0.23 0.091-0.54-0.139-0.693z" />
      </g>
    </svg>
  );
}

LiniBatteryError.propTypes = {
  /** The height/width in pixels */
  size: PropTypes.number,
  /** The fill color */
  color: PropTypes.string,
  /** Additional CSS class names */
  className: PropTypes.string,
};
