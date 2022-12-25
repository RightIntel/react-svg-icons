import React from "react";
import PropTypes from "prop-types";

export default function LiniPingPong({
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
      className={`Component Lini LiniPingPong ${className}`}
      {...moreProps}
    >
      <g fill={color}>
        <path d="M19.104 16.396c-0.582-0.583-1.268-1.112-1.931-1.625-1.943-1.502-3.621-2.798-2.641-5.063 0.498-1.151 0.589-2.24 0.28-3.328-0.329-1.157-1.123-2.35-2.426-3.645-0.861-0.856-1.811-1.529-2.823-2.001-1.045-0.487-2.103-0.734-3.145-0.734-1.69 0-3.246 0.664-4.501 1.92-0.743 0.744-1.279 1.593-1.593 2.522-0.297 0.879-0.39 1.813-0.276 2.777 0.214 1.824 1.168 3.664 2.684 5.182 1.765 1.767 3.32 2.589 4.896 2.589 0.677 0 1.358-0.152 2.082-0.464 0.451-0.195 0.882-0.293 1.281-0.293 1.512 0 2.615 1.427 3.782 2.938 0.513 0.663 1.043 1.349 1.626 1.932 0.098 0.098 0.226 0.146 0.354 0.146s0.256-0.049 0.354-0.146l2-2c0.195-0.195 0.195-0.512 0-0.707zM2.623 2.627c1.063-1.064 2.375-1.627 3.794-1.627 1.783 0 3.701 0.891 5.263 2.444 1.033 1.027 1.65 1.908 1.985 2.684l-7.54 7.54c-0.837-0.353-1.717-1.003-2.687-1.974-2.377-2.38-3.646-6.233-0.815-9.068zM16.76 18.033c-0.413-0.458-0.81-0.972-1.197-1.473-1.264-1.635-2.57-3.326-4.574-3.326-0.536 0-1.1 0.126-1.677 0.375-0.596 0.257-1.148 0.382-1.686 0.382-0.129 0-0.258-0.008-0.388-0.022l6.736-6.736c0.097 0.785-0.092 1.457-0.361 2.079-0.582 1.344-0.494 2.558 0.268 3.71 0.637 0.964 1.676 1.766 2.68 2.542 0.501 0.387 1.015 0.784 1.472 1.197l-1.274 1.273z" />
        <path d="M2.5 20c-1.378 0-2.5-1.122-2.5-2.5s1.122-2.5 2.5-2.5 2.5 1.122 2.5 2.5-1.122 2.5-2.5 2.5zM2.5 16c-0.827 0-1.5 0.673-1.5 1.5s0.673 1.5 1.5 1.5c0.827 0 1.5-0.673 1.5-1.5s-0.673-1.5-1.5-1.5z" />
      </g>
    </svg>
  );
}

LiniPingPong.propTypes = {
  /** The height/width in pixels */
  size: PropTypes.number,
  /** The fill color */
  color: PropTypes.string,
  /** Additional CSS class names */
  className: PropTypes.string,
};
