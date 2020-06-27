function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from 'react';
import PropTypes from 'prop-types';
export default function LiniChip({
  size,
  ...props
}) {
  let className = 'Component Lini LiniChip';

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
    d: "M18.5 10a.5.5 0 000-1H17V8h1.5a.5.5 0 000-1H17V5.5a.504.504 0 00-.146-.354l-2-2A.5.5 0 0014.5 3H13V1.5a.5.5 0 00-1 0V3h-1V1.5a.5.5 0 00-1 0V3H9V1.5a.5.5 0 00-1 0V3H7V1.5a.5.5 0 00-1 0V3H4.5a.504.504 0 00-.354.146l-2 2A.5.5 0 002 5.5V7H.5a.5.5 0 000 1H2v1H.5a.5.5 0 000 1H2v1H.5a.5.5 0 000 1H2v1H.5a.5.5 0 000 1H2v1.5c0 .133.053.26.146.354l2 2A.5.5 0 004.5 18H6v1.5a.5.5 0 001 0V18h1v1.5a.5.5 0 001 0V18h1v1.5a.5.5 0 001 0V18h1v1.5a.5.5 0 001 0V18h1.5c.133 0 .26-.053.354-.146l2-2A.5.5 0 0017 15.5V14h1.5a.5.5 0 000-1H17v-1h1.5a.5.5 0 000-1H17v-1h1.5zM16 15.293L14.293 17H4.707L3 15.293V5.707L4.707 4h9.586L16 5.707v9.586z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M5.5 16c-.827 0-1.5-.673-1.5-1.5S4.673 13 5.5 13s1.5.673 1.5 1.5S6.327 16 5.5 16zm0-2a.5.5 0 100 1 .5.5 0 000-1z"
  })));
}
LiniChip.propTypes = {
  size: PropTypes.number.isRequired
};