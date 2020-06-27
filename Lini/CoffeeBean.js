function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from 'react';
import PropTypes from 'prop-types';
export default function LiniCoffeeBean({
  size,
  ...props
}) {
  let className = 'Component Lini LiniCoffeeBean';

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
    d: "M15.091 2.705a6.41 6.41 0 00-2.38-2.014C11.769.232 10.688 0 9.5 0S7.232.232 6.289.691a6.41 6.41 0 00-2.38 2.014C2.642 4.438 2 6.893 2 10s.642 5.562 1.909 7.295a6.41 6.41 0 002.38 2.014c.942.459 2.023.691 3.211.691s2.268-.232 3.211-.691a6.41 6.41 0 002.38-2.014C16.358 15.562 17 13.107 17 10s-.642-5.562-1.909-7.295zm-10.375 14C3.593 15.169 3 12.85 3 10s.593-5.169 1.716-6.705c1.02-1.396 2.459-2.161 4.28-2.279C8.335 1.944 8 3.45 8 5.5c0 2.096.526 3.413 1.036 4.686.496 1.24.964 2.411.964 4.314 0 3.971-1.302 4.394-1.495 4.435-1.59-.214-2.862-.962-3.789-2.23zm9.568 0c-1.02 1.396-2.459 2.161-4.28 2.279.661-.928.996-2.434.996-4.484 0-2.096-.527-3.413-1.036-4.686C9.468 8.574 9 7.403 9 5.5c0-3.97 1.301-4.394 1.495-4.435 1.59.214 2.862.962 3.789 2.23C15.407 4.831 16 7.15 16 10s-.593 5.169-1.716 6.705z"
  })));
}
LiniCoffeeBean.propTypes = {
  size: PropTypes.number.isRequired
};