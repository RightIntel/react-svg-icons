function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from 'react';
import PropTypes from 'prop-types';
export default function LiniHockey({
  size,
  ...props
}) {
  let className = 'Component Lini LiniHockey';

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
    d: "M5 12c-2.115 0-3.512-.328-4.27-1.001C0 10.35 0 9.538 0 9c0-1.271.729-2 2-2 .194 0 .492.048.943.12.886.142 2.369.38 4.057.38 2.445 0 5.793 0 8.146-2.354.975-.975 3.944-4.437 3.974-4.472a.5.5 0 11.759.651c-.123.143-3.024 3.526-4.026 4.528-1.178 1.178-2.65 1.938-4.502 2.323-1.55.323-3.104.323-4.352.323-1.767 0-3.3-.246-4.215-.393-.344-.055-.67-.107-.785-.107-.72 0-1 .28-1 1 0 .463 0 .9.395 1.251.559.497 1.772.749 3.605.749 6.274 0 8.186-.909 9.519-2.586.575-.724 4.551-5.677 4.591-5.727a.5.5 0 01.78.626c-.04.05-4.014 5.001-4.588 5.723-.876 1.103-1.86 1.766-3.287 2.219-1.604.508-3.833.745-7.015.745zM14.672 14.48C13.95 14.171 13.001 14 12 14s-1.95.17-2.672.48C8.172 14.975 8 15.645 8 16v1.75c0 .667.462 1.265 1.302 1.685.729.365 1.687.565 2.698.565s1.969-.201 2.698-.565c.839-.42 1.302-1.018 1.302-1.685V16c0-.355-.173-1.025-1.328-1.52zM12 15c1.861 0 3 .647 3 1s-1.139 1-3 1-3-.647-3-1 1.139-1 3-1zm2.251 3.54c-.584.292-1.405.46-2.251.46s-1.667-.168-2.251-.46C9.28 18.306 9 18.01 9 17.75v-.389c.1.055.208.108.328.159.722.309 1.671.48 2.672.48s1.95-.17 2.672-.48c.12-.051.229-.105.328-.159v.389c0 .26-.28.556-.749.79z"
  })));
}
LiniHockey.propTypes = {
  size: PropTypes.number.isRequired
};