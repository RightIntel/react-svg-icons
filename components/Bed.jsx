import React from "react";
import PropTypes from "prop-types";

export default function LiniBed({
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
      className={`Component Lini LiniBed ${className}`}
      {...moreProps}
    >
      <g fill={color}>
        <path d="M17.5 18h-1c-0.276 0-0.5-0.224-0.5-0.5s0.224-0.5 0.5-0.5h1c0.276 0 0.5 0.224 0.5 0.5s-0.224 0.5-0.5 0.5z" />
        <path d="M2.5 18h-1c-0.276 0-0.5-0.224-0.5-0.5s0.224-0.5 0.5-0.5h1c0.276 0 0.5 0.224 0.5 0.5s-0.224 0.5-0.5 0.5z" />
        <path d="M18.658 11.393l-2.368-7.103c-0.199-0.596-0.768-1.086-1.388-1.24-0.022-0.095-0.046-0.186-0.074-0.27-0.227-0.68-0.616-0.781-0.828-0.781h-4c-0.127 0-0.318 0.037-0.5 0.213-0.182-0.176-0.373-0.213-0.5-0.213h-4c-0.212 0-0.601 0.102-0.828 0.781-0.028 0.084-0.053 0.174-0.074 0.27-0.621 0.154-1.19 0.643-1.388 1.24l-2.368 7.103c-0.192 0.575-0.342 1.501-0.342 2.107v2c0 0.827 0.673 1.5 1.5 1.5h16c0.827 0 1.5-0.673 1.5-1.5v-2c0-0.606-0.15-1.532-0.342-2.107zM10.157 3h3.686c0.070 0.157 0.157 0.514 0.157 1s-0.087 0.843-0.157 1h-3.686c-0.070-0.157-0.157-0.514-0.157-1s0.087-0.843 0.157-1zM5.157 3h3.686c0.070 0.157 0.157 0.514 0.157 1s-0.087 0.843-0.157 1h-3.686c-0.070-0.157-0.157-0.514-0.157-1s0.087-0.843 0.157-1zM3.658 4.607c0.054-0.162 0.185-0.317 0.345-0.429 0.014 0.388 0.072 0.752 0.169 1.041 0.227 0.68 0.616 0.781 0.828 0.781h4c0.127 0 0.318-0.037 0.5-0.213 0.182 0.176 0.373 0.213 0.5 0.213h4c0.212 0 0.601-0.102 0.828-0.781 0.096-0.289 0.155-0.654 0.169-1.041 0.16 0.113 0.291 0.267 0.345 0.429l0.798 2.393h-13.279l0.798-2.393zM2.527 8h13.946l1.236 3.709c0.032 0.095 0.062 0.204 0.091 0.321-0.097-0.020-0.197-0.030-0.3-0.030h-16c-0.103 0-0.203 0.010-0.3 0.030 0.029-0.117 0.059-0.226 0.091-0.321l1.237-3.709zM18 15.5c0 0.276-0.224 0.5-0.5 0.5h-16c-0.276 0-0.5-0.224-0.5-0.5v-2c0-0.276 0.224-0.5 0.5-0.5h16c0.276 0 0.5 0.224 0.5 0.5v2z" />
      </g>
    </svg>
  );
}

LiniBed.propTypes = {
  /** The height/width in pixels */
  size: PropTypes.number,
  /** The fill color */
  color: PropTypes.string,
  /** Additional CSS class names */
  className: PropTypes.string,
};
