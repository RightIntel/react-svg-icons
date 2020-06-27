import React from 'react';
import PropTypes from 'prop-types';
export default function LiniMouse({
  size,
  ...props
}) {
  let className = 'Component Lini LiniMouse';

  if (props.className) {
    className += ' ' + props.className;
  }

  return /*#__PURE__*/React.createElement("span", Object.assign({}, props, {
    className: className
  }), /*#__PURE__*/React.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 20 20"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M19.496 5.029a.5.5 0 00-.638.305A2.504 2.504 0 0116.5 7.001c-1.365 0-2.294-1.299-2.507-2.582-.187-1.129-.69-2.192-1.417-2.994C11.731.493 10.667.001 9.5.001a4.506 4.506 0 00-4.474 4.021A5.507 5.507 0 000 9.501v5c0 3.033 2.467 5.5 5.5 5.5s5.5-2.467 5.5-5.5v-5a5.507 5.507 0 00-4.968-5.474A3.506 3.506 0 019.5 1.001c1.913 0 3.212 1.802 3.507 3.582.145.878.534 1.701 1.095 2.317.655.72 1.485 1.101 2.398 1.101a3.508 3.508 0 003.301-2.333.5.5 0 00-.305-.638zM5 5.028V9H1.028A4.507 4.507 0 015 5.028zM5.5 19A4.505 4.505 0 011 14.5V10h9v4.5c0 2.481-2.019 4.5-4.5 4.5zM9.972 9H6V5.028A4.507 4.507 0 019.972 9z"
  })));
}
LiniMouse.propTypes = {
  size: PropTypes.number.isRequired
};