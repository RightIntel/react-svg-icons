function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from 'react';
import PropTypes from 'prop-types';
export default function LiniExitRight2({
  size,
  ...props
}) {
  let className = 'Component Lini LiniExitRight2';

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
    d: "M1 18.5v-16C1 1.673 1.673 1 2.5 1h1C4.327 1 5 1.673 5 2.5v6a.5.5 0 01-1 0v-6a.5.5 0 00-.5-.5h-1a.5.5 0 00-.5.5v16a.5.5 0 00.5.5h1a.5.5 0 00.5-.5v-6a.5.5 0 011 0v6c0 .827-.673 1.5-1.5 1.5h-1c-.827 0-1.5-.673-1.5-1.5z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M13.646 15.854a.5.5 0 010-.707l4.146-4.146H3.499a.5.5 0 010-1h14.293l-4.146-4.146a.5.5 0 01.707-.707l5 5a.498.498 0 010 .708l-5 5a.5.5 0 01-.707 0z"
  })));
}
LiniExitRight2.propTypes = {
  size: PropTypes.number.isRequired
};