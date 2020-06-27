function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from 'react';
import PropTypes from 'prop-types';
export default function LiniMicroscope({
  size,
  ...props
}) {
  let className = 'Component Lini LiniMicroscope';

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
    d: "M18.5 13h-7a.5.5 0 000 1h1.244A4.516 4.516 0 018.5 17 4.505 4.505 0 014 12.5a4.483 4.483 0 013.841-4.452l2.099 2.099c.283.283.659.438 1.061.438s.778-.156 1.061-.438l.586-.586a1.501 1.501 0 000-2.121L7.062 1.854a1.488 1.488 0 00-1.061-.438c-.116 0-.229.013-.339.038L4.355.147a.5.5 0 00-.707 0l-1 1a.5.5 0 000 .707l1.307 1.307a1.494 1.494 0 00.4 1.4l.338.338a8.501 8.501 0 00-3.185 2.768A8.45 8.45 0 00.001 12.5 8.509 8.509 0 003.024 19H1.501a.5.5 0 000 1H15.5a.5.5 0 000-1h-1.524a8.523 8.523 0 002.891-5h1.632a.5.5 0 000-1zM6.354 2.561l5.586 5.586a.5.5 0 010 .707l-.586.586c-.094.094-.219.145-.354.145s-.26-.052-.354-.145l-4.73-4.73-.004-.004-.852-.852c-.094-.094-.145-.219-.145-.354s.052-.26.145-.354l.586-.586c.094-.094.219-.145.354-.145s.26.052.354.145zM4 1.207L4.793 2l-.293.293-.793-.793L4 1.207zM12.242 19H4.755a7.51 7.51 0 01-3.756-6.5 7.46 7.46 0 014.442-6.851l1.558 1.558a5.494 5.494 0 00-2.571 1.594 5.49 5.49 0 00-1.429 3.698c0 3.033 2.467 5.5 5.5 5.5a5.508 5.508 0 005.292-4h2.057a7.53 7.53 0 01-3.606 5z"
  })));
}
LiniMicroscope.propTypes = {
  size: PropTypes.number.isRequired
};