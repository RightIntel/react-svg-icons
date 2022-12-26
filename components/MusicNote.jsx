import React from "react";
import PropTypes from "prop-types";

export default function LiniMusicNote({
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
      className={`Component Lini LiniMusicNote ${className}`}
      {...moreProps}
    >
      <g fill={color}>
        <path d="M13.5 5c-1.378 0-2.5-1.122-2.5-2.5 0-0.276-0.224-0.5-0.5-0.5s-0.5 0.224-0.5 0.5v12.399c-0.136-0.092-0.286-0.179-0.448-0.26-0.824-0.412-1.907-0.639-3.052-0.639s-2.228 0.227-3.052 0.639c-0.934 0.467-1.448 1.128-1.448 1.861s0.514 1.395 1.448 1.861c0.824 0.412 1.907 0.639 3.052 0.639s2.228-0.227 3.052-0.639c0.934-0.467 1.448-1.128 1.448-1.861v-11.553c0.636 0.649 1.522 1.053 2.5 1.053 1.378 0 2.5 1.122 2.5 2.5 0 0.276 0.224 0.5 0.5 0.5s0.5-0.224 0.5-0.5c0-1.93-1.57-3.5-3.5-3.5zM6.5 18c-2.003 0-3.5-0.792-3.5-1.5s1.497-1.5 3.5-1.5 3.5 0.792 3.5 1.5-1.497 1.5-3.5 1.5z" />
      </g>
    </svg>
  );
}

LiniMusicNote.propTypes = {
  /** The height/width in pixels */
  size: PropTypes.number,
  /** The fill color */
  color: PropTypes.string,
  /** Additional CSS class names */
  className: PropTypes.string,
};
