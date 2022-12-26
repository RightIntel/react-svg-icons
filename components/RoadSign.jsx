import React from "react";
import PropTypes from "prop-types";

export default function LiniRoadSign({
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
      className={`Component Lini LiniRoadSign ${className}`}
      {...moreProps}
    >
      <g fill={color}>
        <path d="M18.777 5.084l-3-2c-0.082-0.055-0.179-0.084-0.277-0.084h-4.5v-1.5c0-0.827-0.673-1.5-1.5-1.5h-2c-0.827 0-1.5 0.673-1.5 1.5v1.5h-5.5c-0.276 0-0.5 0.224-0.5 0.5v4c0 0.276 0.224 0.5 0.5 0.5h5.5v1h-1.5c-0.099 0-0.195 0.029-0.277 0.084l-3 2c-0.139 0.093-0.223 0.249-0.223 0.416s0.084 0.323 0.223 0.416l3 2c0.082 0.055 0.179 0.084 0.277 0.084h1.5v5.5c0 0.276 0.224 0.5 0.5 0.5h4c0.276 0 0.5-0.224 0.5-0.5v-5.5h3.5c0.276 0 0.5-0.224 0.5-0.5v-4c0-0.276-0.224-0.5-0.5-0.5h-3.5v-1h4.5c0.099 0 0.195-0.029 0.277-0.084l3-2c0.139-0.093 0.223-0.249 0.223-0.416s-0.084-0.323-0.223-0.416zM7 1.5c0-0.276 0.224-0.5 0.5-0.5h2c0.276 0 0.5 0.224 0.5 0.5v1.5h-3v-1.5zM10 19h-3v-5h3v5zM14 13h-9.349l-2.25-1.5 2.25-1.5h9.349v3zM10 9h-3v-1h3v1zM15.349 7h-14.349v-3h14.349l2.25 1.5-2.25 1.5z" />
      </g>
    </svg>
  );
}

LiniRoadSign.propTypes = {
  /** The height/width in pixels */
  size: PropTypes.number,
  /** The fill color */
  color: PropTypes.string,
  /** Additional CSS class names */
  className: PropTypes.string,
};
