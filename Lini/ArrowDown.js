function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from 'react';
import PropTypes from 'prop-types';
export default function LiniArrowDown({
  size,
  ...props
}) {
  let className = 'Component Lini LiniArrowDown';

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
    d: "M9.854 19.354l6-6a.5.5 0 00-.707-.707l-5.146 5.146V1.5a.5.5 0 00-1 0v16.293l-5.146-5.146a.5.5 0 00-.707.708l6 6a.5.5 0 00.707 0z"
  })));
}
LiniArrowDown.propTypes = {
  size: PropTypes.number.isRequired
};