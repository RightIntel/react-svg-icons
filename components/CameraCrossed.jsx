import React from "react";
import PropTypes from "prop-types";

export default function LiniCameraCrossed({
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
      className={`Component Lini LiniCameraCrossed ${className}`}
      {...moreProps}
    >
      <g fill={color}>
        <path d="M19.131 17.053c-0 0-0 0-0 0-0.242-0-0.485-0.097-0.724-0.288l-3.438-2.751c-0.552-0.442-0.969-1.308-0.969-2.015v-3c0-0.707 0.416-1.573 0.969-2.015l3.438-2.751c0.239-0.191 0.482-0.288 0.724-0.288 0.433-0 0.869 0.326 0.869 1.053v11c0 0.278-0.064 0.512-0.19 0.694-0.157 0.228-0.405 0.359-0.679 0.359zM19 5.040l-3.407 2.725c-0.31 0.248-0.593 0.837-0.593 1.234v3c0 0.398 0.283 0.986 0.593 1.234l3.407 2.725v-10.919z" />
        <path d="M14.788 2.092c-0.226-0.159-0.538-0.105-0.697 0.12l-1.556 2.205c-0.269-0.257-0.634-0.416-1.035-0.416h-10c-0.827 0-1.5 0.673-1.5 1.5v10c0 0.827 0.673 1.5 1.5 1.5h2.153l-1.561 2.212c-0.159 0.226-0.105 0.538 0.12 0.697 0.088 0.062 0.188 0.092 0.288 0.092 0.157 0 0.312-0.074 0.409-0.212l1.968-2.788h6.623c0.827 0 1.5-0.673 1.5-1.5v-10c0-0.003-0-0.005-0-0.008l1.909-2.704c0.159-0.226 0.105-0.538-0.12-0.697zM1.5 16c-0.276 0-0.5-0.224-0.5-0.5v-10c0-0.276 0.224-0.5 0.5-0.5h10c0.189 0 0.354 0.106 0.439 0.261l-7.58 10.739h-2.859zM12 15.5c0 0.276-0.224 0.5-0.5 0.5h-5.917l6.417-9.091v8.591z" />
      </g>
    </svg>
  );
}

LiniCameraCrossed.propTypes = {
  /** The height/width in pixels */
  size: PropTypes.number,
  /** The fill color */
  color: PropTypes.string,
  /** Additional CSS class names */
  className: PropTypes.string,
};
