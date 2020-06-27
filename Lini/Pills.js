function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from 'react';
import PropTypes from 'prop-types';
export default function LiniPills({
  size,
  ...props
}) {
  let className = 'Component Lini LiniPills';

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
    d: "M18.293 11.95c-1.021-.613-2.368-.95-3.793-.95s-2.772.337-3.793.95C9.606 12.611 9 13.516 9 14.5v2c0 .984.606 1.89 1.707 2.55 1.021.613 2.368.95 3.793.95s2.772-.337 3.793-.95C19.394 18.389 20 17.484 20 16.5v-2c0-.984-.606-1.89-1.707-2.55zM14.5 12c2.439 0 4.5 1.145 4.5 2.5S16.939 17 14.5 17 10 15.855 10 14.5s2.061-2.5 4.5-2.5zm0 7c-2.419 0-4.466-1.126-4.499-2.467.206.185.442.358.706.517 1.021.613 2.368.95 3.793.95s2.772-.337 3.793-.95c.265-.159.5-.332.706-.517C18.966 17.874 16.919 19 14.5 19z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M13.5 16a.5.5 0 01-.354-.853l2-2a.5.5 0 01.707.707l-2 2a.498.498 0 01-.354.146zM12.975 1.025C12.314.364 11.435 0 10.5 0S8.686.364 8.025 1.025l-7 7C.364 8.686 0 9.565 0 10.5s.364 1.814 1.025 2.475C1.686 13.636 2.565 14 3.5 14s1.814-.364 2.475-1.025l7-7a3.504 3.504 0 000-4.95zM5.268 12.268c-.472.472-1.1.732-1.768.732s-1.296-.26-1.768-.732S1 11.168 1 10.5s.26-1.296.732-1.768l3.646-3.646a4.52 4.52 0 013.536 3.536l-3.646 3.646zm7-7L9.734 7.802c-.265-.821-.721-1.567-1.345-2.191s-1.37-1.08-2.191-1.344l2.534-2.534c.472-.472 1.1-.732 1.768-.732s1.296.26 1.768.732a2.503 2.503 0 010 3.536z"
  })));
}
LiniPills.propTypes = {
  size: PropTypes.number.isRequired
};