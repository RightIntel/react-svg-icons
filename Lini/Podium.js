function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from 'react';
import PropTypes from 'prop-types';
export default function LiniPodium({
  size,
  ...props
}) {
  let className = 'Component Lini LiniPodium';

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
    d: "M18.5 8H13V3.5a.5.5 0 00-.5-.5h-6a.5.5 0 00-.5.5V6H.5a.5.5 0 00-.5.5v10a.5.5 0 00.5.5h18a.5.5 0 00.5-.5v-8a.5.5 0 00-.5-.5zM7 4h5v12H7V4zM1 7h5v9H1V7zm17 9h-5V9h5v7z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M9.5 10a.5.5 0 01-.5-.5v-4a.5.5 0 011 0v4a.5.5 0 01-.5.5zM4.5 13h-2a.5.5 0 01-.5-.5v-2a.5.5 0 01.5-.5H4V9H2.5a.5.5 0 010-1h2a.5.5 0 01.5.5v2a.5.5 0 01-.5.5H3v1h1.5a.5.5 0 010 1zM16.5 10h-2a.5.5 0 000 1H16v1h-1.5a.5.5 0 000 1H16v1h-1.5a.5.5 0 000 1h2a.5.5 0 00.5-.5v-4a.5.5 0 00-.5-.5z"
  })));
}
LiniPodium.propTypes = {
  size: PropTypes.number.isRequired
};