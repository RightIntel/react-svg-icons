function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from 'react';
import PropTypes from 'prop-types';
export default function LiniBatteryCharging3({
  size,
  ...props
}) {
  let className = 'Component Lini LiniBatteryCharging3';

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
    d: "M6.5 16h-5C.673 16 0 15.327 0 14.5v-8C0 5.673.673 5 1.5 5h5a.5.5 0 010 1h-5a.5.5 0 00-.5.5v8a.5.5 0 00.5.5h5a.5.5 0 010 1zM17.5 8H17V6.5c0-.827-.673-1.5-1.5-1.5h-5a.5.5 0 000 1h5a.5.5 0 01.5.5v8a.5.5 0 01-.5.5h-5a.5.5 0 000 1h5c.827 0 1.5-.673 1.5-1.5V13h.5c.827 0 1.5-.673 1.5-1.5v-2c0-.827-.673-1.5-1.5-1.5zm.5 3.5a.5.5 0 01-.5.5H17V9h.5a.5.5 0 01.5.5v2z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M8.5 16a.501.501 0 01-.465-.686L9.761 11H6.499a.499.499 0 01-.464-.686l2-5a.501.501 0 01.929.371L7.238 9.999H10.5a.499.499 0 01.464.686l-2 5a.499.499 0 01-.464.314zM2.5 14a.5.5 0 01-.5-.5v-6a.5.5 0 011 0v6a.5.5 0 01-.5.5zM4.5 14a.5.5 0 01-.5-.5v-6a.5.5 0 011 0v6a.5.5 0 01-.5.5z"
  })));
}
LiniBatteryCharging3.propTypes = {
  size: PropTypes.number.isRequired
};