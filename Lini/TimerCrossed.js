function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from 'react';
import PropTypes from 'prop-types';
export default function LiniTimerCrossed({
  size,
  ...props
}) {
  let className = 'Component Lini LiniTimerCrossed';

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
    d: "M15.51 5.49l-.047-.046 1.413-1.615a.5.5 0 10-.753-.659l-1.412 1.613a8.417 8.417 0 00-4.713-1.769l.001-.015v-1h.5a.5.5 0 000-1h-2a.5.5 0 000 1h.5v1L9 3.014a8.438 8.438 0 00-5.511 2.475c-1.605 1.605-2.49 3.74-2.49 6.01s.884 4.405 2.49 6.01l.047.046-1.413 1.615a.5.5 0 00.752.659l1.412-1.613A8.434 8.434 0 009.499 20c2.27 0 4.405-.884 6.01-2.49s2.49-3.74 2.49-6.01c0-2.27-.884-4.405-2.49-6.01zM2.017 12H2.5a.5.5 0 000-1h-.483C2.275 7.097 5.532 4 9.5 4c1.709 0 3.287.575 4.549 1.542L10 10.17V5.501a.5.5 0 00-1 0v5.812l-4.802 5.488a7.476 7.476 0 01-2.181-4.8zM10 18.983V18.5a.5.5 0 00-1 0v.483a7.458 7.458 0 01-4.049-1.524l9.851-11.258a7.476 7.476 0 012.181 4.8H16.5a.5.5 0 000 1h.483A7.51 7.51 0 0110 18.984z"
  })));
}
LiniTimerCrossed.propTypes = {
  size: PropTypes.number.isRequired
};