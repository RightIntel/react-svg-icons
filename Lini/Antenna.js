function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from 'react';
import PropTypes from 'prop-types';
export default function LiniAntenna({
  size,
  ...props
}) {
  let className = 'Component Lini LiniAntenna';

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
    d: "M12.328 9.828a.5.5 0 01-.354-.853c.661-.661 1.025-1.54 1.025-2.475s-.364-1.814-1.025-2.475a.5.5 0 01.707-.707c.85.85 1.318 1.98 1.318 3.182s-.468 2.332-1.318 3.182a.498.498 0 01-.354.146z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M14.45 11.95a.5.5 0 01-.354-.853C15.324 9.869 16 8.237 16 6.501s-.676-3.369-1.904-4.596a.5.5 0 01.707-.707C16.22 2.615 17 4.498 17 6.501s-.78 3.887-2.197 5.303a.498.498 0 01-.354.146zM6.672 9.828a.502.502 0 01-.354-.146C5.468 8.832 5 7.702 5 6.5s.468-2.332 1.318-3.182a.5.5 0 01.707.707C6.364 4.686 6 5.565 6 6.5s.364 1.814 1.025 2.475a.5.5 0 01-.354.853z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M4.55 11.95a.502.502 0 01-.354-.146c-1.417-1.417-2.197-3.3-2.197-5.303s.78-3.887 2.197-5.303a.5.5 0 01.707.707c-1.228 1.228-1.904 2.86-1.904 4.596s.676 3.368 1.904 4.596a.5.5 0 01-.354.853zM11 6.5c0-.827-.673-1.5-1.5-1.5S8 5.673 8 6.5c0 .652.418 1.208 1 1.414V18.5a.5.5 0 001 0V7.914c.582-.206 1-.762 1-1.414zM9.5 7a.5.5 0 110-1 .5.5 0 010 1z"
  })));
}
LiniAntenna.propTypes = {
  size: PropTypes.number.isRequired
};