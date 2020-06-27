function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from 'react';
import PropTypes from 'prop-types';
export default function LiniWallet({
  size,
  ...props
}) {
  let className = 'Component Lini LiniWallet';

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
    d: "M17.5 9H17V6.5c0-.827-.673-1.5-1.5-1.5H13V.5a.5.5 0 00-.5-.5h-10a.5.5 0 00-.5.5v4.55C.86 5.282 0 6.292 0 7.5v11c0 .827.673 1.5 1.5 1.5h16c.827 0 1.5-.673 1.5-1.5v-8c0-.827-.673-1.5-1.5-1.5zM3 1h9v6H3V1zM2 6.086V7.5a.5.5 0 00.5.5h12a.5.5 0 000-1H13V6h2.5a.5.5 0 01.5.5V9H2.5C1.673 9 1 8.327 1 7.5c0-.652.418-1.208 1-1.414zM18 18.5a.5.5 0 01-.5.5h-16a.5.5 0 01-.5-.5V9.499c.418.315.938.501 1.5.501h15a.5.5 0 01.5.5v8z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M10.5 3H10v-.5a.5.5 0 00-.5-.5h-2a.5.5 0 00-.5.5V4H6V2.5a.5.5 0 00-1 0V3h-.5a.5.5 0 000 1H5v.5a.5.5 0 00.5.5h2a.5.5 0 00.5-.5V3h1v1.5a.5.5 0 001 0V4h.5a.5.5 0 000-1zM16.5 18h-4a.5.5 0 010-1h4a.5.5 0 010 1z"
  })));
}
LiniWallet.propTypes = {
  size: PropTypes.number.isRequired
};