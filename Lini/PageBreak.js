function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from 'react';
import PropTypes from 'prop-types';
export default function LiniPageBreak({
  size,
  ...props
}) {
  let className = 'Component Lini LiniPageBreak';

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
    d: "M17.5 9h-15C1.673 9 1 8.327 1 7.5v-6a.5.5 0 011 0v6a.5.5 0 00.5.5h15a.5.5 0 00.5-.5v-6a.5.5 0 011 0v6c0 .827-.673 1.5-1.5 1.5zM1.5 11h-1a.5.5 0 010-1h1a.5.5 0 010 1zM4.5 11h-1a.5.5 0 010-1h1a.5.5 0 010 1zM7.5 11h-1a.5.5 0 010-1h1a.5.5 0 010 1zM10.5 11h-1a.5.5 0 010-1h1a.5.5 0 010 1zM13.5 11h-1a.5.5 0 010-1h1a.5.5 0 010 1zM16.5 11h-1a.5.5 0 010-1h1a.5.5 0 010 1zM19.5 11h-1a.5.5 0 010-1h1a.5.5 0 010 1zM18.5 20a.5.5 0 01-.5-.5v-6a.5.5 0 00-.5-.5h-15a.5.5 0 00-.5.5v6a.5.5 0 01-1 0v-6c0-.827.673-1.5 1.5-1.5h15c.827 0 1.5.673 1.5 1.5v6a.5.5 0 01-.5.5z"
  })));
}
LiniPageBreak.propTypes = {
  size: PropTypes.number.isRequired
};