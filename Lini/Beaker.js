function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from 'react';
import PropTypes from 'prop-types';
export default function LiniBeaker({
  size,
  ...props
}) {
  let className = 'Component Lini LiniBeaker';

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
    d: "M16.534 15.745L12 7.374V2.601c.603-.246 1-.609 1-1.101C13 .464 11.242 0 9.5 0S6 .464 6 1.5c0 .492.397.855 1 1.101v4.773l-4.534 8.371c-.594 1.097-.651 2.154-.16 2.978S3.754 20 5.001 20h9c1.247 0 2.204-.454 2.695-1.277s.434-1.881-.16-2.978zM9.5 1c1.382 0 2.22.315 2.455.5-.235.185-1.073.5-2.455.5s-2.22-.315-2.455-.5C7.28 1.315 8.118 1 9.5 1zm0 2c.514 0 1.029-.04 1.5-.124v4.622a.47.47 0 00.003.053l.001.008c.002.013.003.027.006.04l.006.024.006.023a.37.37 0 00.015.041l.002.006.023.048L14.452 14c-.726-.013-1.222-.321-1.873-.879-.418-.358-.962-.804-1.58-1.186A2.002 2.002 0 009.001 10a2 2 0 00-1.758 1.048c-.43.054-.851.155-1.257.3L7.94 7.74a.682.682 0 00.023-.047l.003-.008.014-.038.006-.024.006-.023a.323.323 0 00.006-.042l.001-.007a.47.47 0 00.003-.053V2.876c.471.083.986.124 1.5.124zM9 11c.551 0 1 .449 1 1s-.449 1-1 1-1-.449-1-1 .449-1 1-1zm6.836 7.211c-.303.509-.955.789-1.836.789H5c-.881 0-1.533-.28-1.836-.789s-.239-1.216.181-1.99l1.802-3.327a4.978 4.978 0 011.856-.794A2.002 2.002 0 009 14c.753 0 1.41-.418 1.751-1.034.449.303.853.636 1.177.914.807.692 1.519 1.12 2.572 1.12.16 0 .319-.011.476-.033l.679 1.254c.419.774.484 1.481.181 1.99z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M6.5 15c-.827 0-1.5.673-1.5 1.5S5.673 18 6.5 18 8 17.327 8 16.5 7.327 15 6.5 15zm0 2a.5.5 0 110-1 .5.5 0 010 1zM9.5 15a.498.498 0 00-.5.5.498.498 0 00.5.5.498.498 0 00.5-.5.498.498 0 00-.5-.5z"
  })));
}
LiniBeaker.propTypes = {
  size: PropTypes.number.isRequired
};