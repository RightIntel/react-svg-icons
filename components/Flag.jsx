import React from "react";
import PropTypes from "prop-types";

export default function LiniFlag({
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
      className={`Component Lini LiniFlag ${className}`}
      {...moreProps}
    >
      <g fill={color}>
        <path d="M1.5 20c-0.276 0-0.5-0.224-0.5-0.5v-17c0-0.276 0.224-0.5 0.5-0.5s0.5 0.224 0.5 0.5v17c0 0.276-0.224 0.5-0.5 0.5z" />
        <path d="M15.5 12c-2.207 0-3.347-1.14-4.354-2.146-0.995-0.995-1.854-1.854-3.646-1.854s-2.652 0.859-3.646 1.854c-0.195 0.195-0.512 0.195-0.707 0s-0.195-0.512 0-0.707c1.006-1.006 2.146-2.146 4.354-2.146s3.347 1.14 4.354 2.146c0.995 0.995 1.854 1.854 3.646 1.854 1.704 0 2.565-0.776 3.5-1.707v-5.628c-0.839 0.723-1.883 1.335-3.5 1.335-2.207 0-3.347-1.14-4.354-2.146-0.995-0.995-1.854-1.854-3.646-1.854s-2.652 0.859-3.646 1.854c-0.195 0.195-0.512 0.195-0.707 0s-0.195-0.512 0-0.707c1.006-1.006 2.146-2.146 4.354-2.146s3.347 1.14 4.354 2.146c0.995 0.995 1.854 1.854 3.646 1.854s2.652-0.859 3.646-1.854c0.143-0.143 0.358-0.186 0.545-0.108s0.309 0.26 0.309 0.462v7c0 0.133-0.053 0.26-0.146 0.354-1.006 1.006-2.146 2.146-4.354 2.146z" />
      </g>
    </svg>
  );
}

LiniFlag.propTypes = {
  /** The height/width in pixels */
  size: PropTypes.number,
  /** The fill color */
  color: PropTypes.string,
  /** Additional CSS class names */
  className: PropTypes.string,
};
