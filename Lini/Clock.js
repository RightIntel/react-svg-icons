function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from 'react';
import PropTypes from 'prop-types';
export default function LiniClock({
  size,
  ...props
}) {
  let className = 'Component Lini LiniClock';

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
    d: "M16.32 17.113A9.436 9.436 0 0019 10.5c0-2.37-.862-4.608-2.438-6.355l.688-.688.647.646a.497.497 0 00.706 0 .5.5 0 000-.707l-2-2a.5.5 0 00-.707.707l.647.646-.688.688C14.108 1.861 11.87.999 9.5.999s-4.608.862-6.355 2.438l-.688-.688.646-.646a.5.5 0 00-.707-.707l-2 2a.5.5 0 00.708.707l.646-.646.688.688A9.431 9.431 0 000 10.5c0 2.489.951 4.831 2.68 6.613L.646 19.147a.5.5 0 00.708.707l2.06-2.059c1.705 1.428 3.836 2.206 6.087 2.206s4.382-.778 6.087-2.206l2.059 2.059a.5.5 0 10.707-.707l-2.034-2.034zM1 10.5C1 5.813 4.813 2 9.5 2S18 5.813 18 10.5c0 4.687-3.813 8.5-8.5 8.5S1 15.187 1 10.5z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M15.129 7.25a.5.5 0 00-.683-.183l-4.92 2.841-3.835-2.685a.5.5 0 00-.573.819l4.096 2.868.002.002a.401.401 0 00.027.017l.006.004.027.015.006.003.031.014.019.007.013.005.021.006.012.003.022.005a.05.05 0 00.012.002l.021.003.015.002.018.002.027.001H9.5a.525.525 0 00.056-.003h.003a.341.341 0 00.054-.01l.005-.001a.413.413 0 00.104-.038l.011-.006.016-.008 5.196-3a.5.5 0 00.183-.683z"
  })));
}
LiniClock.propTypes = {
  size: PropTypes.number.isRequired
};