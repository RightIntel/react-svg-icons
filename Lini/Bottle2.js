function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from 'react';
import PropTypes from 'prop-types';
export default function LiniBottle2({
  size,
  ...props
}) {
  let className = 'Component Lini LiniBottle2';

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
    d: "M11 8.05V3c.551 0 1-.449 1-1V1c0-.551-.449-1-1-1H8c-.551 0-1 .449-1 1v1c0 .551.449 1 1 1v5.05c-1.14.232-2 1.242-2 2.45v8c0 .827.673 1.5 1.5 1.5h4c.827 0 1.5-.673 1.5-1.5v-8c0-1.207-.86-2.217-2-2.45zM8 1h3v1H8V1zm4 17.5a.5.5 0 01-.5.5h-4a.5.5 0 01-.5-.5v-8C7 9.673 7.673 9 8.5 9a.5.5 0 00.5-.5V3h1v5.5a.5.5 0 00.5.5c.827 0 1.5.673 1.5 1.5v8z"
  })));
}
LiniBottle2.propTypes = {
  size: PropTypes.number.isRequired
};