function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from 'react';
import PropTypes from 'prop-types';
export default function LiniThermometer({
  size,
  ...props
}) {
  let className = 'Component Lini LiniThermometer';

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
    d: "M13.5 3h-1a.5.5 0 010-1h1a.5.5 0 010 1zM14.5 5h-2a.5.5 0 010-1h2a.5.5 0 010 1zM13.5 7h-1a.5.5 0 010-1h1a.5.5 0 010 1zM14.5 9h-2a.5.5 0 010-1h2a.5.5 0 010 1zM13.5 11h-1a.5.5 0 010-1h1a.5.5 0 010 1zM9 14.086V4.5a.5.5 0 00-1 0v9.586c-.582.206-1 .762-1 1.414 0 .827.673 1.5 1.5 1.5s1.5-.673 1.5-1.5c0-.652-.418-1.208-1-1.414zM8.5 16a.5.5 0 110-1 .5.5 0 010 1z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M8.5 20A4.505 4.505 0 014 15.5c0-1.503.759-2.911 2-3.742V2.5C6 1.122 7.122 0 8.5 0S11 1.122 11 2.5v9.258c1.241.831 2 2.239 2 3.742 0 2.481-2.019 4.5-4.5 4.5zm0-19C7.673 1 7 1.673 7 2.5v9.535a.5.5 0 01-.25.433A3.513 3.513 0 005 15.5C5 17.43 6.57 19 8.5 19s3.5-1.57 3.5-3.5a3.515 3.515 0 00-1.75-3.032.5.5 0 01-.25-.433V2.5C10 1.673 9.327 1 8.5 1z"
  })));
}
LiniThermometer.propTypes = {
  size: PropTypes.number.isRequired
};