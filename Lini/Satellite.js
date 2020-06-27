function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from 'react';
import PropTypes from 'prop-types';
export default function LiniSatellite({
  size,
  ...props
}) {
  let className = 'Component Lini LiniSatellite';

  if (props.className) {
    className += ' ' + props.className;
  }

  return /*#__PURE__*/React.createElement("span", _extends({}, props, {
    className: className
  }), /*#__PURE__*/React.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 20 20"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M9.5 15.085c-.401 0-.778-.156-1.061-.438l-2.586-2.586c-.283-.283-.438-.659-.438-1.061s.156-.778.438-1.061l4.586-4.586c.283-.283.659-.438 1.061-.438s.778.156 1.061.438l2.586 2.586a1.501 1.501 0 010 2.121l-4.586 4.586a1.488 1.488 0 01-1.061.438zm2-9.17a.5.5 0 00-.354.145L6.56 10.646c-.094.094-.145.219-.145.354s.052.26.145.353l2.586 2.586c.094.094.219.145.354.145s.26-.052.354-.145l4.586-4.586a.5.5 0 000-.707L11.854 6.06a.495.495 0 00-.354-.145zM5.5 9.5a.502.502 0 01-.354-.146l-4-4a.5.5 0 010-.707l4-4a.5.5 0 01.707 0l4 4a.5.5 0 01-.707.707L5.5 1.708 2.207 5.001l3.646 3.646a.5.5 0 01-.354.853zM15.5 19.5a.502.502 0 01-.354-.146l-4-4a.5.5 0 01.707-.707l3.646 3.646L18.792 15l-3.646-3.646a.5.5 0 01.707-.707l4 4a.5.5 0 010 .707l-4 4a.498.498 0 01-.354.146zM17 7h-1.5a.5.5 0 010-1h1.293L14 3.207V4.5a.5.5 0 01-1 0V3c0-.674.361-.896.516-.96s.568-.163 1.044.314l3.086 3.086c.476.477.378.889.314 1.044S17.673 7 17 7zM7 16a.502.502 0 01-.354-.146l-2-2a.5.5 0 01.707-.707l2 2a.5.5 0 01-.354.853zM6 18a.502.502 0 01-.354-.146l-3-3a.5.5 0 01.707-.707l3 3a.5.5 0 01-.354.853zM5 20a.502.502 0 01-.354-.146l-4-4a.5.5 0 01.707-.707l4 4a.5.5 0 01-.354.853z"
  })));
}
LiniSatellite.propTypes = {
  size: PropTypes.number.isRequired
};