import React from "react";
import PropTypes from "prop-types";
import Lini from "../Lini.jsx";

export default function LiniBarcode2(props = {}) {
  props.name = "Barcode2";
  
  return (
    <Lini {...props}>
      <path d="M0 3h1v12h-1v-12z" />
      <path d="M16 3h0.5v12h-0.5v-12z" />
      <path d="M3.5 3h0.5v12h-0.5v-12z" />
      <path d="M12 3h1v12h-1v-12z" />
      <path d="M2 3h1v12h-1v-12z" />
      <path d="M7.5 3h0.5v12h-0.5v-12z" />
      <path d="M6 3h1v12h-1v-12z" />
      <path d="M19.5 3h0.5v12h-0.5v-12z" />
      <path d="M17 3h1v12h-1v-12z" />
      <path d="M8.5 3h0.5v12h-0.5v-12z" />
      <path d="M10 3h1v12h-1v-12z" />
      <path d="M0 16h1v1h-1v-1z" />
      <path d="M2 16h1v1h-1v-1z" />
      <path d="M3.5 16h0.5v1h-0.5v-1z" />
      <path d="M6 16h1v1h-1v-1z" />
      <path d="M7.5 16h0.5v1h-0.5v-1z" />
      <path d="M8.5 16h0.5v1h-0.5v-1z" />
      <path d="M10 16h1v1h-1v-1z" />
      <path d="M12 16h1v1h-1v-1z" />
      <path d="M16 16h0.5v1h-0.5v-1z" />
      <path d="M17 16h1v1h-1v-1z" />
      <path d="M19.5 16h0.5v1h-0.5v-1z" />
    </Lini>
  );
}

LiniBarcode2.propTypes = {
  /** The height/width in pixels */
  size: PropTypes.number,
  /** The fill color */
  color: PropTypes.string,
  /** Additional CSS class names */
  className: PropTypes.string,
};
