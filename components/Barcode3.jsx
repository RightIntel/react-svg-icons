import React from "react";
import PropTypes from "prop-types";
import Lini from "../Lini.jsx";

export default function LiniBarcode3(props = {}) {
  props.name = "Barcode3";
  
  return (
    <Lini {...props}>
      <path d="M0 3h1v12h-1v-12z" />
      <path d="M16 3h0.5v11h-0.5v-11z" />
      <path d="M3.5 3h0.5v11h-0.5v-11z" />
      <path d="M12 3h1v11h-1v-11z" />
      <path d="M2 3h1v11h-1v-11z" />
      <path d="M7.5 3h0.5v11h-0.5v-11z" />
      <path d="M6 3h1v11h-1v-11z" />
      <path d="M19.5 3h0.5v12h-0.5v-12z" />
      <path d="M17 3h1v11h-1v-11z" />
      <path d="M8.5 3h0.5v11h-0.5v-11z" />
      <path d="M10 3h1v11h-1v-11z" />
      <path d="M3.5 14.5v0.5h1v0.5h-1v1.5h1.5v-0.5h-1v-0.5h1v-1.5z" />
      <path d="M2 14.5h0.5v2.5h-0.5v-2.5z" />
      <path d="M6 14.5v0.5h1v0.5h-1v1.5h1.5v-0.5h-1v-0.5h1v-1.5z" />
      <path d="M9.5 14.5v1h-0.5v-1h-0.5v1.5h1v1h0.5v-2.5z" />
      <path d="M11 14.5v0.5h1v0.5h-1v0.5h1v0.5h-1v0.5h1.5v-2.5z" />
      <path d="M15 15v-0.5h-1.5v1.5h1v0.5h-1v0.5h1.5v-1.5h-1v-0.5z" />
      <path d="M16 14.5h0.5v2.5h-0.5v-2.5z" />
      <path d="M19 15v-0.5h-1.5v2.5h1.5v-1.5h-1v-0.5h1zM18.5 16v0.5h-0.5v-0.5h0.5z" />
    </Lini>
  );
}

LiniBarcode3.propTypes = {
  /** The height/width in pixels */
  size: PropTypes.number,
  /** The fill color */
  color: PropTypes.string,
  /** Additional CSS class names */
  className: PropTypes.string,
};
