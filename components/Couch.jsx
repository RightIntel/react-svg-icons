import React from "react";
import PropTypes from "prop-types";

export default function LiniCouch({
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
      className={`Component Lini LiniCouch ${className}`}
      {...moreProps}
    >
      <g fill={color}>
        <path d="M4.5 19h-1c-0.276 0-0.5-0.224-0.5-0.5s0.224-0.5 0.5-0.5h1c0.276 0 0.5 0.224 0.5 0.5s-0.224 0.5-0.5 0.5z" />
        <path d="M16.5 19h-1c-0.276 0-0.5-0.224-0.5-0.5s0.224-0.5 0.5-0.5h1c0.276 0 0.5 0.224 0.5 0.5s-0.224 0.5-0.5 0.5z" />
        <path d="M17.993 7.049c-0.077-2.512-0.81-4.119-2.292-5.037-1.362-0.843-3.191-1.012-5.701-1.012s-4.339 0.169-5.701 1.012c-1.482 0.917-2.215 2.524-2.292 5.037-1.143 0.23-2.007 1.241-2.007 2.451 0 1.207 0.86 2.217 2 2.45v4.55c0 0.827 0.673 1.5 1.5 1.5h13c0.827 0 1.5-0.673 1.5-1.5v-4.55c1.14-0.232 2-1.242 2-2.45 0-1.21-0.864-2.221-2.007-2.451zM4.826 2.863c1.16-0.718 2.84-0.863 5.174-0.863s4.014 0.144 5.174 0.863c1.166 0.722 1.749 2.059 1.818 4.189-1.136 0.235-1.993 1.243-1.993 2.448v1.5h-10v-1.5c0-1.205-0.857-2.213-1.993-2.448 0.070-2.13 0.653-3.467 1.818-4.189zM5 12h10v1.5c0 0.276-0.224 0.5-0.5 0.5h-9c-0.276 0-0.5-0.224-0.5-0.5v-1.5zM17.5 11c-0.276 0-0.5 0.224-0.5 0.5v5c0 0.276-0.224 0.5-0.5 0.5h-13c-0.276 0-0.5-0.224-0.5-0.5v-5c0-0.276-0.224-0.5-0.5-0.5-0.827 0-1.5-0.673-1.5-1.5s0.673-1.5 1.5-1.5 1.5 0.673 1.5 1.5v4c0 0.827 0.673 1.5 1.5 1.5h9c0.827 0 1.5-0.673 1.5-1.5v-4c0-0.827 0.673-1.5 1.5-1.5s1.5 0.673 1.5 1.5c0 0.827-0.673 1.5-1.5 1.5z" />
        <path d="M15.5 6h-0.5c-1.103 0-2-0.897-2-2v-0.5c0-0.276-0.224-0.5-0.5-0.5s-0.5 0.224-0.5 0.5v0.5c0 1.103-0.897 2-2 2s-2-0.897-2-2v-0.5c0-0.276-0.224-0.5-0.5-0.5s-0.5 0.224-0.5 0.5v0.5c0 1.103-0.897 2-2 2h-0.5c-0.276 0-0.5 0.224-0.5 0.5s0.224 0.5 0.5 0.5h0.5c1.103 0 2 0.897 2 2v0.5c0 0.276 0.224 0.5 0.5 0.5s0.5-0.224 0.5-0.5v-0.5c0-1.103 0.897-2 2-2s2 0.897 2 2v0.5c0 0.276 0.224 0.5 0.5 0.5s0.5-0.224 0.5-0.5v-0.5c0-1.103 0.897-2 2-2h0.5c0.276 0 0.5-0.224 0.5-0.5s-0.224-0.5-0.5-0.5zM7.5 7.344c-0.222-0.334-0.509-0.621-0.844-0.844 0.334-0.222 0.621-0.509 0.844-0.844 0.222 0.334 0.509 0.621 0.844 0.844-0.334 0.222-0.622 0.509-0.844 0.844zM12.5 7.344c-0.222-0.334-0.509-0.621-0.844-0.844 0.334-0.222 0.622-0.509 0.844-0.844 0.222 0.334 0.509 0.621 0.844 0.844-0.334 0.222-0.622 0.509-0.844 0.844z" />
      </g>
    </svg>
  );
}

LiniCouch.propTypes = {
  /** The height/width in pixels */
  size: PropTypes.number,
  /** The fill color */
  color: PropTypes.string,
  /** Additional CSS class names */
  className: PropTypes.string,
};
