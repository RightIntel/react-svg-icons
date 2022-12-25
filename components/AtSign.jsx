import React from "react";
import PropTypes from "prop-types";

export default function LiniAtSign({
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
      className={`Component Lini LiniAtSign ${className}`}
      {...moreProps}
    >
      <g fill={color}>
        <path d="M17.071 2.929c-1.889-1.889-4.4-2.929-7.071-2.929s-5.182 1.040-7.071 2.929c-1.889 1.889-2.929 4.4-2.929 7.071s1.040 5.182 2.929 7.071c1.889 1.889 4.4 2.929 7.071 2.929 1.569 0 3.071-0.353 4.465-1.050 1.329-0.664 2.515-1.636 3.43-2.812 0.17-0.218 0.131-0.532-0.087-0.702s-0.532-0.131-0.702 0.087c-1.72 2.209-4.31 3.476-7.106 3.476-4.963 0-9-4.037-9-9s4.037-9 9-9 9 4.037 9 9c0 1.766-1.028 3-2.5 3-1.378 0-2.5-1.122-2.5-2.5v-4c0-0.276-0.224-0.5-0.5-0.5s-0.5 0.224-0.5 0.5v0.857c-0.734-0.832-1.806-1.357-3-1.357-2.206 0-4 1.794-4 4s1.794 4 4 4c1.43 0 2.687-0.755 3.395-1.887 0.584 1.12 1.757 1.887 3.105 1.887 0.968 0 1.853-0.393 2.494-1.107 0.658-0.734 1.006-1.734 1.006-2.893 0-2.671-1.040-5.182-2.929-7.071zM10 13c-1.654 0-3-1.346-3-3s1.346-3 3-3 3 1.346 3 3-1.346 3-3 3z" />
      </g>
    </svg>
  );
}

LiniAtSign.propTypes = {
  /** The height/width in pixels */
  size: PropTypes.number,
  /** The fill color */
  color: PropTypes.string,
  /** Additional CSS class names */
  className: PropTypes.string,
};
