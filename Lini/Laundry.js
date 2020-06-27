function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from 'react';
import PropTypes from 'prop-types';
export default function LiniLaundry({
  size,
  ...props
}) {
  let className = 'Component Lini LiniLaundry';

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
    d: "M14 3.5a.5.5 0 11-1 0 .5.5 0 011 0zM16 3.5a.5.5 0 11-1 0 .5.5 0 011 0zM9.5 18C6.467 18 4 15.533 4 12.5S6.467 7 9.5 7 15 9.467 15 12.5 12.533 18 9.5 18zm0-10C7.019 8 5 10.019 5 12.5S7.019 17 9.5 17s4.5-2.019 4.5-4.5S11.981 8 9.5 8z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M9.5 16a.5.5 0 010-1c1.378 0 2.5-1.122 2.5-2.5a.5.5 0 011 0c0 1.93-1.57 3.5-3.5 3.5z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M15.5 1h-12A2.503 2.503 0 001 3.5v15c0 .827.673 1.5 1.5 1.5h14c.827 0 1.5-.673 1.5-1.5v-15C18 2.122 16.878 1 15.5 1zm-12 1h12c.827 0 1.5.673 1.5 1.5V5H2V3.5C2 2.673 2.673 2 3.5 2zM17 18.5a.5.5 0 01-.5.5h-14a.5.5 0 01-.5-.5V6h15v12.5z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M5.5 4h-2a.5.5 0 010-1h2a.5.5 0 010 1z"
  })));
}
LiniLaundry.propTypes = {
  size: PropTypes.number.isRequired
};