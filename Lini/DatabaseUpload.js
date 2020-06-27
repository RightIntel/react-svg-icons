function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from 'react';
import PropTypes from 'prop-types';
export default function LiniDatabaseUpload({
  size,
  ...props
}) {
  let className = 'Component Lini LiniDatabaseUpload';

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
    d: "M11.854 13.646l-2-2a.5.5 0 00-.707 0l-2 2a.5.5 0 00.707.707L9 13.207V17.5a.5.5 0 001 0v-4.293l1.146 1.146a.498.498 0 00.708 0 .5.5 0 000-.707z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M18.067 1.609c-.497-.326-1.193-.615-2.069-.858-1.742-.484-4.05-.75-6.498-.75s-4.756.267-6.498.75c-.877.243-1.573.532-2.069.858C.314 2.016 0 2.483 0 3v12c0 .824.785 1.511 2.335 2.043 1.31.45 3.134.768 5.134.894l.032.001a.5.5 0 00.031-1c-1.914-.121-3.644-.419-4.872-.841-1.31-.45-1.659-.902-1.659-1.098v-2.566c.2.125.429.245.688.359.926.407 2.221.733 3.744.943a.5.5 0 00.137-.991c-1.433-.198-2.636-.498-3.479-.868-.804-.353-1.09-.693-1.09-.877V8.433c.492.309 1.164.583 2.002.816 1.742.484 4.05.75 6.498.75s4.756-.267 6.498-.75c.838-.233 1.511-.507 2.002-.816v2.566c0 .184-.285.524-1.09.877-.843.37-2.045.67-3.479.868a.5.5 0 10.137.991c1.523-.21 2.818-.536 3.744-.943.259-.114.488-.233.688-.359v2.566c0 .196-.35.647-1.659 1.098-1.228.422-2.958.721-4.872.841a.5.5 0 00.031 1l.032-.001c2.001-.126 3.824-.443 5.134-.894 1.549-.532 2.334-1.22 2.334-2.043V3c0-.517-.314-.985-.933-1.391zM3.27 1.714C4.928 1.254 7.14 1 9.5 1s4.573.254 6.23.714C17.525 2.213 18 2.773 18 3s-.474.787-2.27 1.286C14.072 4.746 11.86 5 9.5 5s-4.573-.254-6.23-.714C1.475 3.787 1 3.227 1 3s.474-.787 2.27-1.286zm12.46 6.572C14.072 8.746 11.86 9 9.5 9s-4.573-.254-6.23-.714C1.475 7.787 1 7.227 1 7V4.434c.492.309 1.164.583 2.002.816C4.744 5.734 7.052 6 9.5 6s4.756-.267 6.498-.75c.838-.233 1.511-.507 2.002-.816V7c0 .227-.474.787-2.27 1.286z"
  })));
}
LiniDatabaseUpload.propTypes = {
  size: PropTypes.number.isRequired
};