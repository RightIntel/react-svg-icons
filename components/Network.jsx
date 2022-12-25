import React from "react";
import PropTypes from "prop-types";

export default function LiniNetwork({
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
      className={`Component Lini LiniNetwork ${className}`}
      {...moreProps}
    >
      <g fill={color}>
        <path d="M16.218 3.782c-1.794-1.794-4.18-2.782-6.718-2.782s-4.923 0.988-6.717 2.782-2.782 4.18-2.782 6.717c0 2.538 0.988 4.923 2.782 6.717s4.18 2.782 6.717 2.782 4.923-0.988 6.718-2.782c1.794-1.794 2.782-4.18 2.782-6.717s-0.988-4.923-2.782-6.717zM14.992 10c-0.032-1.072-0.164-2.111-0.39-3.083 0.358 0.145 0.699 0.307 1.018 0.484 1.309 0.727 2.116 1.636 2.324 2.598h-2.953zM13.992 10h-3.992v-3.992c1.227 0.038 2.405 0.217 3.471 0.521 0.305 1.066 0.483 2.243 0.521 3.471zM10 5.008v-2.953c0.963 0.208 1.871 1.015 2.598 2.324 0.177 0.319 0.339 0.66 0.484 1.018-0.972-0.226-2.011-0.358-3.083-0.389zM9 2.054v2.953c-1.072 0.032-2.111 0.164-3.083 0.389 0.145-0.358 0.307-0.699 0.484-1.018 0.727-1.309 1.636-2.116 2.598-2.324zM9 6.008v3.992h-3.992c0.038-1.227 0.217-2.405 0.521-3.471 1.066-0.305 2.243-0.483 3.471-0.521zM4.008 10h-2.953c0.208-0.963 1.015-1.871 2.324-2.598 0.319-0.177 0.66-0.339 1.018-0.484-0.226 0.972-0.358 2.011-0.389 3.083zM4.008 11c0.032 1.072 0.164 2.111 0.389 3.083-0.358-0.145-0.699-0.307-1.018-0.484-1.309-0.727-2.116-1.636-2.324-2.598h2.953zM5.008 11h3.992v3.992c-1.227-0.038-2.405-0.217-3.471-0.521-0.305-1.066-0.483-2.243-0.521-3.471zM9 15.992v2.953c-0.963-0.208-1.871-1.015-2.598-2.324-0.177-0.319-0.339-0.66-0.484-1.018 0.972 0.226 2.011 0.358 3.083 0.39zM10 18.946v-2.953c1.072-0.032 2.111-0.164 3.083-0.39-0.145 0.358-0.307 0.699-0.484 1.018-0.727 1.309-1.636 2.116-2.598 2.324zM10 14.992v-3.992h3.992c-0.038 1.227-0.217 2.405-0.521 3.471-1.066 0.305-2.243 0.483-3.471 0.521zM14.992 11h2.953c-0.208 0.963-1.015 1.871-2.324 2.598-0.319 0.177-0.66 0.339-1.018 0.484 0.226-0.972 0.358-2.011 0.389-3.083zM17.432 7.445c-0.378-0.33-0.821-0.638-1.325-0.918-0.56-0.311-1.177-0.578-1.837-0.797-0.22-0.66-0.486-1.277-0.797-1.837-0.28-0.504-0.588-0.947-0.918-1.325 2.234 0.863 4.014 2.644 4.877 4.877zM6.445 2.568c-0.33 0.378-0.638 0.821-0.918 1.325-0.311 0.56-0.578 1.177-0.797 1.837-0.66 0.22-1.277 0.486-1.837 0.797-0.504 0.28-0.947 0.588-1.325 0.918 0.863-2.234 2.644-4.014 4.877-4.877zM1.568 13.555c0.378 0.33 0.821 0.638 1.325 0.918 0.56 0.311 1.177 0.578 1.837 0.797 0.22 0.66 0.486 1.277 0.797 1.837 0.28 0.504 0.588 0.947 0.918 1.325-2.234-0.863-4.014-2.644-4.877-4.877zM12.555 18.432c0.33-0.378 0.638-0.821 0.918-1.325 0.311-0.56 0.578-1.177 0.797-1.837 0.66-0.22 1.277-0.486 1.837-0.797 0.504-0.28 0.947-0.588 1.325-0.918-0.863 2.234-2.644 4.014-4.877 4.877z" />
      </g>
    </svg>
  );
}

LiniNetwork.propTypes = {
  /** The height/width in pixels */
  size: PropTypes.number,
  /** The fill color */
  color: PropTypes.string,
  /** Additional CSS class names */
  className: PropTypes.string,
};
