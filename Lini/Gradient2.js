function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from 'react';
import PropTypes from 'prop-types';
export default function LiniGradient2({
  size,
  ...props
}) {
  let className = 'Component Lini LiniGradient2';

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
    d: "M18.5 20h-17C.673 20 0 19.327 0 18.5v-17C0 .673.673 0 1.5 0h17c.827 0 1.5.673 1.5 1.5v17c0 .827-.673 1.5-1.5 1.5zM1.5 1a.5.5 0 00-.5.5v17a.5.5 0 00.5.5h17a.5.5 0 00.5-.5v-17a.5.5 0 00-.5-.5h-17z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M10.707 10l7.146-7.146a.5.5 0 00-.707-.707L10 9.293 9.207 8.5l5.646-5.646a.5.5 0 00-.707-.707L8.5 7.793 7.707 7l4.146-4.146a.5.5 0 00-.707-.707L7 6.293 6.207 5.5l2.646-2.646a.5.5 0 00-.707-.707L5.5 4.793 4.707 4l1.146-1.146a.5.5 0 00-.707-.707L4 3.293 2.854 2.147a.5.5 0 00-.707.707L3.293 4 2.147 5.146a.5.5 0 000 .707l1.146 1.146-1.146 1.146a.5.5 0 000 .707l1.146 1.146-1.146 1.146a.5.5 0 000 .707l1.146 1.146-1.146 1.146a.5.5 0 000 .707l1.146 1.146-1.146 1.146a.5.5 0 00.708.707l1.146-1.146 1.146 1.146a.498.498 0 00.708 0 .5.5 0 000-.707l-1.146-1.146.793-.793 2.646 2.646a.498.498 0 00.708 0 .5.5 0 000-.707L6.21 14.496l.793-.793 4.146 4.146a.498.498 0 00.708 0 .5.5 0 000-.707l-4.146-4.146.793-.793 5.646 5.646a.498.498 0 00.708 0 .5.5 0 000-.707l-5.646-5.646.793-.793 7.146 7.146a.498.498 0 00.708 0 .5.5 0 000-.707l-7.146-7.146zM7.793 8.5L7 9.293 6.207 8.5 7 7.707l.793.793zm-1.5 1.5l-.793.793L4.707 10l.793-.793.793.793zm0-3l-.793.793L4.707 7l.793-.793.793.793zM3.207 5.5L4 4.707l.793.793L4 6.293 3.207 5.5zm0 3L4 7.707l.793.793L4 9.293 3.207 8.5zm0 3L4 10.707l.793.793-.793.793-.793-.793zM4 15.293l-.793-.793.793-.793.793.793-.793.793zm1.5-1.5L4.707 13l.793-.793.793.793-.793.793zm1.5-1.5l-.793-.793.793-.793.793.793-.793.793zm1.5-1.5L7.707 10l.793-.793.793.793-.793.793z"
  })));
}
LiniGradient2.propTypes = {
  size: PropTypes.number.isRequired
};