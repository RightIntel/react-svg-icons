import React from "react";
import PropTypes from "prop-types";

export default function LiniLan2({
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
      className={`Component Lini LiniLan2 ${className}`}
      {...moreProps}
    >
      <g fill={color}>
        <path d="M19.5 10h-4.5v-5.5c0-0.827-0.673-1.5-1.5-1.5h-2.5v-2.5c0-0.276-0.224-0.5-0.5-0.5h-10c-0.276 0-0.5 0.224-0.5 0.5v7c0 0.276 0.224 0.5 0.5 0.5h3.398c-0.185 0.496-0.575 0.968-0.752 1.146-0.143 0.143-0.186 0.358-0.108 0.545s0.26 0.309 0.462 0.309h4c0.202 0 0.385-0.122 0.462-0.309s0.035-0.402-0.108-0.545c-0.166-0.166-0.563-0.645-0.751-1.146h3.397c0.276 0 0.5-0.224 0.5-0.5v-3.5h2.5c0.276 0 0.5 0.224 0.5 0.5v5.5h-4.5c-0.276 0-0.5 0.224-0.5 0.5v7c0 0.276 0.224 0.5 0.5 0.5h3.398c-0.185 0.496-0.575 0.968-0.752 1.146-0.143 0.143-0.186 0.358-0.108 0.545s0.26 0.309 0.462 0.309h4c0.202 0 0.385-0.122 0.462-0.309s0.035-0.402-0.108-0.545c-0.166-0.166-0.563-0.645-0.751-1.146h3.397c0.276 0 0.5-0.224 0.5-0.5v-7c0-0.276-0.224-0.5-0.5-0.5zM10 1v4h-9v-4h9zM6.484 9h-1.968c0.176-0.289 0.341-0.632 0.425-1h1.118c0.084 0.368 0.248 0.711 0.425 1zM1 7v-1h9v1h-9zM19 11v4h-9v-4h9zM15.484 19h-1.968c0.176-0.289 0.341-0.632 0.425-1h1.118c0.084 0.368 0.248 0.711 0.425 1zM10 17v-1h9v1h-9z" />
      </g>
    </svg>
  );
}

LiniLan2.propTypes = {
  /** The height/width in pixels */
  size: PropTypes.number,
  /** The fill color */
  color: PropTypes.string,
  /** Additional CSS class names */
  className: PropTypes.string,
};
