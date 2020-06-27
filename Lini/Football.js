function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from 'react';
import PropTypes from 'prop-types';
export default function LiniFootball({
  size,
  ...props
}) {
  let className = 'Component Lini LiniFootball';

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
    d: "M19.147 3.439c-.06-.06-1.517-1.479-4.818-1.479-1.661 0-3.51.36-5.496 1.069-2.005.716-3.718 1.763-5.091 3.112a12.387 12.387 0 00-2.629 3.791c-1.095 2.44-1.11 4.482-1.11 4.567-.001.71.421 1.574.981 2.009.079.062 1.981 1.511 5.414 1.511 1.69 0 3.467-.354 5.282-1.053 1.888-.727 3.502-1.781 4.796-3.134a12.528 12.528 0 002.475-3.788c1.03-2.431 1.048-4.458 1.048-4.543.002-.689-.364-1.575-.851-2.062zm-1.134 6.252c-1.279 2.992-3.531 5.126-6.694 6.342-1.7.654-3.357.986-4.923.986-3.068 0-4.784-1.288-4.8-1.3a1.506 1.506 0 01-.35-.429c.623-.861 2.064-2.612 4.544-4.385a.5.5 0 10-.582-.814c-1.988 1.421-3.345 2.838-4.168 3.834.078-.73.307-2.077.983-3.584C3.377 7.323 5.78 5.18 9.167 3.97c1.878-.671 3.614-1.011 5.16-1.011 1.495 0 2.535.324 3.144.596.47.21.763.422.892.526-.848.112-2.157.366-4.011.937a.5.5 0 00.294.956c2.195-.676 3.582-.885 4.27-.948.05.168.08.333.08.471 0 .019-.022 1.941-.984 4.193z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M7.5 10.999a.5.5 0 01-.5-.5c0-.828-.673-1.501-1.501-1.501a.5.5 0 010-1A2.504 2.504 0 018 10.499a.5.5 0 01-.5.5zM9.5 9.999a.5.5 0 01-.5-.5c0-.828-.673-1.501-1.501-1.501a.5.5 0 010-1A2.504 2.504 0 0110 9.499a.5.5 0 01-.5.5zM11.5 8.999a.5.5 0 01-.5-.5c0-.828-.673-1.501-1.501-1.501a.5.5 0 010-1A2.504 2.504 0 0112 8.499a.5.5 0 01-.5.5zM13.5 7.999a.5.5 0 01-.5-.5c0-.828-.673-1.501-1.501-1.501a.5.5 0 010-1A2.504 2.504 0 0114 7.499a.5.5 0 01-.5.5z"
  })));
}
LiniFootball.propTypes = {
  size: PropTypes.number.isRequired
};