import React from "react";
import PropTypes from "prop-types";

export default function LiniRank2({
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
      className={`Component Lini LiniRank2 ${className}`}
      {...moreProps}
    >
      <g fill={color}>
        <path d="M18.5 16c-0.082 0-0.165-0.020-0.242-0.063l-8.757-4.865-8.757 4.865c-0.241 0.134-0.546 0.047-0.68-0.194s-0.047-0.546 0.194-0.68l9-5c0.151-0.084 0.335-0.084 0.486 0l9 5c0.241 0.134 0.328 0.438 0.194 0.68-0.091 0.164-0.262 0.257-0.438 0.257z" />
        <path d="M18.5 13c-0.082 0-0.165-0.020-0.242-0.063l-8.757-4.865-8.757 4.865c-0.241 0.134-0.546 0.047-0.68-0.194s-0.047-0.546 0.194-0.68l9-5c0.151-0.084 0.335-0.084 0.486 0l9 5c0.241 0.134 0.328 0.438 0.194 0.68-0.091 0.164-0.262 0.257-0.438 0.257z" />
      </g>
    </svg>
  );
}

LiniRank2.propTypes = {
  /** The height/width in pixels */
  size: PropTypes.number,
  /** The fill color */
  color: PropTypes.string,
  /** Additional CSS class names */
  className: PropTypes.string,
};
