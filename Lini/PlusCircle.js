function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from 'react';
import PropTypes from 'prop-types';
export default function LiniPlusCircle({
  size,
  ...props
}) {
  let className = 'Component Lini LiniPlusCircle';

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
    d: "M16.218 3.782C14.424 1.988 12.038 1 9.5 1s-4.923.988-6.718 2.782S0 7.962 0 10.499s.988 4.923 2.782 6.718 4.18 2.782 6.718 2.782 4.923-.988 6.718-2.782S19 13.037 19 10.499s-.988-4.923-2.782-6.717zM9.5 19C4.813 19 1 15.187 1 10.5S4.813 2 9.5 2c4.687 0 8.5 3.813 8.5 8.5S14.187 19 9.5 19z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M15.5 10H10V4.5a.5.5 0 00-1 0V10H3.5a.5.5 0 000 1H9v5.5a.5.5 0 001 0V11h5.5a.5.5 0 000-1z"
  })));
}
LiniPlusCircle.propTypes = {
  size: PropTypes.number.isRequired
};