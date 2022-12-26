import React from "react";
import PropTypes from "prop-types";

export default function LiniGame({
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
      className={`Component Lini LiniGame ${className}`}
      {...moreProps}
    >
      <g fill={color}>
        <path d="M9.5 20c-2.538 0-4.923-0.988-6.718-2.782s-2.782-4.18-2.782-6.717c0-2.538 0.988-4.923 2.782-6.718s4.18-2.783 6.718-2.783c1.776 0 3.508 0.493 5.009 1.426 1.459 0.907 2.647 2.193 3.435 3.717 0.061 0.118 0.072 0.255 0.032 0.382s-0.129 0.232-0.247 0.292l-7.139 3.683 7.139 3.683c0.118 0.061 0.207 0.166 0.247 0.292s0.029 0.264-0.032 0.382c-0.788 1.524-1.976 2.81-3.435 3.717-1.501 0.933-3.233 1.426-5.009 1.426zM9.5 2c-4.687 0-8.5 3.813-8.5 8.5s3.813 8.5 8.5 8.5c3.026 0 5.784-1.583 7.313-4.165l-7.543-3.891c-0.166-0.086-0.271-0.257-0.271-0.444s0.104-0.359 0.271-0.444l7.543-3.891c-1.53-2.581-4.288-4.165-7.313-4.165z" />
        <path d="M11.5 7c-0.827 0-1.5-0.673-1.5-1.5s0.673-1.5 1.5-1.5 1.5 0.673 1.5 1.5-0.673 1.5-1.5 1.5zM11.5 5c-0.276 0-0.5 0.224-0.5 0.5s0.224 0.5 0.5 0.5 0.5-0.224 0.5-0.5-0.224-0.5-0.5-0.5z" />
      </g>
    </svg>
  );
}

LiniGame.propTypes = {
  /** The height/width in pixels */
  size: PropTypes.number,
  /** The fill color */
  color: PropTypes.string,
  /** Additional CSS class names */
  className: PropTypes.string,
};
