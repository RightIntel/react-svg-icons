import React from "react";
import PropTypes from "prop-types";

export default function LiniDna({
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
      className={`Component Lini LiniDna ${className}`}
      {...moreProps}
    >
      <g fill={color}>
        <path d="M7.065 8.372c0.697-0.567 1.682-0.998 2.635-1.414 1.014-0.444 2.062-0.902 2.865-1.554 0.965-0.784 1.435-1.734 1.435-2.904v-1c0-0.276-0.224-0.5-0.5-0.5s-0.5 0.224-0.5 0.5v1c0 0.122-0.007 0.24-0.021 0.354l-7.358-1.839c-0.039-0.010-0.079-0.015-0.121-0.015-0.276 0-0.5 0.224-0.5 0.5v1c0 1.891 1.25 2.862 2.191 3.428 0.081 0.049 0.17 0.072 0.257 0.072 0.17 0 0.335-0.086 0.429-0.242 0.142-0.237 0.066-0.544-0.171-0.686-1.196-0.72-1.706-1.489-1.706-2.572v-0.36l6.663 1.666c-0.173 0.295-0.414 0.566-0.728 0.821-0.697 0.567-1.682 0.998-2.635 1.414-1.014 0.444-2.062 0.902-2.865 1.554-0.965 0.784-1.435 1.734-1.435 2.904 0 1.891 1.25 2.862 2.191 3.428 0.081 0.049 0.17 0.072 0.257 0.072 0.17 0 0.335-0.086 0.429-0.242 0.142-0.237 0.066-0.544-0.171-0.686-1.196-0.72-1.706-1.489-1.706-2.572 0-0.122 0.007-0.24 0.021-0.354l6.642 1.661c-0.173 0.295-0.414 0.566-0.728 0.821-0.697 0.567-1.682 0.998-2.635 1.414-1.014 0.444-2.062 0.902-2.865 1.554-0.965 0.784-1.435 1.734-1.435 2.904v1c0 0.276 0.224 0.5 0.5 0.5s0.5-0.224 0.5-0.5v-1c0-0.122 0.007-0.24 0.021-0.354l7.358 1.839c0.039 0.010 0.079 0.015 0.121 0.015 0.276 0 0.5-0.224 0.5-0.5v-1c0-1.891-1.25-2.862-2.191-3.428-0.237-0.142-0.544-0.066-0.686 0.171s-0.066 0.544 0.171 0.686c1.196 0.72 1.706 1.489 1.706 2.572v0.36l-6.663-1.666c0.173-0.295 0.414-0.566 0.728-0.821 0.697-0.567 1.682-0.998 2.635-1.414 1.014-0.444 2.062-0.902 2.865-1.554 0.965-0.784 1.435-1.734 1.435-2.904 0-1.891-1.25-2.862-2.191-3.428-0.237-0.142-0.544-0.066-0.686 0.171s-0.066 0.544 0.171 0.686c1.196 0.72 1.706 1.489 1.706 2.572 0 0.122-0.007 0.24-0.021 0.354l-6.643-1.661c0.173-0.295 0.414-0.566 0.729-0.822z" />
      </g>
    </svg>
  );
}

LiniDna.propTypes = {
  /** The height/width in pixels */
  size: PropTypes.number,
  /** The fill color */
  color: PropTypes.string,
  /** Additional CSS class names */
  className: PropTypes.string,
};
