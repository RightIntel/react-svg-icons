function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from 'react';
import PropTypes from 'prop-types';
export default function LiniCartPlus2({
  size,
  ...props
}) {
  let className = 'Component Lini LiniCartPlus2';

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
    d: "M17.539 4.467A1.351 1.351 0 0016.5 4h-4a.5.5 0 000 1h4c.117 0 .215.04.276.113s.085.176.066.291l-.671 4.027c-.053.316-.391.629-.711.657l-10.043.873-.994-5.962h4.076a.5.5 0 000-1H4.256l-.099-.596a1.718 1.718 0 00-1.658-1.404h-1a.5.5 0 000 1h1c.307 0 .621.266.671.569l1.671 10.027a1.718 1.718 0 001.658 1.404h10a.5.5 0 000-1h-10a.724.724 0 01-.671-.569l-.247-1.48 9.965-.867c.775-.067 1.483-.721 1.611-1.489l.671-4.027a1.354 1.354 0 00-.289-1.102zM8 20c-1.103 0-2-.897-2-2s.897-2 2-2 2 .897 2 2-.897 2-2 2zm0-3c-.551 0-1 .449-1 1s.449 1 1 1 1-.449 1-1-.449-1-1-1zM15 20c-1.103 0-2-.897-2-2s.897-2 2-2 2 .897 2 2-.897 2-2 2zm0-3c-.551 0-1 .449-1 1s.449 1 1 1 1-.449 1-1-.449-1-1-1z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M12.5 6H11V4.5a.5.5 0 00-1 0V6H8.5a.5.5 0 000 1H10v1.5a.5.5 0 001 0V7h1.5a.5.5 0 000-1z"
  })));
}
LiniCartPlus2.propTypes = {
  size: PropTypes.number.isRequired
};