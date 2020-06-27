function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from 'react';
import PropTypes from 'prop-types';
export default function LiniIndentDecrease({
  size,
  ...props
}) {
  let className = 'Component Lini LiniIndentDecrease';

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
    d: "M17.5 5h-15a.5.5 0 010-1h15a.5.5 0 010 1zM17.5 8h-8a.5.5 0 010-1h8a.5.5 0 010 1zM17.5 11h-8a.5.5 0 010-1h8a.5.5 0 010 1zM17.5 14h-8a.5.5 0 010-1h8a.5.5 0 010 1zM17.5 17h-15a.5.5 0 010-1h15a.5.5 0 010 1zM6.5 14a.5.5 0 01-.3-.1l-4-3a.5.5 0 010-.8l4-3a.5.5 0 01.8.4v6a.5.5 0 01-.5.5zm-3.167-3.5L6 12.5v-4l-2.667 2z"
  })));
}
LiniIndentDecrease.propTypes = {
  size: PropTypes.number.isRequired
};