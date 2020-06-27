function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from 'react';
import PropTypes from 'prop-types';
export default function LiniCloudWindy({
  size,
  ...props
}) {
  let className = 'Component Lini LiniCloudWindy';

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
    d: "M16.499 12.965a.5.5 0 01-.07-.995A3.012 3.012 0 0019 9a3.004 3.004 0 00-4-2.83.5.5 0 01-.533-.812A2.002 2.002 0 0013 1.999a2.001 2.001 0 00-1.996 1.875.501.501 0 01-.908.257A5.01 5.01 0 006 2a5.006 5.006 0 00-4.98 5.455.5.5 0 01-.996.09A6.007 6.007 0 016 1a6.01 6.01 0 014.261 1.776A3.007 3.007 0 0113 1a3.004 3.004 0 012.828 4.004A4.004 4.004 0 0120 9a3.998 3.998 0 01-3.43 3.96.578.578 0 01-.071.005z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M14.5 12H8c-1.103 0-2-.897-2-2s.897-2 2-2c.946 0 1.77.671 1.959 1.596a.5.5 0 00.98-.2A3.01 3.01 0 008 7c-1.654 0-3 1.346-3 3 0 .768.29 1.469.766 2H2c-.551 0-1-.449-1-1s.449-1 1-1c.423 0 .802.268.943.667a.5.5 0 00.943-.333A2.004 2.004 0 002 9.001c-1.103 0-2 .897-2 2s.897 2 2 2h12.5a.5.5 0 000-1zM4 18c-1.103 0-2-.897-2-2s.897-2 2-2h8.5a.5.5 0 010 1H4c-.551 0-1 .449-1 1s.449 1 1 1c.423 0 .802-.268.943-.667a.5.5 0 01.943.333A2.004 2.004 0 014 17.999z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M15.5 17h-6a.5.5 0 010-1h6a.5.5 0 010 1z"
  })));
}
LiniCloudWindy.propTypes = {
  size: PropTypes.number.isRequired
};