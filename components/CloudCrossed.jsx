import React from "react";
import PropTypes from "prop-types";
import Lini from "../Lini.jsx";

export default function LiniCloudCrossed(props = {}) {
  props.name = "CloudCrossed";
  
  return (
    <Lini {...props}>
      <path d="M16 8c-0.058 0-0.115 0.001-0.172 0.004 0.113-0.319 0.172-0.658 0.172-1.004 0-0.237-0.028-0.468-0.080-0.69l1.88-1.41c0.221-0.166 0.266-0.479 0.1-0.7s-0.479-0.266-0.7-0.1l-1.686 1.265c-0.536-0.821-1.462-1.365-2.514-1.365-1.213 0-2.269 0.726-2.739 1.776-1.118-1.126-2.65-1.776-4.261-1.776-3.308 0-6 2.692-6 6 0 2.080 1.064 3.916 2.676 4.993l-1.476 1.107c-0.221 0.166-0.266 0.479-0.1 0.7 0.098 0.131 0.248 0.2 0.4 0.2 0.104 0 0.21-0.033 0.3-0.1l1.843-1.383c0.724 0.31 1.521 0.483 2.357 0.483h10c2.206 0 4-1.794 4-4s-1.794-4-4-4zM1 10c0-2.757 2.243-5 5-5 1.628 0 3.159 0.797 4.096 2.131 0.122 0.174 0.341 0.252 0.545 0.194s0.35-0.238 0.363-0.45c0.065-1.051 0.941-1.875 1.996-1.875 0.725 0 1.361 0.388 1.712 0.966l-11.177 8.382c-1.513-0.861-2.535-2.487-2.535-4.349zM16 15h-10c-0.486 0-0.956-0.070-1.4-0.2l10.4-7.8c0 0.506-0.189 0.988-0.533 1.359-0.156 0.169-0.177 0.422-0.051 0.615s0.368 0.273 0.584 0.197c0.32-0.113 0.656-0.17 1-0.17 1.654 0 3 1.346 3 3s-1.346 3-3 3z" />
    </Lini>
  );
}

LiniCloudCrossed.propTypes = {
  /** The height/width in pixels */
  size: PropTypes.number,
  /** The fill color */
  color: PropTypes.string,
  /** Additional CSS class names */
  className: PropTypes.string,
};
