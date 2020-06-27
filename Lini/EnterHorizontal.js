function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from 'react';
import PropTypes from 'prop-types';
export default function LiniEnterHorizontal({
  size,
  ...props
}) {
  let className = 'Component Lini LiniEnterHorizontal';

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
    d: "M8 18.5v-5a.5.5 0 011 0v5a.5.5 0 00.5.5h1a.5.5 0 00.5-.5v-5a.5.5 0 011 0v5c0 .827-.673 1.5-1.5 1.5h-1c-.827 0-1.5-.673-1.5-1.5zM8 7.5v-5C8 1.673 8.673 1 9.5 1h1c.827 0 1.5.673 1.5 1.5v5a.5.5 0 01-1 0v-5a.5.5 0 00-.5-.5h-1a.5.5 0 00-.5.5v5a.5.5 0 01-1 0zM14.354 13.854a.5.5 0 000-.707l-2.146-2.146h7.293a.5.5 0 000-1h-7.293l2.146-2.146a.5.5 0 00-.707-.707l-3 3a.498.498 0 000 .708l3 3a.5.5 0 00.707 0zM6.354 13.854l3-3a.5.5 0 000-.707l-3-3a.5.5 0 00-.707.707L7.793 10H.5a.5.5 0 000 1h7.293l-2.146 2.146a.498.498 0 000 .708.5.5 0 00.707 0z"
  })));
}
LiniEnterHorizontal.propTypes = {
  size: PropTypes.number.isRequired
};