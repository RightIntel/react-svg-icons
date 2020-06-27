function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from 'react';
import PropTypes from 'prop-types';
export default function LiniArrowDownCircle({
  size,
  ...props
}) {
  let className = 'Component Lini LiniArrowDownCircle';

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
    d: "M16.218 17.218C18.012 15.424 19 13.038 19 10.5s-.988-4.923-2.782-6.717-4.18-2.782-6.718-2.782-4.923.988-6.718 2.782S0 7.963 0 10.5s.988 4.923 2.782 6.718S6.962 20 9.5 20s4.923-.988 6.718-2.782zM1 10.5C1 5.813 4.813 2 9.5 2S18 5.813 18 10.5c0 4.687-3.813 8.5-8.5 8.5S1 15.187 1 10.5z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M9.853 16.353l4-4a.5.5 0 00-.707-.707L10 14.793V4.5a.5.5 0 00-1 0v10.293l-3.147-3.146a.5.5 0 00-.706.706l4 4a.5.5 0 00.707 0z"
  })));
}
LiniArrowDownCircle.propTypes = {
  size: PropTypes.number.isRequired
};