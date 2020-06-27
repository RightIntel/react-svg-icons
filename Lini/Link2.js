function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from 'react';
import PropTypes from 'prop-types';
export default function LiniLink2({
  size,
  ...props
}) {
  let className = 'Component Lini LiniLink2';

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
    d: "M10.682 12.998a3.671 3.671 0 01-2.604-1.077.5.5 0 01.707-.707 2.685 2.685 0 003.793 0l3.636-3.636c1.046-1.046 1.046-2.747 0-3.793s-2.747-1.046-3.793 0L9.353 6.853a.5.5 0 01-.707-.707l3.068-3.068c1.436-1.436 3.772-1.436 5.207 0s1.436 3.772 0 5.207l-3.636 3.636a3.671 3.671 0 01-2.604 1.077z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M4.682 18.998a3.671 3.671 0 01-2.604-1.077 3.685 3.685 0 010-5.207l3.636-3.636a3.685 3.685 0 015.207 0 .5.5 0 01-.707.707 2.685 2.685 0 00-3.793 0l-3.636 3.636c-1.046 1.046-1.046 2.747 0 3.793s2.747 1.046 3.793 0l3.068-3.068a.5.5 0 01.707.707l-3.068 3.068a3.671 3.671 0 01-2.604 1.077z"
  })));
}
LiniLink2.propTypes = {
  size: PropTypes.number.isRequired
};