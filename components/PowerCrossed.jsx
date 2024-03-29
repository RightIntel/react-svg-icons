import React from "react";
import PropTypes from "prop-types";
import Lini from "../Lini.jsx";

export default function LiniPowerCrossed(props = {}) {
  props.name = "PowerCrossed";
  
  return (
    <Lini {...props}>
      <path d="M18.895 3.193c-0.17-0.218-0.484-0.257-0.702-0.088l-7.427 5.776 3.19-7.178c0.098-0.22 0.025-0.479-0.174-0.615s-0.466-0.112-0.637 0.059l-10 10c-0.143 0.143-0.186 0.358-0.108 0.545s0.26 0.309 0.462 0.309h3.257l-6.564 5.105c-0.218 0.17-0.257 0.484-0.088 0.702 0.099 0.127 0.246 0.193 0.395 0.193 0.107 0 0.215-0.034 0.307-0.105l7.427-5.776-3.19 7.178c-0.098 0.22-0.025 0.479 0.174 0.615 0.086 0.059 0.185 0.088 0.283 0.088 0.129 0 0.257-0.050 0.354-0.146l10-10c0.143-0.143 0.186-0.358 0.108-0.545s-0.26-0.309-0.462-0.309h-3.257l6.564-5.105c0.218-0.17 0.257-0.484 0.088-0.702zM4.707 11l7.242-7.242-2.462 5.539c-0.069 0.155-0.055 0.334 0.038 0.476 0.011 0.017 0.023 0.032 0.035 0.047l-1.517 1.18h-3.336zM14.293 10l-7.242 7.242 2.462-5.539c0.069-0.155 0.055-0.334-0.038-0.476-0.011-0.017-0.023-0.032-0.035-0.047l1.517-1.18h3.336z" />
    </Lini>
  );
}

LiniPowerCrossed.propTypes = {
  /** The height/width in pixels */
  size: PropTypes.number,
  /** The fill color */
  color: PropTypes.string,
  /** Additional CSS class names */
  className: PropTypes.string,
};
