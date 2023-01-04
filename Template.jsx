import React from "react";
import PropTypes from "prop-types";
import Lini from "../Lini.jsx";

export default function Lini__Name__(props = {}) {
  props.name = "__Name__";
  // prettier-ignore
  return (
    <Lini {...props}>__paths__</Lini>
  );
}

Lini__Name__.propTypes = {
  /** The height/width in pixels */
  size: PropTypes.number,
  /** The fill color */
  color: PropTypes.string,
  /** Additional CSS class names */
  className: PropTypes.string,
};
