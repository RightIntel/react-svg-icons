function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from 'react';
import PropTypes from 'prop-types';
export default function LiniPrinter({
  size,
  ...props
}) {
  let className = 'Component Lini LiniPrinter';

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
    d: "M18.5 4H17V1.5c0-.827-.673-1.5-1.5-1.5h-11C3.673 0 3 .673 3 1.5V4H1.5C.673 4 0 4.673 0 5.5v9c0 .827.673 1.5 1.5 1.5H3v2.5c0 .827.673 1.5 1.5 1.5h11c.827 0 1.5-.673 1.5-1.5V16h1.5c.827 0 1.5-.673 1.5-1.5v-9c0-.827-.673-1.5-1.5-1.5zM4 1.5a.5.5 0 01.5-.5h11a.5.5 0 01.5.5V4H4V1.5zM15.5 19h-11a.5.5 0 01-.5-.5V12h12v6.5a.5.5 0 01-.5.5zm3.5-4.5a.5.5 0 01-.5.5H17v-3h.5a.5.5 0 000-1h-15a.5.5 0 000 1H3v3H1.5a.5.5 0 01-.5-.5v-9a.5.5 0 01.5-.5h17a.5.5 0 01.5.5v9z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M14.5 14h-9a.5.5 0 010-1h9a.5.5 0 010 1zM14.5 16h-9a.5.5 0 010-1h9a.5.5 0 010 1zM14.5 18h-9a.5.5 0 010-1h9a.5.5 0 010 1zM16.5 9c-.827 0-1.5-.673-1.5-1.5S15.673 6 16.5 6s1.5.673 1.5 1.5S17.327 9 16.5 9zm0-2a.5.5 0 100 1 .5.5 0 000-1z"
  })));
}
LiniPrinter.propTypes = {
  size: PropTypes.number.isRequired
};