function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from 'react';
import PropTypes from 'prop-types';
export default function LiniSync({
  size,
  ...props
}) {
  let className = 'Component Lini LiniSync';

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
    d: "M19.854 8.646a.5.5 0 00-.707 0l-1.149 1.149a7.94 7.94 0 00-2.341-5.452A7.948 7.948 0 0010 2a7.988 7.988 0 00-7.077 4.266.5.5 0 00.884.468A6.99 6.99 0 0110 3c3.789 0 6.885 3.027 6.997 6.789l-1.143-1.143a.5.5 0 00-.707.707l2 2a.498.498 0 00.708 0l2-2a.5.5 0 000-.707zM16.869 13.058a.5.5 0 00-.676.208A6.99 6.99 0 0110 17c-3.789 0-6.885-3.027-6.997-6.789l1.143 1.143a.498.498 0 00.708 0 .5.5 0 000-.707l-2-2a.5.5 0 00-.707 0l-2 2a.5.5 0 00.707.707l1.149-1.149a7.94 7.94 0 002.341 5.452A7.948 7.948 0 0010.001 18a7.988 7.988 0 007.077-4.266.5.5 0 00-.208-.676z"
  })));
}
LiniSync.propTypes = {
  size: PropTypes.number.isRequired
};