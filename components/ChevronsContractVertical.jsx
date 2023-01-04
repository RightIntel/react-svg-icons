import React from "react";
import PropTypes from "prop-types";
import Lini from "../Lini.jsx";

export default function LiniChevronsContractVertical(props = {}) {
  props.name = "ChevronsContractVertical";
  
  return (
    <Lini {...props}>
      <path d="M9.5 7.5c-0.128 0-0.256-0.049-0.354-0.146l-6-6c-0.195-0.195-0.195-0.512 0-0.707s0.512-0.195 0.707 0l5.646 5.646 5.646-5.646c0.195-0.195 0.512-0.195 0.707 0s0.195 0.512 0 0.707l-6 6c-0.098 0.098-0.226 0.146-0.354 0.146z" />
      <path d="M15.5 19.5c-0.128 0-0.256-0.049-0.354-0.146l-5.646-5.646-5.646 5.646c-0.195 0.195-0.512 0.195-0.707 0s-0.195-0.512 0-0.707l6-6c0.195-0.195 0.512-0.195 0.707 0l6 6c0.195 0.195 0.195 0.512 0 0.707-0.098 0.098-0.226 0.146-0.354 0.146z" />
    </Lini>
  );
}

LiniChevronsContractVertical.propTypes = {
  /** The height/width in pixels */
  size: PropTypes.number,
  /** The fill color */
  color: PropTypes.string,
  /** Additional CSS class names */
  className: PropTypes.string,
};
