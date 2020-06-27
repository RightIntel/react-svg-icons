function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from 'react';
import PropTypes from 'prop-types';
export default function LiniPointerDown2({
  size,
  ...props
}) {
  let className = 'Component Lini LiniPointerDown2';

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
    d: "M14 4.5a.5.5 0 10-1 0 .5.5 0 001 0z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M16 11.5a1.502 1.502 0 01-2.053 1.394 1.501 1.501 0 01-2 1A1.502 1.502 0 0110 14.914V17.5c0 .827-.673 1.5-1.5 1.5S7 18.327 7 17.5v-5.966l-1.406 1.113c-.304.241-.695.361-1.098.339s-.779-.186-1.053-.46a1.508 1.508 0 01-.003-2.12l3.479-3.523A1.501 1.501 0 016 5.5v-2C6 2.673 6.673 2 7.5 2h7c.827 0 1.5.673 1.5 1.5v2a1.5 1.5 0 01-.719 1.28c.328.636.719 1.798.719 3.72v1zm-11.85.318a.653.653 0 00.823.044l2.216-1.754a.499.499 0 01.81.392v7a.5.5 0 001 0v-5a.5.5 0 011 0v1a.5.5 0 001 0v-1a.5.5 0 011 0 .5.5 0 001 0v-1a.5.5 0 011 0 .5.5 0 001 0v-1c0-2.102-.516-3.139-.748-3.5H8.208l-4.057 4.108a.512.512 0 00-.002.71zM15 3.5a.5.5 0 00-.5-.5h-7a.5.5 0 00-.5.5v2a.5.5 0 00.5.5h7a.5.5 0 00.5-.5v-2z"
  })));
}
LiniPointerDown2.propTypes = {
  size: PropTypes.number.isRequired
};