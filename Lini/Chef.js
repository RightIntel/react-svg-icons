function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from 'react';
import PropTypes from 'prop-types';
export default function LiniChef({
  size,
  ...props
}) {
  let className = 'Component Lini LiniChef';

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
    d: "M20 6.5a4.505 4.505 0 00-5.853-4.293C13.222.836 11.671 0 10 0S6.778.836 5.853 2.207A4.505 4.505 0 000 6.5a4.506 4.506 0 004 4.472V19.5a.5.5 0 00.5.5h11a.5.5 0 00.5-.5v-8.528c2.247-.25 4-2.16 4-4.472zM6.558 10.502c.482-.249.92-.587 1.285-.991a5.012 5.012 0 004.314 0c.365.404.802.742 1.285.991a4.516 4.516 0 001.558.469v5.028H5v-5.028a4.516 4.516 0 001.558-.469zM5 19v-2h10v2H5zm10.5-9a3.47 3.47 0 01-2.815-1.42.5.5 0 00-.656-.133 3.99 3.99 0 01-4.058 0 .5.5 0 00-.656.133A3.472 3.472 0 014.5 10C2.57 10 1 8.43 1 6.5a3.504 3.504 0 014.37-3.391 4.97 4.97 0 00-.34 1.336.5.5 0 00.994.11A4.005 4.005 0 0110 1.001c1.452 0 2.793.789 3.499 2.06.258.464.418.967.477 1.495a.5.5 0 00.994-.11 4.924 4.924 0 00-.34-1.336A3.504 3.504 0 0119 6.501c0 1.93-1.57 3.5-3.5 3.5z"
  })));
}
LiniChef.propTypes = {
  size: PropTypes.number.isRequired
};