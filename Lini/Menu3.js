function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from 'react';
import PropTypes from 'prop-types';
export default function LiniMenu3({
  size,
  ...props
}) {
  let className = 'Component Lini LiniMenu3';

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
    d: "M14.5 5.5a.502.502 0 01-.354-.146l-2-2a.5.5 0 01.707-.707l1.646 1.646 1.646-1.646a.5.5 0 01.707.707l-2 2a.498.498 0 01-.354.146z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M18.5 0h-17C.673 0 0 .673 0 1.5v5C0 7.327.673 8 1.5 8H4v10.5c0 .827.673 1.5 1.5 1.5h13c.827 0 1.5-.673 1.5-1.5v-17c0-.827-.673-1.5-1.5-1.5zM1 6.5v-5a.5.5 0 01.5-.5h17a.5.5 0 01.5.5v5a.5.5 0 01-.5.5h-17a.5.5 0 01-.5-.5zM18.5 19h-13a.5.5 0 01-.5-.5V8h13.5c.175 0 .343-.031.5-.086V18.5a.5.5 0 01-.5.5z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M16.5 11h-9a.5.5 0 010-1h9a.5.5 0 010 1zM16.5 14h-9a.5.5 0 010-1h9a.5.5 0 010 1zM16.5 17h-9a.5.5 0 010-1h9a.5.5 0 010 1z"
  })));
}
LiniMenu3.propTypes = {
  size: PropTypes.number.isRequired
};