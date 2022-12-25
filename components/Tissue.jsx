import React from "react";
import PropTypes from "prop-types";

export default function LiniTissue({
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
      className={`Component Lini LiniTissue ${className}`}
      {...moreProps}
    >
      <g fill={color}>
        <path d="M19.5 11.382l-1.106-2.211c-0.328-0.657-1.16-1.171-1.894-1.171h-1.796c0.893-2.563 2.226-5.24 2.244-5.276 0.083-0.167 0.067-0.367-0.043-0.518-0.049-0.067-1.225-1.641-3.526-1.066-0.772 0.193-1.313 0.651-1.791 1.056-0.531 0.449-0.95 0.804-1.588 0.804-0.68 0-1.535-0.244-2.363-0.481-0.893-0.255-1.817-0.519-2.637-0.519-0.981 0-1.473 0.381-1.713 0.7-0.274 0.365-0.287 0.73-0.287 0.8 0 0.042 0.005 0.084 0.016 0.124 0.021 0.081 0.419 1.602 1.694 4.376h-1.21c-0.734 0-1.566 0.514-1.894 1.171l-1.106 2.211c-0.28 0.561-0.5 1.491-0.5 2.118v4c0 0.827 0.673 1.5 1.5 1.5h17c0.827 0 1.5-0.673 1.5-1.5v-4c0-0.627-0.22-1.557-0.5-2.118zM4.088 3.3c0.147-0.196 0.463-0.3 0.912-0.3 0.68 0 1.535 0.244 2.363 0.481 0.893 0.255 1.817 0.519 2.637 0.519 1.004 0 1.657-0.553 2.234-1.041 0.433-0.367 0.842-0.713 1.388-0.849 1.189-0.297 1.944 0.182 2.278 0.479-0.532 1.097-2.261 4.783-2.813 7.411h-1.031c0.171-0.983 0.694-2.667 0.919-3.342 0.087-0.262-0.054-0.545-0.316-0.632s-0.545 0.054-0.632 0.316c-0.091 0.273-0.796 2.41-0.981 3.658h-2.224c-0.426-0.997-0.831-2.604-0.835-2.621-0.067-0.268-0.338-0.431-0.606-0.364s-0.431 0.338-0.364 0.606c0.017 0.067 0.337 1.34 0.729 2.379h-0.94c-1.953-3.768-2.662-6.074-2.795-6.538 0.011-0.039 0.033-0.102 0.079-0.162zM2.5 9.618c0.162-0.323 0.638-0.618 1-0.618h1.683c0.155 0.32 0.321 0.653 0.497 1h-0.179c-0.276 0-0.5 0.224-0.5 0.5s0.224 0.5 0.5 0.5h9c0.276 0 0.5-0.224 0.5-0.5s-0.224-0.5-0.5-0.5h-0.39c0.073-0.319 0.164-0.655 0.268-1h2.122c0.362 0 0.838 0.295 1 0.618l1.106 2.211c0.028 0.055 0.055 0.117 0.081 0.183-0.061-0.008-0.123-0.012-0.187-0.012h-17c-0.063 0-0.125 0.004-0.187 0.012 0.026-0.066 0.053-0.128 0.081-0.183l1.106-2.211zM19 17.5c0 0.276-0.224 0.5-0.5 0.5h-17c-0.276 0-0.5-0.224-0.5-0.5v-4c0-0.276 0.224-0.5 0.5-0.5h17c0.276 0 0.5 0.224 0.5 0.5v4z" />
      </g>
    </svg>
  );
}

LiniTissue.propTypes = {
  /** The height/width in pixels */
  size: PropTypes.number,
  /** The fill color */
  color: PropTypes.string,
  /** Additional CSS class names */
  className: PropTypes.string,
};
