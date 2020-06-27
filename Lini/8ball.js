function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from 'react';
import PropTypes from 'prop-types';
export default function Lini8ball({
  size,
  ...props
}) {
  let className = 'Component Lini Lini8ball';

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
    d: "M9.5 20c-2.538 0-4.923-.988-6.718-2.782S0 13.038 0 10.501c0-2.538.988-4.923 2.782-6.718S6.962 1 9.5 1c2.538 0 4.923.988 6.718 2.783S19 7.963 19 10.501s-.988 4.923-2.782 6.717A9.438 9.438 0 019.5 20zm0-18C4.813 2 1 5.813 1 10.5S4.813 19 9.5 19s8.5-3.813 8.5-8.5S14.187 2 9.5 2z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M9.5 15C7.019 15 5 12.981 5 10.5S7.019 6 9.5 6 14 8.019 14 10.5 11.981 15 9.5 15zm0-8C7.57 7 6 8.57 6 10.5S7.57 14 9.5 14s3.5-1.57 3.5-3.5S11.43 7 9.5 7z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M11 9.5c0-.827-.673-1.5-1.5-1.5a1.502 1.502 0 00-1.117 2.5A1.502 1.502 0 009.5 13a1.502 1.502 0 001.117-2.5c.238-.266.383-.616.383-1zM9.5 9a.5.5 0 110 1 .5.5 0 010-1zm0 3a.5.5 0 110-1 .5.5 0 010 1z"
  })));
}
Lini8ball.propTypes = {
  size: PropTypes.number.isRequired
};