import React from "react";
import PropTypes from "prop-types";
import Lini from "../Lini.jsx";

export default function LiniMap2(props = {}) {
  props.name = "Map2";
  
  return (
    <Lini {...props}>
      <path d="M18.763 1.075c-0.147-0.091-0.331-0.099-0.486-0.022l-5.776 2.888-5.776-2.888c-0.141-0.070-0.306-0.070-0.447 0l-6 3c-0.169 0.085-0.276 0.258-0.276 0.447v15c0 0.173 0.090 0.334 0.237 0.425 0.080 0.050 0.171 0.075 0.263 0.075 0.076 0 0.153-0.018 0.224-0.053l5.776-2.888 5.776 2.888c0.141 0.070 0.307 0.070 0.447 0l6-3c0.169-0.085 0.276-0.258 0.276-0.447v-15c-0-0.173-0.090-0.334-0.237-0.425zM6 16.191l-5 2.5v-13.882l5-2.5v13.882zM7 2.309l5 2.5v13.882l-5-2.5v-13.882zM18 16.191l-5 2.5v-13.882l5-2.5v13.882z" />
    </Lini>
  );
}

LiniMap2.propTypes = {
  /** The height/width in pixels */
  size: PropTypes.number,
  /** The fill color */
  color: PropTypes.string,
  /** Additional CSS class names */
  className: PropTypes.string,
};
