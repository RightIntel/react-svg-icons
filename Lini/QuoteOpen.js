function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from 'react';
import PropTypes from 'prop-types';
export default function LiniQuoteOpen({
  size,
  ...props
}) {
  let className = 'Component Lini LiniQuoteOpen';

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
    d: "M4.5 8c-.924 0-1.783.28-2.499.759A7.505 7.505 0 018.5 5a.5.5 0 000-1c-2.27 0-4.405.884-6.01 2.49S0 10.23 0 12.5C0 14.981 2.019 17 4.5 17S9 14.981 9 12.5 6.981 8 4.5 8zm0 8C2.57 16 1 14.43 1 12.5l.001-.09A3.505 3.505 0 014.5 9C6.43 9 8 10.57 8 12.5S6.43 16 4.5 16zM15.5 8c-.924 0-1.783.28-2.499.759A7.505 7.505 0 0119.5 5a.5.5 0 000-1c-2.27 0-4.405.884-6.01 2.49S11 10.23 11 12.5c0 2.481 2.019 4.5 4.5 4.5s4.5-2.019 4.5-4.5S17.981 8 15.5 8zm0 8c-1.93 0-3.5-1.57-3.5-3.5l.001-.09A3.505 3.505 0 0115.5 9c1.93 0 3.5 1.57 3.5 3.5S17.43 16 15.5 16z"
  })));
}
LiniQuoteOpen.propTypes = {
  size: PropTypes.number.isRequired
};