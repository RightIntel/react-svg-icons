import React from "react";
import PropTypes from "prop-types";
import Lini from "../Lini.jsx";

export default function LiniBarcode(props = {}) {
  props.name = "Barcode";
  
  return (
    <Lini {...props}>
      <path d="M0 3h1v14h-1v-14z" />
      <path d="M16 3h0.5v14h-0.5v-14z" />
      <path d="M3.5 3h0.5v14h-0.5v-14z" />
      <path d="M12 3h1v14h-1v-14z" />
      <path d="M2 3h1v14h-1v-14z" />
      <path d="M7.5 3h0.5v14h-0.5v-14z" />
      <path d="M6 3h1v14h-1v-14z" />
      <path d="M19.5 3h0.5v14h-0.5v-14z" />
      <path d="M17 3h1v14h-1v-14z" />
      <path d="M8.5 3h0.5v14h-0.5v-14z" />
      <path d="M10 3h1v14h-1v-14z" />
    </Lini>
  );
}

LiniBarcode.propTypes = {
  /** The height/width in pixels */
  size: PropTypes.number,
  /** The fill color */
  color: PropTypes.string,
  /** Additional CSS class names */
  className: PropTypes.string,
};
