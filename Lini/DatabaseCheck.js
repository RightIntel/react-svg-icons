function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from 'react';
import PropTypes from 'prop-types';
export default function LiniDatabaseCheck({
  size,
  ...props
}) {
  let className = 'Component Lini LiniDatabaseCheck';

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
    d: "M18.067 1.609c-.497-.326-1.193-.615-2.069-.858-1.742-.484-4.05-.75-6.498-.75s-4.756.267-6.498.75c-.877.243-1.573.532-2.069.858C.314 2.016 0 2.483 0 3v12c0 .517.314.985.933 1.391.497.326 1.193.615 2.069.858 1.742.484 4.05.75 6.498.75.339 0 .68-.005 1.015-.016a.499.499 0 10-.031-.999c-.325.01-.656.015-.985.015-2.36 0-4.573-.254-6.23-.714-1.795-.499-2.27-1.059-2.27-1.286v-2.566c.492.309 1.164.583 2.002.816 1.742.484 4.05.75 6.498.75s4.756-.267 6.498-.751c.877-.243 1.573-.532 2.069-.858.619-.406.933-.874.933-1.391v-8c0-.517-.314-.985-.933-1.391zM3.27 1.714C4.928 1.254 7.14 1 9.5 1s4.573.254 6.23.714C17.525 2.213 18 2.773 18 3s-.474.787-2.27 1.286C14.072 4.746 11.86 5 9.5 5s-4.573-.254-6.23-.714C1.475 3.787 1 3.227 1 3s.474-.787 2.27-1.286zm12.46 10.572c-1.658.46-3.87.714-6.23.714s-4.573-.254-6.23-.714C1.475 11.787 1 11.227 1 11V8.434c.492.309 1.164.583 2.002.816 1.742.484 4.05.75 6.498.75s4.756-.267 6.498-.75c.838-.233 1.511-.507 2.002-.816V11c0 .227-.474.787-2.27 1.286zm0-4C14.072 8.746 11.86 9 9.5 9s-4.573-.254-6.23-.714C1.475 7.787 1 7.227 1 7V4.434c.492.309 1.164.583 2.002.816C4.744 5.734 7.052 6 9.5 6s4.756-.267 6.498-.75c.838-.233 1.511-.507 2.002-.816V7c0 .227-.474.787-2.27 1.286z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M14.5 19.5a.502.502 0 01-.354-.146l-2-2a.5.5 0 01.707-.707l1.646 1.646 4.646-4.646a.5.5 0 01.707.707l-5 5a.498.498 0 01-.354.146z"
  })));
}
LiniDatabaseCheck.propTypes = {
  size: PropTypes.number.isRequired
};