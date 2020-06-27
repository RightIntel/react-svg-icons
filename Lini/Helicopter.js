function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from 'react';
import PropTypes from 'prop-types';
export default function LiniHelicopter({
  size,
  ...props
}) {
  let className = 'Component Lini LiniHelicopter';

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
    d: "M20 9.5c0-.652-.418-1.208-1-1.414V6.5a.5.5 0 00-1 0v1.586c-.582.206-1 .762-1 1.414s.418 1.208 1 1.414V12.5a.5.5 0 001 0v-1.586c.582-.206 1-.762 1-1.414zm-1.5.5a.5.5 0 110-1 .5.5 0 010 1zM16.975 10.843a.5.5 0 00-.631-.318l-5.343 1.762V9.999h5a.5.5 0 000-1h-5.05a2.504 2.504 0 00-2.45-2h-.5v-1h6.5a.5.5 0 000-1h-6.5v-.5a.5.5 0 00-1 0v.5h-6.5a.5.5 0 000 1h6.5v1h-1.5a4.505 4.505 0 00-4.5 4.5v1c0 1.207.86 2.217 2 2.45v1.05h-.5c-.276 0-.5-.224-.5-.5a.5.5 0 00-1 0c0 .827.673 1.5 1.5 1.5h7a.5.5 0 000-1h-.5v-1.05a2.511 2.511 0 001.834-1.554l5.823-1.921a.5.5 0 00.318-.631zM5.5 8H7v2.5a.5.5 0 01-.5.5H2.036A3.505 3.505 0 015.5 8zM4 16v-1h4v1H4zm4.5-2h-5c-.827 0-1.5-.673-1.5-1.5V12h4.5c.827 0 1.5-.673 1.5-1.5V8h.5c.827 0 1.5.673 1.5 1.5v3c0 .126-.016.247-.045.364l-.003.011A1.503 1.503 0 018.5 14z"
  })));
}
LiniHelicopter.propTypes = {
  size: PropTypes.number.isRequired
};