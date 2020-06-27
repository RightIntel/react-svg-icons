function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from 'react';
import PropTypes from 'prop-types';
export default function LiniGun({
  size,
  ...props
}) {
  let className = 'Component Lini LiniGun';

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
    d: "M19.5 4H19v-.5a.5.5 0 00-1 0V4H3.5a.5.5 0 00-.447.276l-1 2a.5.5 0 00-.023.392c.086.24.207.5.334.774.175.376.364.782.49 1.192l.007.024c.085.281.139.564.139.841 0 .746-.551 1.563-1.188 2.508C.963 13.267 0 14.694 0 16.499a.5.5 0 00.5.5h7a.5.5 0 000-1h-.473c.124-1.215.661-2.695 1.239-4h3.233c.763 0 1.549-.567 1.791-1.291l.57-1.709h3.64c.827 0 1.5-.673 1.5-1.5v-.5h.5a.5.5 0 00.5-.5v-2a.5.5 0 00-.5-.5zM8 5h5v1H8V5zm-5.359 7.567C3.34 11.531 4 10.552 4 9.5c0-.168-.014-.335-.039-.5h4.678c-.792 1.438-2.404 4.616-2.616 7H1.031c.158-1.279.895-2.372 1.61-3.433zm9.701-2.174c-.106.318-.507.607-.842.607H8.732c.441-.906.849-1.639 1.055-2h.223c.04.413.173.967.569 1.34a.5.5 0 10.686-.728c-.145-.137-.215-.384-.247-.613h1.789l-.464 1.393zM19 6h-.5a.5.5 0 00-.5.5v1a.5.5 0 01-.5.5H3.693c-.13-.35-.283-.68-.422-.978-.082-.175-.16-.344-.224-.497L3.809 5H7v1.5a.5.5 0 00.5.5h6a.5.5 0 00.5-.5V5h5v1z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M4.5 7a.498.498 0 01-.5-.5.498.498 0 01.5-.5.498.498 0 01.5.5.5.5 0 01-.5.5zM3.5 15a.498.498 0 01-.5-.5.498.498 0 01.5-.5.498.498 0 01.5.5.5.5 0 01-.5.5z"
  })));
}
LiniGun.propTypes = {
  size: PropTypes.number.isRequired
};