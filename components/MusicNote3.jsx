import React from "react";
import PropTypes from "prop-types";

export default function LiniMusicNote3({
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
      className={`Component Lini LiniMusicNote3 ${className}`}
      {...moreProps}
    >
      <g fill={color}>
        <path d="M19.82 1.116c-0.114-0.095-0.264-0.135-0.41-0.108l-11 2c-0.238 0.043-0.411 0.25-0.411 0.492v11.399c-0.136-0.092-0.286-0.179-0.448-0.26-0.824-0.412-1.907-0.639-3.052-0.639s-2.228 0.227-3.052 0.639c-0.934 0.467-1.448 1.128-1.448 1.861s0.514 1.395 1.448 1.861c0.824 0.412 1.907 0.639 3.052 0.639s2.228-0.227 3.052-0.639c0.934-0.467 1.448-1.128 1.448-1.861v-10.084l10-1.847v8.33c-0.136-0.092-0.286-0.179-0.448-0.26-0.824-0.412-1.907-0.639-3.052-0.639s-2.228 0.227-3.052 0.639c-0.934 0.467-1.448 1.128-1.448 1.861s0.514 1.395 1.448 1.861c0.824 0.412 1.907 0.639 3.052 0.639s2.228-0.227 3.052-0.639c0.934-0.467 1.448-1.128 1.448-1.861v-13c0-0.148-0.066-0.289-0.18-0.384zM4.5 18c-2.003 0-3.5-0.792-3.5-1.5s1.497-1.5 3.5-1.5 3.5 0.792 3.5 1.5-1.497 1.5-3.5 1.5zM9 5.399v-1.482l10-1.818v1.453l-10 1.847zM15.5 16c-2.003 0-3.5-0.792-3.5-1.5s1.497-1.5 3.5-1.5c2.003 0 3.5 0.792 3.5 1.5s-1.497 1.5-3.5 1.5z" />
      </g>
    </svg>
  );
}

LiniMusicNote3.propTypes = {
  /** The height/width in pixels */
  size: PropTypes.number,
  /** The fill color */
  color: PropTypes.string,
  /** Additional CSS class names */
  className: PropTypes.string,
};
