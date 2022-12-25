import React from "react";
import PropTypes from "prop-types";

export default function LiniBorderAll({
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
      className={`Component Lini LiniBorderAll ${className}`}
      {...moreProps}
    >
      <g fill={color}>
        <path d="M16.5 2h-14c-0.827 0-1.5 0.673-1.5 1.5v14c0 0.827 0.673 1.5 1.5 1.5h14c0.827 0 1.5-0.673 1.5-1.5v-14c0-0.827-0.673-1.5-1.5-1.5zM16.5 3c0.276 0 0.5 0.224 0.5 0.5v6.5h-7v-7h6.5zM2 3.5c0-0.276 0.224-0.5 0.5-0.5h6.5v7h-7v-6.5zM2.5 18c-0.276 0-0.5-0.224-0.5-0.5v-6.5h7v7h-6.5zM17 17.5c0 0.276-0.224 0.5-0.5 0.5h-6.5v-7h7v6.5z" />
      </g>
    </svg>
  );
}

LiniBorderAll.propTypes = {
  /** The height/width in pixels */
  size: PropTypes.number,
  /** The fill color */
  color: PropTypes.string,
  /** Additional CSS class names */
  className: PropTypes.string,
};
