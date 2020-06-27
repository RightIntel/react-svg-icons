function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from 'react';
import PropTypes from 'prop-types';
export default function LiniPageBreak2({
  size,
  ...props
}) {
  let className = 'Component Lini LiniPageBreak2';

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
    d: "M19.5 11a.5.5 0 01-.5-.5v-8a.5.5 0 00-.5-.5h-13a.5.5 0 00-.5.5v8a.5.5 0 01-1 0v-8C4 1.673 4.673 1 5.5 1h13c.827 0 1.5.673 1.5 1.5v8a.5.5 0 01-.5.5zM18.5 20h-13c-.827 0-1.5-.673-1.5-1.5v-4a.5.5 0 011 0v4a.5.5 0 00.5.5h13a.5.5 0 00.5-.5v-4a.5.5 0 011 0v4c0 .827-.673 1.5-1.5 1.5z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M14.5 5h-7a.5.5 0 010-1h7a.5.5 0 010 1zM16.5 7h-9a.5.5 0 010-1h9a.5.5 0 010 1zM16.5 9h-9a.5.5 0 010-1h9a.5.5 0 010 1zM16.5 15h-9a.5.5 0 010-1h9a.5.5 0 010 1zM14.5 17h-7a.5.5 0 010-1h7a.5.5 0 010 1zM12.5 11h-5a.5.5 0 010-1h5a.5.5 0 010 1zM18.5 13h-1a.5.5 0 010-1h1a.5.5 0 010 1zM15.5 13h-1a.5.5 0 010-1h1a.5.5 0 010 1zM12.5 13h-1a.5.5 0 010-1h1a.5.5 0 010 1zM9.5 13h-1a.5.5 0 010-1h1a.5.5 0 010 1zM6.5 13h-1a.5.5 0 010-1h1a.5.5 0 010 1zM1 15a.5.5 0 01-.354-.853l1.646-1.646-1.646-1.646a.5.5 0 01.707-.707l2 2a.5.5 0 010 .707l-2 2a.498.498 0 01-.354.146z"
  })));
}
LiniPageBreak2.propTypes = {
  size: PropTypes.number.isRequired
};