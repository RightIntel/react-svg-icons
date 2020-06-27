function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from 'react';
import PropTypes from 'prop-types';
export default function LiniDatabaseDownload({
  size,
  ...props
}) {
  let className = 'Component Lini LiniDatabaseDownload';

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
    d: "M11.854 15.646a.5.5 0 00-.707 0l-1.146 1.146v-4.293a.5.5 0 00-1 0v4.293l-1.146-1.146a.5.5 0 00-.707.707l2 2a.498.498 0 00.708 0l2-2a.5.5 0 000-.707z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M18.067 1.609c-.497-.326-1.193-.615-2.069-.858-1.742-.484-4.05-.75-6.498-.75s-4.756.267-6.498.75c-.877.243-1.573.532-2.069.858C.314 2.016 0 2.483 0 3v12c0 .762.676 1.41 2.009 1.925 1.123.434 2.659.756 4.442.931.017.002.033.002.049.002a.5.5 0 00.048-.997c-1.67-.164-3.154-.472-4.18-.868-1.011-.39-1.369-.778-1.369-.992v-2.565c.353.221.798.424 1.335.609 1.31.45 3.134.768 5.134.894l.032.001a.5.5 0 00.031-1c-1.914-.121-3.644-.419-4.872-.841-1.31-.45-1.66-.902-1.66-1.098V8.435c.492.309 1.164.583 2.002.816 1.742.484 4.05.75 6.498.75s4.756-.267 6.498-.75c.838-.233 1.511-.507 2.002-.816v2.566c0 .196-.35.647-1.659 1.098-1.228.422-2.958.721-4.872.841a.5.5 0 00.031.999l.032-.001c2.001-.126 3.824-.443 5.134-.894a6.469 6.469 0 001.334-.609V15c0 .214-.359.602-1.369.992-1.025.396-2.51.704-4.18.868a.5.5 0 00.097.995c1.783-.175 3.319-.497 4.442-.931 1.333-.515 2.009-1.162 2.009-1.925v-12c0-.517-.314-.985-.933-1.391zM3.27 1.714C4.928 1.254 7.14 1 9.5 1s4.573.254 6.23.714C17.525 2.213 18 2.773 18 3s-.474.787-2.27 1.286C14.072 4.746 11.86 5 9.5 5s-4.573-.254-6.23-.714C1.475 3.787 1 3.227 1 3s.474-.787 2.27-1.286zm12.46 6.572C14.072 8.746 11.86 9 9.5 9s-4.573-.254-6.23-.714C1.475 7.787 1 7.227 1 7V4.434c.492.309 1.164.583 2.002.816C4.744 5.734 7.052 6 9.5 6s4.756-.267 6.498-.75c.838-.233 1.511-.507 2.002-.816V7c0 .227-.474.787-2.27 1.286z"
  })));
}
LiniDatabaseDownload.propTypes = {
  size: PropTypes.number.isRequired
};