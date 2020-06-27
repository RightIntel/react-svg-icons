function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from 'react';
import PropTypes from 'prop-types';
export default function LiniPaperPlane({
  size,
  ...props
}) {
  let className = 'Component Lini LiniPaperPlane';

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
    d: "M19.833 1.127a.499.499 0 00-.527-.088l-19 8a.5.5 0 00.036.935L6 11.86v5.64a.5.5 0 00.888.315l2.763-3.401 4.497 4.441a.497.497 0 00.476.128.501.501 0 00.355-.343l5-17a.5.5 0 00-.147-.514zM16.13 3.461l-9.724 7.48-4.488-1.496L16.13 3.461zM7 11.746l9.415-7.242-7.194 8.854-.001.001L7 16.092v-4.346zm7.256 5.811l-3.972-3.922 8.033-9.887-4.061 13.808z"
  })));
}
LiniPaperPlane.propTypes = {
  size: PropTypes.number.isRequired
};