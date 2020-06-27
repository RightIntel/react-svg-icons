function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from 'react';
import PropTypes from 'prop-types';
export default function LiniFactory2({
  size,
  ...props
}) {
  let className = 'Component Lini LiniFactory2';

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
    d: "M18.5 20h-17a1.416 1.416 0 01-1.422-1.535L.924 7.462A.5.5 0 011.423 7H3.5a.5.5 0 01.496.438l.905 7.238 4.342-2.605a.5.5 0 01.758.429v2.117l4.243-2.546a.5.5 0 01.758.429v2.117l4.243-2.546a.5.5 0 01.758.429v6c0 .827-.673 1.5-1.5 1.5zM1.886 8l-.811 10.541c-.01.125.029.241.108.326S1.375 19 1.5 19h17a.5.5 0 00.5-.5v-5.117l-4.243 2.546a.5.5 0 01-.758-.429v-2.117l-4.243 2.546a.5.5 0 01-.758-.429v-2.117l-4.243 2.546a.5.5 0 01-.753-.367L3.057 8H1.884zM2.5 6a.5.5 0 01-.5-.5C2 2.467 4.467 0 7.5 0c1.201 0 2.343.38 3.301 1.1a.5.5 0 11-.601.799 4.457 4.457 0 00-2.7-.9 4.505 4.505 0 00-4.5 4.5.5.5 0 01-.5.5zM15.5 5a5.453 5.453 0 01-3.301-1.1.5.5 0 11.601-.799c.783.589 1.717.9 2.7.9a4.469 4.469 0 003.592-1.789.5.5 0 11.797.603 5.54 5.54 0 01-1.898 1.59A5.44 5.44 0 0115.5 5z"
  })));
}
LiniFactory2.propTypes = {
  size: PropTypes.number.isRequired
};