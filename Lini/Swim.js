function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from 'react';
import PropTypes from 'prop-types';
export default function LiniSwim({
  size,
  ...props
}) {
  let className = 'Component Lini LiniSwim';

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
    d: "M13 9c-1.103 0-2-.897-2-2s.897-2 2-2 2 .897 2 2-.897 2-2 2zm0-3c-.551 0-1 .449-1 1s.449 1 1 1 1-.449 1-1-.449-1-1-1zM5.5 9a.5.5 0 01-.278-.916l3-2a.5.5 0 01.677.116l1.5 2a.5.5 0 11-.8.6L8.383 7.178 5.777 8.916A.497.497 0 015.5 9zM17.5 13a.501.501 0 01-.4-.199C17.086 12.783 15.708 11 13.499 11c-1.144 0-2.19.465-3.297.957C9.048 12.47 7.855 13 6.499 13c-2.719 0-4.333-2.11-4.4-2.2a.5.5 0 11.8-.6c.013.017 1.391 1.8 3.6 1.8 1.144 0 2.19-.465 3.297-.957C10.95 10.53 12.143 10 13.499 10c2.719 0 4.333 2.11 4.4 2.2a.5.5 0 01-.4.8z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M17.5 16a.501.501 0 01-.4-.199C17.086 15.783 15.708 14 13.499 14c-1.144 0-2.19.465-3.297.957C9.048 15.47 7.855 16 6.499 16c-2.719 0-4.333-2.11-4.4-2.2a.5.5 0 11.8-.6c.013.017 1.391 1.8 3.6 1.8 1.144 0 2.19-.465 3.297-.957C10.95 13.53 12.143 13 13.499 13c2.719 0 4.333 2.11 4.4 2.2a.5.5 0 01-.4.8z"
  })));
}
LiniSwim.propTypes = {
  size: PropTypes.number.isRequired
};