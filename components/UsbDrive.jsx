import React from "react";
import PropTypes from "prop-types";
import Lini from "../Lini.jsx";

export default function LiniUsbDrive(props = {}) {
  props.name = "UsbDrive";
  
  return (
    <Lini {...props}>
      <path d="M14 6.501v-5.501c0-0.551-0.449-1-1-1h-6c-0.551 0-1 0.449-1 1v5.501c-0.607 0.457-1 1.182-1 1.999v9c0 1.378 1.122 2.5 2.5 2.5h5c1.378 0 2.5-1.122 2.5-2.5v-9c0-0.816-0.393-1.542-1-1.999zM7 1h6v5.050c-0.162-0.033-0.329-0.050-0.5-0.050h-5c-0.171 0-0.338 0.017-0.5 0.050v-5.050zM14 17.5c0 0.827-0.673 1.5-1.5 1.5h-5c-0.827 0-1.5-0.673-1.5-1.5v-9c0-0.827 0.673-1.5 1.5-1.5h5c0.827 0 1.5 0.673 1.5 1.5v9z" />
      <path d="M11.5 5c-0.276 0-0.5-0.224-0.5-0.5v-1c0-0.276 0.224-0.5 0.5-0.5s0.5 0.224 0.5 0.5v1c0 0.276-0.224 0.5-0.5 0.5z" />
      <path d="M8.5 5c-0.276 0-0.5-0.224-0.5-0.5v-1c0-0.276 0.224-0.5 0.5-0.5s0.5 0.224 0.5 0.5v1c0 0.276-0.224 0.5-0.5 0.5z" />
      <path d="M13 17.5c0 0.276-0.224 0.5-0.5 0.5s-0.5-0.224-0.5-0.5c0-0.276 0.224-0.5 0.5-0.5s0.5 0.224 0.5 0.5z" />
    </Lini>
  );
}

LiniUsbDrive.propTypes = {
  /** The height/width in pixels */
  size: PropTypes.number,
  /** The fill color */
  color: PropTypes.string,
  /** Additional CSS class names */
  className: PropTypes.string,
};
