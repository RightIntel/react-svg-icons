function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from 'react';
import PropTypes from 'prop-types';
export default function LiniCloudCrossed({
  size,
  ...props
}) {
  let className = 'Component Lini LiniCloudCrossed';

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
    d: "M16 8c-.058 0-.115.001-.172.004a3.005 3.005 0 00.092-1.694L17.8 4.9a.5.5 0 10-.6-.8l-1.686 1.265a3 3 0 00-5.253.411A6.01 6.01 0 006 4c-3.308 0-6 2.692-6 6a6 6 0 002.676 4.993L1.2 16.1a.5.5 0 10.6.8l1.843-1.383C4.367 15.827 5.164 16 6 16h10c2.206 0 4-1.794 4-4s-1.794-4-4-4zM1 10c0-2.757 2.243-5 5-5 1.628 0 3.159.797 4.096 2.131a.5.5 0 00.908-.256A2.002 2.002 0 0113 5c.725 0 1.361.388 1.712.966L3.535 14.348A5.002 5.002 0 011 9.999zm15 5H6c-.486 0-.956-.07-1.4-.2L15 7c0 .506-.189.988-.533 1.359a.502.502 0 00.533.812 3.004 3.004 0 014 2.83c0 1.654-1.346 3-3 3z"
  })));
}
LiniCloudCrossed.propTypes = {
  size: PropTypes.number.isRequired
};