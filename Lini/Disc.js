function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from 'react';
import PropTypes from 'prop-types';
export default function LiniDisc({
  size,
  ...props
}) {
  let className = 'Component Lini LiniDisc';

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
    d: "M10 12c-1.103 0-2-.897-2-2s.897-2 2-2 2 .897 2 2-.897 2-2 2zm0-3c-.551 0-1 .449-1 1s.449 1 1 1c.551 0 1-.449 1-1s-.449-1-1-1z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M17.071 2.929C15.182 1.04 12.671 0 10 0S4.818 1.04 2.929 2.929C1.04 4.818 0 7.329 0 10s1.04 5.182 2.929 7.071C4.818 18.96 7.329 20 10 20s5.182-1.04 7.071-2.929C18.96 15.182 20 12.671 20 10s-1.04-5.182-2.929-7.071zm.835 2.773L13.372 7.85a4.029 4.029 0 00-1.221-1.221l2.148-4.534a9.07 9.07 0 013.608 3.608zM7 10c0-1.654 1.346-3 3-3s3 1.346 3 3-1.346 3-3 3-3-1.346-3-3zm3-9c1.201 0 2.347.237 3.395.665l-2.148 4.534a4.004 4.004 0 00-5.048 5.048l-4.534 2.148A8.959 8.959 0 011 10c0-4.963 4.037-9 9-9zM2.094 14.298l4.534-2.148c.314.49.731.908 1.221 1.221l-2.148 4.534a9.07 9.07 0 01-3.608-3.608zM10 19a8.959 8.959 0 01-3.395-.665l2.148-4.534a4.004 4.004 0 005.048-5.048l4.534-2.148A8.959 8.959 0 0119 10c0 4.963-4.037 9-9 9z"
  })));
}
LiniDisc.propTypes = {
  size: PropTypes.number.isRequired
};