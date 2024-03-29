import React from "react";
import PropTypes from "prop-types";
import Lini from "../Lini.jsx";

export default function LiniLoading(props = {}) {
  props.name = "Loading";
  
  return (
    <Lini {...props}>
      <path d="M3.519 10c-0.013 0-0.026-0.001-0.038-0.001-0.275-0.021-0.482-0.261-0.461-0.537 0.126-1.663 0.847-3.229 2.030-4.412s2.749-1.903 4.412-2.030c0.276-0.021 0.516 0.185 0.537 0.461s-0.185 0.516-0.461 0.537c-2.925 0.223-5.298 2.596-5.52 5.52-0.020 0.262-0.239 0.462-0.498 0.462z" />
      <path d="M10 15c-2.757 0-5-2.243-5-5s2.243-5 5-5c2.757 0 5 2.243 5 5s-2.243 5-5 5zM10 6c-2.206 0-4 1.794-4 4s1.794 4 4 4c2.206 0 4-1.794 4-4s-1.794-4-4-4z" />
      <path d="M10 19c-2.404 0-4.664-0.936-6.364-2.636s-2.636-3.96-2.636-6.364 0.936-4.664 2.636-6.364 3.96-2.636 6.364-2.636c2.404 0 4.664 0.936 6.364 2.636s2.636 3.96 2.636 6.364-0.936 4.664-2.636 6.364c-1.7 1.7-3.96 2.636-6.364 2.636zM10 2c-4.411 0-8 3.589-8 8s3.589 8 8 8 8-3.589 8-8-3.589-8-8-8z" />
    </Lini>
  );
}

LiniLoading.propTypes = {
  /** The height/width in pixels */
  size: PropTypes.number,
  /** The fill color */
  color: PropTypes.string,
  /** Additional CSS class names */
  className: PropTypes.string,
};
