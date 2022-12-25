import React from "react";
import PropTypes from "prop-types";

export default function LiniExclude({
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
      className={`Component Lini LiniExclude ${className}`}
      {...moreProps}
    >
      <g fill={color}>
        <path d="M10 7h1v1h-1v-1z" />
        <path d="M11.016 8.016h-1.031v-1.031h1.031v1.031zM10.016 7.984h0.969v-0.969h-0.969v0.969z" />
        <path d="M8 7h1v1h-1v-1z" />
        <path d="M9.016 8.016h-1.031v-1.031h1.031v1.031zM8.016 7.984h0.969v-0.969h-0.969v0.969z" />
        <path d="M6 7h1v1h-1v-1z" />
        <path d="M7.016 8.016h-1.031v-1.031h1.031v1.031zM6.016 7.984h0.969v-0.969h-0.969v0.969z" />
        <path d="M6 9h1v1h-1v-1z" />
        <path d="M7.016 10.016h-1.031v-1.031h1.031v1.031zM6.016 9.984h0.969v-0.969h-0.969v0.969z" />
        <path d="M6 11h1v1h-1v-1z" />
        <path d="M7.016 12.016h-1.031v-1.031h1.031v1.031zM6.016 11.984h0.969v-0.969h-0.969v0.969z" />
        <path d="M8 13h1v1h-1v-1z" />
        <path d="M9.016 14.016h-1.031v-1.031h1.031v1.031zM8.016 13.984h0.969v-0.969h-0.969v0.969z" />
        <path d="M10 13h1v1h-1v-1z" />
        <path d="M11.016 14.016h-1.031v-1.031h1.031v1.031zM10.016 13.984h0.969v-0.969h-0.969v0.969z" />
        <path d="M12 13h1v1h-1v-1z" />
        <path d="M13.016 14.016h-1.031v-1.031h1.031v1.031zM12.016 13.984h0.969v-0.969h-0.969v0.969z" />
        <path d="M12 11h1v1h-1v-1z" />
        <path d="M13.016 12.016h-1.031v-1.031h1.031v1.031zM12.016 11.984h0.969v-0.969h-0.969v0.969z" />
        <path d="M12 9h1v1h-1v-1z" />
        <path d="M13.016 10.016h-1.031v-1.031h1.031v1.031zM12.016 9.984h0.969v-0.969h-0.969v0.969z" />
        <path d="M12 7h1v1h-1v-1z" />
        <path d="M1.5 13c-0.276 0-0.5-0.224-0.5-0.5v-10c0-0.276 0.224-0.5 0.5-0.5h10c0.276 0 0.5 0.224 0.5 0.5v3.5h1v-3.5c0-0.827-0.673-1.5-1.5-1.5h-10c-0.827 0-1.5 0.673-1.5 1.5v10c0 0.827 0.673 1.5 1.5 1.5h3.5v-1h-3.5z" />
        <path d="M6 13h1v1h-1v-1z" />
        <path d="M17.5 7h-3.5v1h3.5c0.276 0 0.5 0.224 0.5 0.5v10c0 0.276-0.224 0.5-0.5 0.5h-10c-0.276 0-0.5-0.224-0.5-0.5v-3.5h-1v3.5c0 0.827 0.673 1.5 1.5 1.5h10c0.827 0 1.5-0.673 1.5-1.5v-10c0-0.827-0.673-1.5-1.5-1.5z" />
      </g>
    </svg>
  );
}

LiniExclude.propTypes = {
  /** The height/width in pixels */
  size: PropTypes.number,
  /** The fill color */
  color: PropTypes.string,
  /** Additional CSS class names */
  className: PropTypes.string,
};
