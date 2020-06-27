function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from 'react';
import PropTypes from 'prop-types';
export default function LiniEllipsis({
  size,
  ...props
}) {
  let className = 'Component Lini LiniEllipsis';

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
    d: "M2.5 13C1.122 13 0 11.878 0 10.5S1.122 8 2.5 8 5 9.122 5 10.5 3.878 13 2.5 13zm0-4C1.673 9 1 9.673 1 10.5S1.673 12 2.5 12 4 11.327 4 10.5 3.327 9 2.5 9zM9.5 13C8.122 13 7 11.878 7 10.5S8.122 8 9.5 8 12 9.122 12 10.5 10.878 13 9.5 13zm0-4C8.673 9 8 9.673 8 10.5S8.673 12 9.5 12s1.5-.673 1.5-1.5S10.327 9 9.5 9zM16.5 13c-1.378 0-2.5-1.122-2.5-2.5S15.122 8 16.5 8 19 9.122 19 10.5 17.878 13 16.5 13zm0-4c-.827 0-1.5.673-1.5 1.5s.673 1.5 1.5 1.5 1.5-.673 1.5-1.5S17.327 9 16.5 9z"
  })));
}
LiniEllipsis.propTypes = {
  size: PropTypes.number.isRequired
};