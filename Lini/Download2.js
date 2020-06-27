function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from 'react';
import PropTypes from 'prop-types';
export default function LiniDownload2({
  size,
  ...props
}) {
  let className = 'Component Lini LiniDownload2';

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
    d: "M14.853 9.647a.5.5 0 00-.707 0L10 13.793V2.5a.5.5 0 00-1 0v11.293L4.854 9.647a.5.5 0 00-.707.707l5 5a.498.498 0 00.708-.001l5-5a.5.5 0 000-.707z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M17.5 19h-16C.673 19 0 18.327 0 17.5v-2a.5.5 0 011 0v2a.5.5 0 00.5.5h16a.5.5 0 00.5-.5v-2a.5.5 0 011 0v2c0 .827-.673 1.5-1.5 1.5z"
  })));
}
LiniDownload2.propTypes = {
  size: PropTypes.number.isRequired
};