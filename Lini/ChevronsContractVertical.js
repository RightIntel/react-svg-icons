function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from 'react';
import PropTypes from 'prop-types';
export default function LiniChevronsContractVertical({
  size,
  ...props
}) {
  let className = 'Component Lini LiniChevronsContractVertical';

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
    d: "M9.5 7.5a.502.502 0 01-.354-.146l-6-6a.5.5 0 01.707-.707l5.646 5.646L15.145.647a.5.5 0 01.707.707l-6 6a.498.498 0 01-.354.146zM15.5 19.5a.502.502 0 01-.354-.146L9.5 13.708l-5.646 5.646a.5.5 0 01-.707-.707l6-6a.5.5 0 01.707 0l6 6a.5.5 0 01-.354.853z"
  })));
}
LiniChevronsContractVertical.propTypes = {
  size: PropTypes.number.isRequired
};