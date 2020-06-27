function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from 'react';
import PropTypes from 'prop-types';
export default function LiniDatabaseHistory({
  size,
  ...props
}) {
  let className = 'Component Lini LiniDatabaseHistory';

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
    d: "M18.067 1.609c-.497-.326-1.193-.615-2.069-.858-1.742-.484-4.05-.75-6.498-.75s-4.756.267-6.498.75c-.877.243-1.573.532-2.069.858C.314 2.016 0 2.483 0 3v12c0 .882.897 1.606 2.665 2.151 1.522.469 3.588.765 5.819.834H8.5a.5.5 0 00.015-1c-2.144-.066-4.117-.346-5.556-.79C1.412 15.718.999 15.219.999 15v-2.565c.353.221.798.424 1.335.609 1.31.45 3.134.768 5.134.894l.032.001a.5.5 0 00.031-1c-1.914-.121-3.644-.419-4.872-.841-1.31-.45-1.66-.902-1.66-1.098V8.435c.423.265.978.504 1.665.716 1.522.469 3.588.765 5.819.834h.016a.5.5 0 00.015-1c-2.144-.066-4.117-.346-5.556-.79C1.411 7.718.998 7.219.998 7V4.434c.492.309 1.164.583 2.002.816 1.742.484 4.05.75 6.498.75s4.756-.267 6.498-.75c.838-.233 1.511-.507 2.002-.816V7.5a.5.5 0 001 0V3c0-.517-.314-.985-.933-1.391zM15.73 4.286C14.072 4.746 11.86 5 9.5 5s-4.573-.254-6.23-.714C1.475 3.787 1 3.227 1 3s.474-.787 2.27-1.286C4.927 1.254 7.14 1 9.5 1s4.573.254 6.23.714C17.525 2.213 18 2.773 18 3s-.474.787-2.27 1.286z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M14.5 14a.49.49 0 01-.223-.053l-2-1a.5.5 0 01.447-.895l1.678.839 1.745-1.745a.5.5 0 01.707.707l-2 2a.5.5 0 01-.354.146z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M14.5 19C11.467 19 9 16.533 9 13.5S11.467 8 14.5 8s5.5 2.467 5.5 5.5-2.467 5.5-5.5 5.5zm0-10c-2.481 0-4.5 2.019-4.5 4.5s2.019 4.5 4.5 4.5 4.5-2.019 4.5-4.5S16.981 9 14.5 9z"
  })));
}
LiniDatabaseHistory.propTypes = {
  size: PropTypes.number.isRequired
};