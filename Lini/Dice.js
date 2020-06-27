function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from 'react';
import PropTypes from 'prop-types';
export default function LiniDice({
  size,
  ...props
}) {
  let className = 'Component Lini LiniDice';

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
    d: "M5.5 16c-.827 0-1.5-.673-1.5-1.5S4.673 13 5.5 13s1.5.673 1.5 1.5S6.327 16 5.5 16zm0-2a.5.5 0 100 1 .5.5 0 000-1zM5.5 12c-.827 0-1.5-.673-1.5-1.5S4.673 9 5.5 9 7 9.673 7 10.5 6.327 12 5.5 12zm0-2a.5.5 0 100 1 .5.5 0 000-1zM5.5 8C4.673 8 4 7.327 4 6.5S4.673 5 5.5 5 7 5.673 7 6.5 6.327 8 5.5 8zm0-2a.5.5 0 100 1 .5.5 0 000-1zM13.5 8c-.827 0-1.5-.673-1.5-1.5S12.673 5 13.5 5s1.5.673 1.5 1.5S14.327 8 13.5 8zm0-2a.5.5 0 100 1 .5.5 0 000-1zM13.5 12c-.827 0-1.5-.673-1.5-1.5S12.673 9 13.5 9s1.5.673 1.5 1.5-.673 1.5-1.5 1.5zm0-2a.5.5 0 100 1 .5.5 0 000-1zM13.5 16c-.827 0-1.5-.673-1.5-1.5s.673-1.5 1.5-1.5 1.5.673 1.5 1.5-.673 1.5-1.5 1.5zm0-2a.5.5 0 100 1 .5.5 0 000-1z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M15.5 19h-12A2.503 2.503 0 011 16.5v-12C1 3.122 2.122 2 3.5 2h12C16.878 2 18 3.122 18 4.5v12c0 1.378-1.122 2.5-2.5 2.5zM3.5 3C2.673 3 2 3.673 2 4.5v12c0 .827.673 1.5 1.5 1.5h12c.827 0 1.5-.673 1.5-1.5v-12c0-.827-.673-1.5-1.5-1.5h-12z"
  })));
}
LiniDice.propTypes = {
  size: PropTypes.number.isRequired
};