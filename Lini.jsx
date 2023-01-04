import React from "react";
import PropTypes from "prop-types";

export default function Lini({
  size = 20,
  color = "",
  className = "",
  iconName,
  children,
  ...moreProps
}) {
  return (
    <svg
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 20 20"
      width={size}
      height={size}
      className={`Component Lini Lini${iconName} ${className}`}
      {...moreProps}
    >
      <g fill={color}>{children}</g>
    </svg>
  );
}

Lini.propTypes = {
  /** The icon name */
  iconName: PropTypes.string.isRequired,
  /** The height/width in pixels */
  size: PropTypes.number,
  /** The fill color */
  color: PropTypes.string,
  /** Additional CSS class names */
  className: PropTypes.string,
  /** SVG paths to render */
  children: PropTypes.node.isRequired,
};
