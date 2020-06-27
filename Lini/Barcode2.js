import React from 'react';
import PropTypes from 'prop-types';
export default function LiniBarcode2({
  size,
  ...props
}) {
  let className = 'Component Lini LiniBarcode2';

  if (props.className) {
    className += ' ' + props.className;
  }

  return /*#__PURE__*/React.createElement("span", Object.assign({}, props, {
    className: className
  }), /*#__PURE__*/React.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 20 20"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M0 3h1v12H0V3zM16 3h.5v12H16V3zM3.5 3H4v12h-.5V3zM12 3h1v12h-1V3zM2 3h1v12H2V3zM7.5 3H8v12h-.5V3zM6 3h1v12H6V3zM19.5 3h.5v12h-.5V3zM17 3h1v12h-1V3zM8.5 3H9v12h-.5V3zM10 3h1v12h-1V3zM0 16h1v1H0v-1zM2 16h1v1H2v-1zM3.5 16H4v1h-.5v-1zM6 16h1v1H6v-1zM7.5 16H8v1h-.5v-1zM8.5 16H9v1h-.5v-1zM10 16h1v1h-1v-1zM12 16h1v1h-1v-1zM16 16h.5v1H16v-1zM17 16h1v1h-1v-1zM19.5 16h.5v1h-.5v-1z"
  })));
}
LiniBarcode2.propTypes = {
  size: PropTypes.number.isRequired
};