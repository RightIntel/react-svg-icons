function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from 'react';
import PropTypes from 'prop-types';
export default function LiniCommunication({
  size,
  ...props
}) {
  let className = 'Component Lini LiniCommunication';

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
    d: "M4.328 12.828a.5.5 0 01-.354-.853c.661-.661 1.025-1.54 1.025-2.475s-.364-1.814-1.025-2.475a.5.5 0 01.707-.707c.85.85 1.318 1.98 1.318 3.182s-.468 2.332-1.318 3.182a.498.498 0 01-.354.146z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M6.45 14.95a.5.5 0 01-.354-.853C7.324 12.869 8 11.237 8 9.501s-.676-3.369-1.904-4.596a.5.5 0 01.707-.707C8.22 5.615 9 7.498 9 9.501s-.78 3.887-2.197 5.303a.498.498 0 01-.354.146zM15.672 12.828a.502.502 0 01-.354-.146C14.468 11.832 14 10.702 14 9.5s.468-2.332 1.318-3.182a.5.5 0 01.707.707C15.364 7.686 15 8.565 15 9.5s.364 1.814 1.025 2.475a.5.5 0 01-.354.853z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M13.55 14.95a.502.502 0 01-.354-.146c-1.417-1.417-2.197-3.3-2.197-5.303s.78-3.887 2.197-5.303a.5.5 0 01.707.707c-1.228 1.228-1.904 2.86-1.904 4.596s.676 3.368 1.904 4.596a.5.5 0 01-.354.853zM1.5 11C.673 11 0 10.327 0 9.5S.673 8 1.5 8 3 8.673 3 9.5 2.327 11 1.5 11zm0-2a.5.5 0 100 1 .5.5 0 000-1zM18.5 11c-.827 0-1.5-.673-1.5-1.5S17.673 8 18.5 8s1.5.673 1.5 1.5-.673 1.5-1.5 1.5zm0-2a.5.5 0 100 1 .5.5 0 000-1z"
  })));
}
LiniCommunication.propTypes = {
  size: PropTypes.number.isRequired
};