import React from "react";
import PropTypes from "prop-types";

export default function LiniNetworkLock({
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
      className={`Component Lini LiniNetworkLock ${className}`}
      {...moreProps}
    >
      <g fill={color}>
        <path d="M16.218 3.782c-1.794-1.794-4.18-2.782-6.718-2.782-0.276 0-0.5 0.224-0.5 0.5v8.5h-8.5c-0.276 0-0.5 0.224-0.5 0.5 0 2.538 0.988 4.923 2.783 6.718s4.18 2.782 6.717 2.782 4.923-0.988 6.718-2.782c1.794-1.794 2.782-4.18 2.782-6.717s-0.988-4.923-2.782-6.718zM6.402 16.621c-0.177-0.319-0.339-0.66-0.484-1.018 0.972 0.226 2.011 0.358 3.083 0.389v2.953c-0.963-0.208-1.871-1.015-2.598-2.324zM10 18.946v-2.953c1.072-0.032 2.111-0.164 3.083-0.39-0.145 0.358-0.307 0.699-0.484 1.018-0.727 1.309-1.636 2.116-2.598 2.324zM10 14.992v-3.992h3.992c-0.038 1.227-0.217 2.405-0.521 3.471-1.066 0.305-2.243 0.483-3.471 0.521zM14.992 10c-0.032-1.072-0.164-2.111-0.389-3.083 0.358 0.145 0.699 0.307 1.018 0.484 1.309 0.727 2.116 1.636 2.324 2.598h-2.953zM14.992 11h2.953c-0.208 0.963-1.015 1.871-2.324 2.598-0.319 0.177-0.66 0.339-1.018 0.484 0.226-0.972 0.358-2.011 0.39-3.083zM17.432 7.445c-0.378-0.33-0.821-0.638-1.325-0.918-0.56-0.311-1.177-0.578-1.837-0.797-0.22-0.66-0.486-1.277-0.797-1.837-0.28-0.504-0.588-0.947-0.918-1.325 2.234 0.863 4.014 2.644 4.877 4.877zM12.598 4.379c0.177 0.319 0.339 0.66 0.484 1.018-0.972-0.226-2.011-0.358-3.083-0.389v-2.953c0.963 0.208 1.871 1.015 2.598 2.324zM10 6.008c1.227 0.038 2.405 0.217 3.471 0.521 0.305 1.066 0.483 2.243 0.521 3.471h-3.992v-3.992zM9 14.992c-1.227-0.038-2.405-0.217-3.471-0.521-0.305-1.066-0.483-2.243-0.521-3.471h3.992v3.992zM4.397 14.083c-0.358-0.145-0.699-0.307-1.018-0.484-1.309-0.727-2.116-1.636-2.324-2.598h2.953c0.032 1.072 0.164 2.111 0.389 3.083zM1.568 13.555c0.378 0.33 0.821 0.638 1.325 0.918 0.56 0.311 1.177 0.578 1.837 0.797 0.22 0.66 0.486 1.277 0.797 1.837 0.28 0.504 0.588 0.947 0.918 1.325-2.234-0.863-4.014-2.644-4.877-4.877zM12.555 18.432c0.33-0.378 0.638-0.821 0.918-1.325 0.311-0.56 0.578-1.177 0.797-1.837 0.66-0.22 1.277-0.486 1.837-0.797 0.504-0.28 0.947-0.588 1.325-0.918-0.863 2.234-2.644 4.014-4.877 4.877z" />
        <path d="M7 3.086v-0.586c0-1.378-1.122-2.5-2.5-2.5s-2.5 1.122-2.5 2.5v0.586c-0.582 0.206-1 0.762-1 1.414v3c0 0.827 0.673 1.5 1.5 1.5h4c0.827 0 1.5-0.673 1.5-1.5v-3c0-0.652-0.418-1.208-1-1.414zM4.5 1c0.827 0 1.5 0.673 1.5 1.5v0.5h-3v-0.5c0-0.827 0.673-1.5 1.5-1.5zM7 7.5c0 0.276-0.224 0.5-0.5 0.5h-4c-0.276 0-0.5-0.224-0.5-0.5v-3c0-0.276 0.224-0.5 0.5-0.5h4c0.276 0 0.5 0.224 0.5 0.5v3z" />
      </g>
    </svg>
  );
}

LiniNetworkLock.propTypes = {
  /** The height/width in pixels */
  size: PropTypes.number,
  /** The fill color */
  color: PropTypes.string,
  /** Additional CSS class names */
  className: PropTypes.string,
};
