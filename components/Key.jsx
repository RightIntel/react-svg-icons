import React from "react";
import PropTypes from "prop-types";

export default function LiniKey({
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
      className={`Component Lini LiniKey ${className}`}
      {...moreProps}
    >
      <g fill={color}>
        <path d="M15 0c-2.761 0-5 2.239-5 5 0 1.072 0.338 2.066 0.913 2.88l-10.766 10.766c-0.195 0.195-0.195 0.512 0 0.707 0.098 0.098 0.226 0.146 0.354 0.146s0.256-0.049 0.354-0.146l1.146-1.146 1.646 1.646c0.098 0.098 0.226 0.146 0.354 0.146s0.256-0.049 0.354-0.146c0.195-0.195 0.195-0.512 0-0.707l-1.646-1.646 0.793-0.793 1.646 1.646c0.098 0.098 0.226 0.146 0.354 0.146s0.256-0.049 0.354-0.146c0.195-0.195 0.195-0.512 0-0.707l-1.646-1.646 7.363-7.363c0.895 0.845 2.102 1.363 3.43 1.363 2.761 0 5-2.239 5-5s-2.239-5-5-5zM17.828 7.828c-0.756 0.756-1.76 1.172-2.828 1.172s-2.073-0.416-2.828-1.172c-0.756-0.756-1.172-1.76-1.172-2.828s0.416-2.073 1.172-2.828c0.756-0.756 1.76-1.172 2.828-1.172s2.073 0.416 2.828 1.172c0.756 0.756 1.172 1.76 1.172 2.828s-0.416 2.073-1.172 2.828z" />
      </g>
    </svg>
  );
}

LiniKey.propTypes = {
  /** The height/width in pixels */
  size: PropTypes.number,
  /** The fill color */
  color: PropTypes.string,
  /** Additional CSS class names */
  className: PropTypes.string,
};
