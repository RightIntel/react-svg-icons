import React from "react";
import PropTypes from "prop-types";

export default function LiniRadar({
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
      className={`Component Lini LiniRadar ${className}`}
      {...moreProps}
    >
      <g fill={color}>
        <path d="M9.5 20c-2.538 0-4.923-0.988-6.718-2.782s-2.782-4.18-2.782-6.717c0-2.538 0.988-4.923 2.782-6.718s4.18-2.783 6.718-2.783c2.538 0 4.923 0.988 6.718 2.783s2.782 4.18 2.782 6.718-0.988 4.923-2.782 6.717c-1.794 1.794-4.18 2.782-6.718 2.782zM9.5 2c-4.687 0-8.5 3.813-8.5 8.5s3.813 8.5 8.5 8.5 8.5-3.813 8.5-8.5-3.813-8.5-8.5-8.5z" />
        <path d="M9.5 17c-1.547 0-3.045-0.553-4.22-1.556-1.161-0.992-1.939-2.363-2.191-3.862-0.046-0.272 0.138-0.53 0.41-0.576s0.53 0.138 0.576 0.41c0.446 2.655 2.727 4.583 5.424 4.583 3.033 0 5.5-2.467 5.5-5.5 0-0.276 0.224-0.5 0.5-0.5s0.5 0.224 0.5 0.5c0 3.584-2.916 6.5-6.5 6.5z" />
        <path d="M10.5 13.829c-0.206 0-0.399-0.128-0.471-0.333-0.092-0.26 0.044-0.546 0.305-0.638 0.997-0.352 1.667-1.3 1.667-2.358 0-0.276 0.224-0.5 0.5-0.5s0.5 0.224 0.5 0.5c0 1.481-0.938 2.807-2.333 3.301-0.055 0.019-0.111 0.029-0.167 0.029z" />
        <path d="M12.724 4.053c-0.247-0.123-0.547-0.023-0.671 0.224l-0.101 0.202c-0.776-0.317-1.599-0.479-2.452-0.479-1.547 0-3.045 0.553-4.22 1.556-1.161 0.992-1.939 2.363-2.191 3.862-0.046 0.272 0.138 0.53 0.41 0.576 0.028 0.005 0.056 0.007 0.083 0.007 0.24 0 0.452-0.173 0.492-0.417 0.445-2.655 2.727-4.583 5.424-4.583 0.696 0 1.367 0.126 2.003 0.376l-0.901 1.801c-0.353-0.118-0.722-0.177-1.103-0.177-1.93 0-3.5 1.57-3.5 3.5 0 1.481 0.938 2.807 2.333 3.301 0.055 0.019 0.111 0.029 0.167 0.029 0.206 0 0.399-0.128 0.471-0.333 0.092-0.26-0.044-0.546-0.305-0.638-0.997-0.352-1.667-1.3-1.667-2.358 0-1.378 1.122-2.5 2.5-2.5 0.222 0 0.439 0.028 0.649 0.085l-0.464 0.927c-0.061-0.008-0.122-0.012-0.185-0.012-0.827 0-1.5 0.673-1.5 1.5s0.673 1.5 1.5 1.5c0.827 0 1.5-0.673 1.5-1.5 0-0.404-0.161-0.77-0.421-1.040l0.709-1.419c0-0 0-0.001 0.001-0.001s0-0.001 0-0.001l1.341-2.682c0-0 0-0.001 0-0.001s0-0.001 0-0.001l0.316-0.632c0.123-0.247 0.023-0.547-0.224-0.671zM9.5 11c-0.276 0-0.5-0.224-0.5-0.5s0.224-0.5 0.5-0.5 0.5 0.224 0.5 0.5-0.224 0.5-0.5 0.5z" />
      </g>
    </svg>
  );
}

LiniRadar.propTypes = {
  /** The height/width in pixels */
  size: PropTypes.number,
  /** The fill color */
  color: PropTypes.string,
  /** Additional CSS class names */
  className: PropTypes.string,
};
