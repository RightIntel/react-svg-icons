function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from 'react';
import PropTypes from 'prop-types';
export default function LiniTransform({
  size,
  ...props
}) {
  let className = 'Component Lini LiniTransform';

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
    d: "M18.5 4a.5.5 0 00.5-.5v-2a.5.5 0 00-.5-.5h-2a.5.5 0 00-.5.5V2h-5v-.5a.5.5 0 00-.5-.5h-2a.5.5 0 00-.5.5V2H3v-.5a.5.5 0 00-.5-.5h-2a.5.5 0 00-.5.5v2a.5.5 0 00.5.5H1v5H.5a.5.5 0 00-.5.5v2a.5.5 0 00.5.5H1v5H.5a.5.5 0 00-.5.5v2a.5.5 0 00.5.5h2a.5.5 0 00.5-.5V19h5v.5a.5.5 0 00.5.5h2a.5.5 0 00.5-.5V19h5v.5a.5.5 0 00.5.5h2a.5.5 0 00.5-.5v-2a.5.5 0 00-.5-.5H18v-5h.5a.5.5 0 00.5-.5v-2a.5.5 0 00-.5-.5H18V4h.5zM17 2h1v1h-1V2zM9 2h1v1H9V2zM1 2h1v1H1V2zm0 8h1v1H1v-1zm1 9H1v-1h1v1zm8 0H9v-1h1v1zm8 0h-1v-1h1v1zm0-8h-1v-1h1v1zm-1-2h-.5a.5.5 0 00-.5.5v2a.5.5 0 00.5.5h.5v5h-.5a.5.5 0 00-.5.5v.5h-5v-.5a.5.5 0 00-.5-.5h-2a.5.5 0 00-.5.5v.5H3v-.5a.5.5 0 00-.5-.5H2v-5h.5a.5.5 0 00.5-.5v-2a.5.5 0 00-.5-.5H2V4h.5a.5.5 0 00.5-.5V3h5v.5a.5.5 0 00.5.5h2a.5.5 0 00.5-.5V3h5v.5a.5.5 0 00.5.5h.5v5z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M11.5 10H10V8.5a.5.5 0 00-1 0V10H7.5a.5.5 0 000 1H9v1.5a.5.5 0 001 0V11h1.5a.5.5 0 000-1z"
  })));
}
LiniTransform.propTypes = {
  size: PropTypes.number.isRequired
};