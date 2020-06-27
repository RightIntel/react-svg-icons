function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from 'react';
import PropTypes from 'prop-types';
export default function LiniChevronsExpandHorizontal({
  size,
  ...props
}) {
  let className = 'Component Lini LiniChevronsExpandHorizontal';

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
    d: "M12.5 15.5c0-.128.049-.256.146-.354L18.292 9.5l-5.646-5.646a.5.5 0 01.707-.707l6 6a.5.5 0 010 .707l-6 6a.5.5 0 01-.853-.354zM.5 9.5c0-.128.049-.256.146-.354l6-6a.5.5 0 01.707.707L1.707 9.499l5.646 5.646a.5.5 0 01-.707.707l-6-6A.498.498 0 01.5 9.498z"
  })));
}
LiniChevronsExpandHorizontal.propTypes = {
  size: PropTypes.number.isRequired
};