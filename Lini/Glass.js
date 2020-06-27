function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from 'react';
import PropTypes from 'prop-types';
export default function LiniGlass({
  size,
  ...props
}) {
  let className = 'Component Lini LiniGlass';

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
    d: "M15.934.252A.5.5 0 0015.5 0h-12a.5.5 0 00-.434.252c-.67 1.173-1.01 2.315-1.01 3.394 0 .955.267 1.889.792 2.776.94 1.585 2.517 2.768 3.908 3.812C7.859 11.062 9 11.917 9 12.501v5c0 .813-.458 1.5-1 1.5H6.5a.5.5 0 000 1h6a.5.5 0 000-1H11c-.542 0-1-.687-1-1.5v-5c0-.583 1.141-1.439 2.244-2.267 1.391-1.044 2.968-2.226 3.908-3.812.526-.887.792-1.821.792-2.776 0-1.079-.34-2.221-1.01-3.394zm-.642 5.66c-.838 1.415-2.331 2.534-3.648 3.522-.89.667-1.667 1.25-2.144 1.845-.477-.595-1.255-1.178-2.144-1.845-1.317-.988-2.809-2.107-3.648-3.522-.892-1.505-.864-3.114.088-4.912h11.409c.951 1.798.979 3.407.088 4.912z"
  })));
}
LiniGlass.propTypes = {
  size: PropTypes.number.isRequired
};