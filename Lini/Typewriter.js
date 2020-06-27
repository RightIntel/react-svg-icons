function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from 'react';
import PropTypes from 'prop-types';
export default function LiniTypewriter({
  size,
  ...props
}) {
  let className = 'Component Lini LiniTypewriter';

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
    d: "M17.5 7H17v-.5c0-.827-.673-1.5-1.5-1.5H15V1.5c0-.827-.673-1.5-1.5-1.5h-10C2.673 0 2 .673 2 1.5V5h-.5C.673 5 0 5.673 0 6.5v12c0 .827.673 1.5 1.5 1.5h14c.827 0 1.5-.673 1.5-1.5V11h.5c.827 0 1.5-.673 1.5-1.5v-1c0-.827-.673-1.5-1.5-1.5zm-6 3a.5.5 0 010 1h-6a.5.5 0 010-1 .5.5 0 000-1h-2a.5.5 0 01-.5-.5V8h11v.5a.5.5 0 01-.5.5h-2a.5.5 0 000 1zm-8-9h10a.5.5 0 01.5.5V7H3V1.5a.5.5 0 01.5-.5zM16 18.5a.5.5 0 01-.5.5h-14a.5.5 0 01-.5-.5v-12a.5.5 0 01.5-.5H2v2.5c0 .827.673 1.5 1.5 1.5h.586A1.502 1.502 0 005.5 12h6a1.502 1.502 0 001.414-2h.586c.827 0 1.5-.673 1.5-1.5V6h.5a.5.5 0 01.5.5v12zm2-9a.5.5 0 01-.5.5H17V8h.5a.5.5 0 01.5.5v1z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M3 13.5a.5.5 0 11-1 0 .5.5 0 011 0zM5 13.5a.5.5 0 11-1 0 .5.5 0 011 0zM7 13.5a.5.5 0 11-1 0 .5.5 0 011 0zM11 13.5a.5.5 0 11-1 0 .5.5 0 011 0zM13 13.5a.5.5 0 11-1 0 .5.5 0 011 0zM15 13.5a.5.5 0 11-1 0 .5.5 0 011 0zM4 15.5a.5.5 0 11-1 0 .5.5 0 011 0zM6 15.5a.5.5 0 11-1 0 .5.5 0 011 0zM10 15.5a.5.5 0 11-1 0 .5.5 0 011 0zM12 15.5a.5.5 0 11-1 0 .5.5 0 011 0zM14 15.5a.5.5 0 11-1 0 .5.5 0 011 0zM12.5 18h-8a.5.5 0 010-1h8a.5.5 0 010 1zM9 13.5a.5.5 0 11-1 0 .5.5 0 011 0zM8 15.5a.5.5 0 11-1 0 .5.5 0 011 0zM7.5 3h-3a.5.5 0 010-1h3a.5.5 0 010 1zM12.5 5h-8a.5.5 0 010-1h8a.5.5 0 010 1z"
  })));
}
LiniTypewriter.propTypes = {
  size: PropTypes.number.isRequired
};