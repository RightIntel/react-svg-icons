import React from "react";
import PropTypes from "prop-types";

export default function LiniCameraPlay({
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
      className={`Component Lini LiniCameraPlay ${className}`}
      {...moreProps}
    >
      <g fill={color}>
        <path d="M19.131 17.053c-0 0-0 0-0 0-0.242-0-0.485-0.097-0.724-0.288l-3.438-2.751c-0.552-0.442-0.969-1.308-0.969-2.015v-3c0-0.707 0.416-1.573 0.969-2.015l3.438-2.751c0.239-0.191 0.482-0.288 0.724-0.288 0.433 0 0.869 0.326 0.869 1.053v11c0 0.278-0.064 0.512-0.19 0.694-0.157 0.228-0.405 0.359-0.679 0.359zM19 5.040l-3.407 2.725c-0.311 0.248-0.593 0.837-0.593 1.234v3c0 0.398 0.283 0.986 0.593 1.234l3.407 2.725v-10.919z" />
        <path d="M11.5 17h-10c-0.827 0-1.5-0.673-1.5-1.5v-10c0-0.827 0.673-1.5 1.5-1.5h10c0.827 0 1.5 0.673 1.5 1.5v10c0 0.827-0.673 1.5-1.5 1.5zM1.5 5c-0.276 0-0.5 0.224-0.5 0.5v10c0 0.276 0.224 0.5 0.5 0.5h10c0.276 0 0.5-0.224 0.5-0.5v-10c0-0.276-0.224-0.5-0.5-0.5h-10z" />
        <path d="M4.5 14c-0.085 0-0.17-0.022-0.246-0.065-0.157-0.089-0.254-0.255-0.254-0.435v-6c0-0.18 0.097-0.346 0.254-0.435s0.349-0.086 0.504 0.006l5 3c0.151 0.090 0.243 0.253 0.243 0.429s-0.092 0.338-0.243 0.429l-5 3c-0.079 0.047-0.168 0.071-0.257 0.071zM5 8.383v4.234l3.528-2.117-3.528-2.117z" />
      </g>
    </svg>
  );
}

LiniCameraPlay.propTypes = {
  /** The height/width in pixels */
  size: PropTypes.number,
  /** The fill color */
  color: PropTypes.string,
  /** Additional CSS class names */
  className: PropTypes.string,
};
