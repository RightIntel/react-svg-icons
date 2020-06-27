function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from 'react';
import PropTypes from 'prop-types';
export default function LiniDatabaseRefresh({
  size,
  ...props
}) {
  let className = 'Component Lini LiniDatabaseRefresh';

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
    d: "M17.521 18.169a.5.5 0 00-.706-.044A3.496 3.496 0 0114.5 19a3.505 3.505 0 01-3.493-3.286l.14.14a.498.498 0 00.708 0 .5.5 0 000-.707l-1-1a.5.5 0 00-.707 0l-1 1a.5.5 0 00.707.707l.151-.151a4.505 4.505 0 004.495 4.298c1.097 0 2.154-.4 2.976-1.125a.5.5 0 00.044-.706zM19.854 15.146a.5.5 0 00-.707 0l-.151.151a4.505 4.505 0 00-4.495-4.298 4.492 4.492 0 00-2.976 1.125.5.5 0 10.662.75 3.496 3.496 0 012.315-.875 3.505 3.505 0 013.493 3.286l-.14-.14a.5.5 0 00-.707.707l1 1a.498.498 0 00.708 0l1-1a.5.5 0 000-.707z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M18.067 1.609c-.497-.326-1.193-.615-2.069-.858-1.742-.484-4.05-.75-6.498-.75s-4.756.267-6.498.75c-.877.243-1.573.532-2.069.858C.314 2.016 0 2.483 0 3v12c0 .882.897 1.606 2.665 2.151 1.522.469 3.588.765 5.819.834H8.5a.5.5 0 00.015-1c-2.144-.066-4.117-.346-5.556-.79C1.412 15.718.999 15.219.999 15v-2.565c.423.265.978.504 1.665.716 1.522.469 3.588.765 5.819.834h.016a.5.5 0 00.015-1c-2.144-.066-4.117-.346-5.556-.79C1.411 11.718.998 11.219.998 11V8.434c.492.309 1.164.583 2.002.816 1.742.484 4.05.75 6.498.75s4.756-.267 6.498-.75c.838-.233 1.511-.507 2.002-.816V11a.5.5 0 001 0V3c0-.517-.314-.985-.933-1.391zM3.27 1.714C4.928 1.254 7.14 1 9.5 1s4.573.254 6.23.714C17.525 2.213 18 2.773 18 3s-.474.787-2.27 1.286C14.072 4.746 11.86 5 9.5 5s-4.573-.254-6.23-.714C1.475 3.787 1 3.227 1 3s.474-.787 2.27-1.286zm12.46 6.572C14.072 8.746 11.86 9 9.5 9s-4.573-.254-6.23-.714C1.475 7.787 1 7.227 1 7V4.434c.492.309 1.164.583 2.002.816C4.744 5.734 7.052 6 9.5 6s4.756-.267 6.498-.75c.838-.233 1.511-.507 2.002-.816V7c0 .227-.474.787-2.27 1.286z"
  })));
}
LiniDatabaseRefresh.propTypes = {
  size: PropTypes.number.isRequired
};